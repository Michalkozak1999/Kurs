import React from "react";
import ReactDOM from "react-dom";

// let year = prompt('rok urodzenia');
// year = parseFloat(year);
// let actualYear = new Date().getFullYear();

// ReactDOM.render(
//   <h1>{actualYear-year}</h1>,
//   document.getElementById("app")
// );




let rokurodzenia = prompt("podaj swój rok urodzenia");

rokurodzenia = parseFloat(rokurodzenia);

let tenrok = new Date().getFullYear();

ReactDOM.render(

  <h1>  Twoja liczba wiosen kurwiu: {tenrok - rokurodzenia} </h1>,
  document.querySelector("#app")
  
  
  
  );