import React from 'react'
import { useNavigate } from 'react-router-dom'
import bootstrap from "../images/bootstrap.png"
import git from "../images/git.png"
import tailwind from "../images/tailwind.png"
import javascript from "../images/javascript.png"
import react from "../images/react.png"
import html from "../images/html.png"
import css from "../images/css.png"
import redux from "../images/redux.png"
import jquery from "../images/jquery.png"
import figma from "../images/figma.png"
import "./About.css"
import Navbar from '../Navbar/Navbar'

function About() {

  const navigate = useNavigate();

setTimeout(() => {
  const btn = document.querySelector(".about-swipe").addEventListener("click", () => {
    const container = document.querySelector(".home").classList.add("gradient-about");
}, 2000);

})
  return (
    <div className='home appear about'>
      <Navbar/>
      <div className="about-sections">
<section className='about-left'>
  <div className="about-left-card">
  <h1>Skills</h1>
  </div>
  </section>



<aside className='about-right'>
  <div className='about-image-container'><div className='about-title-image'><h3>HTML</h3><img src={html} alt="" /></div><div className='about-title-image'><h3>CSS</h3><img src={css} alt="" /></div></div>
  <div className='about-image-container'><div className='about-title-image'><h3>JAVASCRIPT</h3><img src={javascript} alt="" /></div><div className='about-title-image'><h3>REACT</h3><img src={react} alt="" /></div></div>
  <div className='about-image-container'><div className='about-title-image'><h3>JQUERY</h3><img src={jquery} alt="" /></div><div className='about-title-image'><h3>REDUX</h3><img src={redux} alt="" /></div></div>
  <div className='about-image-container'><div className='about-title-image'><h3>BOOTSTRAP</h3><img src={bootstrap} alt="" /></div><div className='about-title-image'><h3>TAILWIND</h3><img src={tailwind} alt="" /></div></div>
  <div className='about-image-container'><div className='about-title-image'><h3>GIT</h3><img src={git} alt="" /></div><div className='about-title-image'><h3>FIGMA</h3><img src={figma} alt="" /></div></div>
  <button className="about-swipe swipe"> Click for More</button>
</aside>        
      </div>
    </div>
  )
}

export default About;