import React from 'react'
import TextEditor from './TextEditor'
import {BrowserRouter as Router, Routes ,Route, Navigate } from 'react-router-dom';
import {v4 as uuidV4} from 'uuid';
import Navbar from './Navbar/Navbar';
import HomePage from './HomePage/HomePage';
import Techstack from './Techstack/Techstack';
import About from './About/About';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/documents/:id" element={<TextEditor/>} />
        <Route path="/techstack" element={<Techstack/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App