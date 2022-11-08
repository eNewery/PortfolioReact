import React from 'react'
import Navbar from '../Navbar/Navbar';
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();
  setTimeout(() => {
    const container = document.querySelector(".home").classList.remove("appear");
  }, 1500);
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
if (scrolled !== 0) {
  const container = document.querySelector(".home").classList.add("gradient");
  setTimeout(() => {
    navigate("/About")
    container.classList.remove("appear")
  }, 2000);
}
})

  return (
    <div className='home appear'>
      <Navbar/>
      <div className="home-total-container">
      <div className="home-container">
      <div className="home-image"></div>
      <div className="home-text">
        <h3>Ulises Rodriguez</h3>
        <h3>Front-End Developer</h3>
        <button className='home-btn'>Contact Me!</button>
      </div>
      </div>
      </div>
      <div className="swipe">˅ Swipe for More ˅</div>
    </div>
  )
}

export default Home