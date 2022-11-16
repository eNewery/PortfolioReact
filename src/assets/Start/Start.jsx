import React from 'react'
import { useNavigate } from "react-router-dom"
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';
import Cursor from '../Cursor/Cursor';
function Start() {
  const navigate = useNavigate();
setTimeout(() => {
  const container = document.querySelector(".start-container").classList.remove("appear");
}, 4000);
    setTimeout(() => {
        const btnNext = document.getElementById("next").addEventListener("click", () => {
            const container = document.querySelector(".start-container").classList.add("gradient");
            setTimeout(() => {
              navigate("/Loading")
              container.classList.remove("appear")
            }, 2000);
    }, 1000);

})

  return (
    <div className='start-container appear'>
      <div className="start-total-container">

        <h3>Hi, welcome to</h3>
        <div className="start-image"></div>
        <h3>my portfolio</h3>
        <button onMouseOut={() => {
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
        See More
    </button>
        <div className='rrss'>
          <a target="_blank" href="https://www.linkedin.com/in/ulises-rodriguez-5b512a230/">
          <div className="linkedin"></div>
          </a>
        <a target="_blank" href="https://github.com/eNewery">
        <div className="ghub"></div>
        </a>
        </div>
        </div>
        </div>
  )
}

export default Start