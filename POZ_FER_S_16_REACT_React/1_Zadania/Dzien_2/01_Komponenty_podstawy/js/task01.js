import React, {Component} from "react";
import ReactDOM from "react-dom";


function LikeBox(){
    return(
    <>
        <p>100 likes</p>
        <button>Lubię To!</button>

    </>
    )}
ReactDOM.render(
  LikeBox(),
  document.getElementById("app")
);
