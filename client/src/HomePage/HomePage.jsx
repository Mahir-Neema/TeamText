import React, { useState } from "react";
import "./HomePage.css";
import { NavLink, useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function HomePage() {
  const [docId, setdocId] = useState("");
  const navigate = useNavigate();

  function getDoc() {
    navigate(`/documents/${docId}`);
  }

  function isUUID(str) {
    // Regular expression for a version 4 UUID
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    // Testing the input string against the regex
    return uuidRegex.test(str);
  }

  return (
    <div className="HomePage_container">    
      <div className="main_text_sec">
        <div>
          <span className="purpleclr">Craft</span> and{" "}
          <span className="skyblueclr">Edit Together</span>
        </div>
        <div>
          <span className="lightredclr">"Real-Time</span> Collaboration{" "}
          <span className="orgclr">Magic"</span>
        </div>
      </div>

      <div className="new_doc_btn">
        <NavLink to={`/documents/${uuidV4()}`}>New Doc</NavLink>
      </div>

      <div className="join_room">
        <div>Join Room</div>
        <input
          className="roomid-input"
          type="text"
          placeholder="Enter Room ID"
          onChange={(e) => setdocId(e.target.value)}
        />
        {isUUID(docId) ? (
          <button
            className="roomid-button"
            type="submit"
            onClick={() => getDoc()}
          >
            Join
          </button>
        ) : (<>
          <button
            className="roomid-button disabled"
            type="submit"
          >
            Join
          </button>
          {docId && <div>Room ID not valid</div>}
          </>
        )}
      </div>

      <div className="homepage_img">
        <img src="HomepageImg.png" alt='window'/>
      </div>

    </div>
  );
}

export default HomePage;
