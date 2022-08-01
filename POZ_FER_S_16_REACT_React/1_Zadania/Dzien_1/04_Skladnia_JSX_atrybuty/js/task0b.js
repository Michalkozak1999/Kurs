import React from "react";
import ReactDOM from "react-dom";

function genNumber() {
  return Math.round(Math.random() * 9 + 1);
}

// ReactDOM.render(
//   <h1>Hello, World!</h1>,
//   document.getElementById("app")
// );
let liczba1 = genNumber();
let liczba2 = genNumber();

 liczba1 = parseFloat(liczba1);
 liczba2 = parseFloat(liczba2);

let wynik = prompt("Jakie jest  wynik dodania dwóch liczb"+" "+ liczba1 +" " + liczba2)

const style1 = {
  color: "green",
  backgroundColor: "blue"
};

const style2 = {
  color: "red",
  backgroundColor: "blue"
};


let info;

if(wynik == liczba1+liczba2){
info = <div style = {style1}> Odpowiedz Poprawna </div>
} else{
  info = <div style = {style2}>Odpowiedz błedna </div>
}

ReactDOM.render(
<div> 
  
  {info}
  Pierwsza liczba to: {liczba1} druga liczba to {liczba2}  </div>,
document.querySelector("#app")



);


