import React from "react";
import ReactDOM from "react-dom";

// let x = prompt('wpisz x');
// let y = prompt('wpisz y');
// let math = prompt('wpisz znak operacji matematycznej');
// x = parseFloat(x);
// y = parseFloat(y);
// let result;

// switch(math){
//     case "+":
//        result = x+y;
//         break;

//     case "-":
//         result = x-y;
//         break;
//     case "*":
//         result = x*y;
//         break;
//     case "/":
//         result = x/y;
//         break;
// }
// ReactDOM.render(
//     <div>{result}</div>,
//     document.getElementById("app")
// );


let liczba1 = prompt("wypisz liczbe 1");
let liczba2 = prompt("wypisz liczbe 2");
let znak_operacji = prompt("wypisz znak specjaly matematyczny");


liczba1 = parseFloat(liczba1);
liczba2 = parseFloat(liczba2);


let result;

switch(znak_operacji){
case "+":
    result = liczba1 + liczba2;
    break;
case "-":
    result = liczba1 - liczba2;
    break;
case "/":
    result = liczba1 / liczba2;
    break;
case "*":
    result = liczba1 * liczba2;
    break;
}


ReactDOM.render(
<div>
    Twoja liczba wariacie to {result}</div>,
document.querySelector("#app")

);