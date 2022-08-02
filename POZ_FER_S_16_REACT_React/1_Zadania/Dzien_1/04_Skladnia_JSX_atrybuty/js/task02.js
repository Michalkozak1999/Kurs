import React from "react";
import ReactDOM from "react-dom";

// const color = prompt('let border color');

// ReactDOM.render(
//   <div style={{border:`5px solid ${color}` , height:'100px'}}></div>,
//   document.getElementById("app")
// );


const chooseyourcolor = prompt("choose ur color");

let color;

let colorred = {
  height: "100px",
  weight: "100px",
  border: '5px solid red'
}

let colorgreen = {
  height: "100px",
  weight: "100px",
  border: '5px solid green'
}

let colorblue = {
  height: "100px",
  weight: "100px",
  border: '5px solid blue'
}

  
if(chooseyourcolor.indexOf("red")===0){
  console.log("jebać fubu")
  color = <div style = {colorred}>Kocham fubu</div>
} else if (chooseyourcolor.indexOf("green")===0){
  color = <div style = {colorgreen}>Kocham fubu</div>
} else if (chooseyourcolor.indexOf("blue")===0){
  color = <div style = {colorblue}>Kocham fubu</div>
} else {
  color= <div>Niepoprawny color wariacie</div>
}


ReactDOM.render(
<div>{color}</div>,
document.querySelector("#app")
)