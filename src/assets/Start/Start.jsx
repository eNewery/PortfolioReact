import React from 'react'
import logo from "../images/start.jpg"
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
        <h3>Hi, Im Ulises Rodriguez</h3>
        <div className="start-image"></div>
        <h3>A Front-End Developer</h3>
        <button id='next'>See More</button>
        </div>
        </div>
  )
}

export default Start