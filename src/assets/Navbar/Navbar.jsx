import React from "react";
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div id='diss' className="navs">
    <div className="nav-media">
        <div className="nav-icon"></div>

    </div>

    <div className="nav">

  <div className="nav-links">
<Link to="/Home" className='nav-link'>Inicio</Link>
<Link to="/Projects" className='nav-link'>Proyectos</Link>
<Link to="/About" className='nav-link'>Conóceme!</Link>
  </div>
  <div className="nav-cv">
  <Link onMouseOut={() => {
            let cursor = document.querySelector("#cursor")
            cursor.classList.remove("ring")
            cursor.classList.add("ring-disabled")
}} onMouseMove={() => {
  let cursor = document.querySelector("#cursor")
  cursor.classList.remove("ring-disabled")
  cursor.classList.add("ring")
}} id="next" class="btn-neon">
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
        Dowloand My CV
    </Link>
  </div>
</div>
    </div>
  );
}

export default Navbar;
