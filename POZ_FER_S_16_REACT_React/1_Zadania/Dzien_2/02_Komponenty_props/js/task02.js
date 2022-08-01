import React, {Component} from "react";
import ReactDOM from "react-dom";

function LikeBox(props){
    return(
        <>
            <p>{props.likes} likes</p>
            <button> Lubię To!</button>

        </>
    )}
ReactDOM.render(
    <LikeBox likes='20'/>,
  document.getElementById("app")
);
