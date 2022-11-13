import React from 'react'
import {useRef} from 'react';
import { Link } from "react-router-dom"
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';
function Home() {
  const ref1 = useRef(null);
const ref2 = useRef(null);
const ref3 = useRef(null);

/* KEYFRAME NAVBAR */

setTimeout(() => {
  const navbar = document.querySelector("#diss").classList.add("appear-nav")
}, 2000);

/* KEYFRAME NAVBAR */




  const handleClick1 = () => {
    ref1.current?.scrollIntoView({inline: "center", behavior: 'smooth'});
  };
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({inline: "center", behavior: 'smooth'});
  };
  const handleClick3 = () => {
    ref3.current?.scrollIntoView({inline: "center", behavior: 'smooth'});
  };

  return (
    <div className='all'>

                                        {/* SECTION 1 */}
      <section ref={ref1} id='Home' className='home appear'>
      <div id='diss' className="navs">
        <div className="nav-media">
            <div className="nav-icon"></div>

        </div>

        <div className="nav">

      <div className="nav-links appear-r">
<Link onClick={handleClick1}>Home</Link>
<Link onClick={handleClick2}>About Me</Link>
<Link onClick={handleClick3}>Projects</Link>
      </div>
      <div className="nav-cv appear-l">
        <Link className="home-btn"> 
         Dowloand My CV
        </Link>
      </div>
    </div>
        </div>
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
      <footer>         <a target="_blank" href="https://github.com/eNewery">
        <div className="ghubwh appear-r"></div>
        </a><p>Developed by eNewery</p>          <a target="_blank" href="https://www.linkedin.com/in/ulises-rodriguez-5b512a230/">
          <div className="linkedinwh appear-l"></div>
          </a></footer>
        </section> 
                                                {/* SECTION 1 */}




                                                {/* SECTION 2 */}
        <section ref={ref2} id='About' className='home'></section>
                                                {/* SECTION 2 */}


                                                        {/* SECTION 3 */}
        <section ref={ref3} id='Projects' className='home'></section>
                                                        {/* SECTION 3 */}
    </div>
  )
}

export default Home