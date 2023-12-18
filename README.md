# Collaborative Text Editor: [Try Here](https://teamtext.netlify.app/)

This project implements a simple collaborative text editor using React, Socket.IO, and MongoDB. Multiple users can edit a document in real-time.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Mahir-Neema/TeamText
```

### Docker Image

For the server side, you can use the Docker image available on Docker Hub:

```bash
docker pull mohi272020/collaborative-text-editor
```

### Server Side

To run the server using Node.js:

```bash
node server.js
```

Or using Docker:

```bash
docker run -p 3001:3001 mohi272020/collaborative-text-editor
```

### Client Side

For the client, run the following commands:

```bash
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Technologies Used

- React.js
- Node.js
- Express.js
- Socket.IO
- MongoDB
- Docker
  
Feel free to explore and enhance the features of this collaborative text editor!
