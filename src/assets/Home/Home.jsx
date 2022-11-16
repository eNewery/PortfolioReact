import React from 'react'
import { Link } from "react-router-dom"
import $ from "jquery";
function Home() {
  var $ = require( "jquery" );
/* const [btnState, setBtnState] = useState(true);

const homeRight = document.querySelector(".home-right")
const homeRightText = document.querySelector(".home-right-text")
function btnExtend() {
  setBtnState(btnState => !btnState)
}

setTimeout(() => {
  const btnFunction = document.getElementById("next");
  btnFunction.addEventListener("click", btnExtend)
}, 1000);
if (btnState === true) {
  $(".home-right-text").show()
  }
if (btnState === false) {
    $(".home-right-text").hide()
  }
let toggleClassCheck = btnState ? ' height ' : ' height- ';
 */
/* KEYFRAME NAVBAR */

  return (
    <div className='all'>

                                        {/* SECTION 1 */}
      <section id='Home' className='home appear'>
      <div id='diss' className="navs">
    <div className="nav-media">
        <div className="nav-icon"></div>

    </div>

    <div className="nav">

  <div className="nav-links appear-r">
<Link to="/Home" className='nav-link'>Inicio</Link>
<Link to="/Projects" className='nav-link'>Proyectos</Link>
<Link to="/About" className='nav-link'>Conóceme!</Link>
  </div>
  <div className="nav-cv appear-l">
    <Link className="home-btn" onMouseOut={() => {
                let cursor = document.querySelector("#cursor")
                cursor.classList.remove("ring")
                cursor.classList.add("ring-disabled")
                setTimeout(() => {
                  cursor.classList.remove("ring-disabled")
                }, 1000);
    }} onMouseMove={() => {
      let cursor = document.querySelector("#cursor")
      cursor.classList.remove("ring-disabled")
      cursor.classList.add("ring")
    }}> 
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
        <button className='home-btn' onMouseOut={() => {
                    let cursor = document.querySelector("#cursor")
                    cursor.classList.remove("ring")
                    cursor.classList.add("ring-disabled")
        }}
         onMouseMove={() => {
          let cursor = document.querySelector("#cursor")
          cursor.classList.remove("ring-disabled")
          cursor.classList.add("ring")
        }}>Más acerca de mi</button>
      </div>
      </div>
{/*       <div className={`home-right ${toggleClassCheck}`}>
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
       Extend - Close
    </button>
    <div class="home-right-text appear-l"><p>
        Mi nombre es Ulises Rodriguez, tengo 21 años y comencé mi carrera como Desarrollador Front-End en principios de 2021. Complete mi carrera en Coderhouse e hice cursos de WMedia, Fazt, HolaMundo, MiDudev, entre otros. Mi objetivo es aprender y obtener la mayor cantidad de conocimientos posibles, ya sean los más actuales como los más longevos utilizados en la actualidad. En un futuro planeo estudiar Ingeniería Informática ya que me apasiona el estudio y el aprendizaje, mientras tanto busco trabajar con empresas y/o otros profesionales que tengan las mismas ganas de enseñar como las que yo tengo de aprender. Gracias por visitar mi portfolio!</p><div></div></div>
      
          </div> */}
      </div>
      <footer>         <a target="_blank" href="https://github.com/eNewery">
        <div className="ghubwh appear-r"></div>
        </a><p>Developed by eNewery</p>          <a target="_blank" href="https://www.linkedin.com/in/ulises-rodriguez-5b512a230/">
          <div className="linkedinwh appear-l"></div>
          </a></footer>
        </section> 
    </div>
  )
}

export default Home