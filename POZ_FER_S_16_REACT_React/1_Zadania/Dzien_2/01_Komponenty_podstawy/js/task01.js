import React, {Component} from "react";
import ReactDOM from "react-dom";


// function LikeBox(){
//     return(
//     <>
//         <p>100 likes</p>
//         <button>Lubię To!</button>

//     </>
//     )}
// ReactDOM.render(
//   LikeBox(),
//   document.getElementById("app")
// );


function LikeBox() {
  return(
    <>
    <p>100likes</p>
    <button>Lubie to!</button>

    </>
  )
}


ReactDOM.render(
  <LikeBox/>,
  document.querySelector("#app")
)