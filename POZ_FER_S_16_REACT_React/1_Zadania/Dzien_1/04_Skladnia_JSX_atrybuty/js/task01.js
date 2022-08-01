import React from "react";
import ReactDOM from "react-dom";

const redDiv = <div style={{height:'100px',backgroundColor:'red'}}/>;
const greenDiv = <div style={{height:'100px',backgroundColor:'green'}}/>;
const blueDiv = <div style={{height:'100px',backgroundColor:'blue'}}/>;

ReactDOM.render(
  <>
    {redDiv}{greenDiv}{blueDiv}
  </>,
  document.getElementById("app")
);
