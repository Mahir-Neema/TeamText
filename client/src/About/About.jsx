import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about_page">
        <div className="ap_heading">About TeamText</div>
        <div className="ap_content">
        Elevate your collaborative writing experience with meticulously designed real-time text editor. Engineered using React, Quill.js, and Socket.IO, enables synchronized multi-user editing. Dynamic routing via React Router yields unique document URLs, complemented by MongoDB for efficient storage and retrieval of collaborative content. Empower your document creation and sharing journey with the text editor, ensuring real-time updates for a seamless collaborative workflow.
        </div>
    </div>
  )
}

export default About