import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import Techstack from "../Techstack/Techstack";

function Navbar() {
  const [RoomId, setRoomId] = useState("");
  const [Url, setUrl] = useState("");
  const [alertflag, setalertflag] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    setUrl(window.location.href);
    const room_id = pathname.split("/").pop();
    setRoomId(room_id);
  }, [location]);

  const copyRoomId = async () => {
    try {
      await navigator.clipboard.writeText(RoomId);

      setalertflag(true);
      setTimeout(() => {
        setalertflag(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      alert("failed to copy");
    }
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(Url);
    
      setalertflag(true);
      setTimeout(() => {
        setalertflag(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      alert("failed to copy");
    }
  };

  return (
    <>
      <div className="Navbar_container">
        <div className="Navbar_nav">
          <div className="left">
            <img src="logo.png" width={27} />
            <NavLink to="/">TeamText</NavLink>
          </div>
          <div className="center">
            <NavLink to={`/documents/${uuidV4()}`}>New Doc</NavLink>
            <NavLink to="/about">About</NavLink>
            <a href="https://github.com/Mahir-Neema/TeamText" target="blank">
              Github
            </a>
          </div>
          <div className="right">
            {RoomId.length > 20 ? (
              <>
                <button onClick={copyUrl}>Copy URL</button>
                <button onClick={copyRoomId}>Room ID</button>
              </>
            ) : (
              <>
                <button><NavLink to='/documents/6a3e4296-80ab-4903-80e0-7da0530bca75'>Try Now</NavLink></button>
                <button><NavLink to='/techstack'>Tech Stack</NavLink></button>
              </>
            )}
          </div>
        </div>

        {/* {alertflag && <div className="copyalert">Copied to clipboard!</div>} */}
        {alertflag && (
          <div className="alert-container">
            <div className="slide-in-out">Copied to clipboard!</div>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
