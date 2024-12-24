const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Document = require('./Document'); // Document model
const cors = require('cors'); 
require('dotenv').config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://team-text.netlify.app',
  'https://teamtext.netlify.app',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST"],
};

// CORS middleware
app.use(cors(corsOptions));

// Serve the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handling client-side routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

const mongoUri = process.env.MONGODB_URI;
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(e => console.error(e));

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const io = require("socket.io")(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on('get-document', async documentId => {
    const document = await findOrCreateDocument(documentId);
    socket.join(documentId);
    socket.emit('load-document', document.data)

    socket.on('send-changes', delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on('save-document', async data => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });
});

const defaultValue = "";

async function findOrCreateDocument(id){
    if(id == null) return;

    const document = await Document.findById(id);
    if(document) return document;
 
    return await Document.create({ _id: id, data: defaultValue });
}
