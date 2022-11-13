import React from "react";
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className="navs">
        <div className="nav-media">
            <div className="nav-icon"></div>

        </div>

        <div className="nav">

      <div className="nav-links">
<a href="#Home">Home</a>
<a href="#About">About Me</a>
<a href="#Projects">Projects</a>
      </div>
      <div className="nav-cv">
        <Link className="home-btn"> 
         Dowloand My CV
        </Link>
      </div>
    </div>
        </div>
  );
}

export default Navbar;
