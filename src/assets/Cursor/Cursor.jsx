import React from 'react'
import "./Cursor.css"
function Cursor() {
    setTimeout(() => {
        var cursor = document.querySelector("#cursor");
        document.addEventListener("mousemove", function(e){
            var x = e.clientX;
            var y = e.clientY;
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
        })
    }, 1000);

  return (
    <div id='cursor'></div>
  )
}

export default Cursor