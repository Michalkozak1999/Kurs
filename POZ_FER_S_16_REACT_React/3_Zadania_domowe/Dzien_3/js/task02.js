import React, {Component} from "react";
import ReactDOM from "react-dom";


function UpperCaseText(props) {
  return <h2>{props.text.toLocaleUpperCase()}</h2>;
}


ReactDOM.render(
  <UpperCaseText text="Hello Components World!"/>,
  document.getElementById("app")
);
