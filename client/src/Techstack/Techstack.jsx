import React from 'react'
import './TechStack.css'

function Techstack() {
  return (
    <div className="techstack_container">
        <div className="tech_heading">Tech Stack</div>

        <div className="technologies">
            <div className="tech_card">
                <div className="image">
                    <img src='./TechStack/React.png' alt='nodejs'/>
                </div>
            </div>
            <div className="tech_card">
                <div className="image">
                    <img src='./TechStack/Nodejs.png' alt='nodejs'/>
                </div>
            </div>
            <div className="tech_card">
                <div className="image">
                    <img src='./TechStack/Mongodb.png' alt='nodejs'/>
                </div>
            </div>
            <div className="tech_card">
                <div className="image">
                    <img src='./TechStack/Socketio.png' alt='nodejs'/>
                </div>
            </div>
            <div className="tech_card">
                <div className="image">
                    <img src='./TechStack/Docker.png' alt='nodejs'/>
                </div>
            </div>
            <div className="tech_card">
                <div className="image">
                    <img src='./TechStack/Render.png' alt='nodejs'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Techstack