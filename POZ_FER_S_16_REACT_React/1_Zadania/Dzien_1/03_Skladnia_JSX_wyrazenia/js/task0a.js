// import React from "react";
// import ReactDOM from "react-dom";

// let x = prompt('wpisz x');
// let y = prompt('wpisz y');

// x = parseFloat(x);
// y = parseFloat(y);


// ReactDOM.render(
//     <div>{x+y}</div>,
//   document.getElementById("app")
// );



import React from "react";
import ReactDOM from "react-dom";


let liczbaA = prompt("wypisz cyfre A");
let liczbaB = prompt("wypisz cyfre B");


liczbaA = parseFloat(liczbaA);
liczbaB = parseFloat(liczbaB);


// React.createElement('span', {id: 'wynik'}, "Twój wynik dwóch liczb to:",  { liczbaA + liczbaB } );

ReactDOM.render(
<div>Twoja liczba to: {liczbaA + liczbaB}</div>,
document.querySelector("#app")

);