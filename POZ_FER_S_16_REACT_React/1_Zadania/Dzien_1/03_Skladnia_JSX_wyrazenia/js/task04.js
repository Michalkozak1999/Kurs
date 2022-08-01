import React from "react";
import ReactDOM from "react-dom";

// let x = prompt('wpisz x');
// let y = prompt('wpisz y');
// let math = prompt('wpisz znak operacji matematycznej');
// x = parseFloat(x);
// y = parseFloat(y);

// function calculator(x,y,math){
// switch(math){
//     case "+":
//         return <h1>{x+y}</h1>;
//     case "-":
//         return <h2>{x-y}</h2>;
//     case "*":
//         return <h3>{x*y}</h3>;
//     case "/":
//         return <h4>{x/y}</h4>;
// }}
// ReactDOM.render(
//     <div>{calculator(x,y,math)}</div>,
//     document.getElementById("app")
// );



let liczba1 = prompt("wypisz liczbe 1");
let liczba2 = prompt("wypisz liczbe 2");
let znak_operacji = prompt("wypisz znak specjaly matematyczny");


liczba1 = parseFloat(liczba1);
liczba2 = parseFloat(liczba2);


let result;
function calculator(liczba1, liczba2, znak_operacji) {
    

switch(znak_operacji){
case "+":
   return <h1>{liczba1 + liczba2}</h1>; 
case "-":
    return <h2>{liczba1 - liczba2}</h2>; 
case "/":
    return <h3>{liczba1 / liczba2}</h3>; 
case "*":
    return <h4>{liczba1 * liczba2}</h4>; 
}
}


ReactDOM.render(
<div>
    Twoja liczba wariaciku kochany to: {calculator(liczba1, liczba2, znak_operacji)}</div>,
document.querySelector("#app")

);