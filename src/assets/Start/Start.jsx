import React from 'react'
import { useNavigate } from "react-router-dom"
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
        <button className='start-btn' id='next'>See More</button>
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