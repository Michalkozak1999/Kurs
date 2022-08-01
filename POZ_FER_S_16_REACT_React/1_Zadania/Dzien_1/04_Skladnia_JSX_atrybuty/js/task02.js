import React from "react";
import ReactDOM from "react-dom";

const color = prompt('let border color');

ReactDOM.render(
  <div style={{border:`5px solid ${color}` , height:'100px'}}></div>,
  document.getElementById("app")
);
