import React from "react";
import Navbar from "../Navbar/Navbar";
function About() {
  return (
    <div id="About" className="appear">
      <Navbar />
      <div className="about-container">
        {/* GRID 1 */}
        <div className="about-title">
            <h1>Ulises Rodriguez</h1>
        <h3> Mi nombre es Ulises Rodriguez, tengo 21 años y comencé mi carrera como Desarrollador Front-End en principios de 2021. Complete mi carrera en Coderhouse e hice cursos de WMedia, Fazt, HolaMundo, MiDudev, entre otros. Mi objetivo es aprender y obtener la mayor cantidad de conocimientos posibles, ya sean los más actuales como los más longevos utilizados en la actualidad. En un futuro planeo estudiar Ingeniería Informática ya que me apasiona el estudio y el aprendizaje, mientras tanto busco trabajar con empresas y/o otros profesionales que tengan las mismas ganas de enseñar como las que yo tengo de aprender. Gracias por visitar mi portfolio!</h3>
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
        Contact!
    </button>
        </div>

        {/* GRID 2 */}
        <div className="about-education"><h2>Education</h2>
        <ul>
    <li>• Coderhouse | Desarrollo Web
        <p>HTML, CSS (CSS Flexbox, CSS Grids, Keyframes, MediaQueries [Responsive Design]), SASS, Bootstrap, Git, Github, SEO</p>
    </li>
    <li>• Coderhouse | JavaScript
        <p>Array, DOM, Storage, JSON, Promises, Async, jQuery, AJAX, JSON y Fetch</p>
    </li>
    <li>• Coderhouse | React.js
        <p>Components, Events, Routing, Context, Redux Toolkit y Firebase</p>
    </li>
</ul>
        </div>

        {/* GRID 3 */}
        <div className="about-skills"><h2>Skills</h2>
        <div className="icons">
        <i class="devicon-html5-plain"></i>
        <i class="devicon-css3-plain"></i>
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-jquery-plain"></i>
        <i class="devicon-react-original"></i>
        <i class="devicon-redux-original"></i>
        <i class="devicon-bootstrap-plain"></i>
        <i class="devicon-tailwindcss-original-wordmark"></i>
        <i class="devicon-github-original"></i>
        <i class="devicon-figma-plain"></i>
        </div>

        </div>

        </div>
        <footer>         <a target="_blank" href="https://github.com/eNewery">
        <div className="ghubwh appear-r"></div>
        </a><p>Developed by eNewery</p>          <a target="_blank" href="https://www.linkedin.com/in/ulises-rodriguez-5b512a230/">
          <div className="linkedinwh appear-l"></div>
          </a></footer>
    </div>
  );
}

export default About;
