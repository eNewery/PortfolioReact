import React from 'react'
import { useNavigate  } from 'react-router-dom'
import "./Cloud.css"

function Cloud() {
const navigate = useNavigate();
setTimeout(() => {
   navigate("/Home") 
}, 3000);
    return (
    <div class="center appear">
    <div id = "cloud"></div>
  </div>
  )
}

export default Cloud