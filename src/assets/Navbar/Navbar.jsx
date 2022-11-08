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
<Link>Home</Link>
<Link>About Me</Link>
<Link>Projects</Link>
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
