import React from "react";
import ReactDOM from "react-dom";
import Person from "./data/person";


// ReactDOM.render(
//     <> <h1>{Person.title} {Person.name} {Person.surname}</h1><span>{Person.age} </span></>,
//     document.getElementById("app")
// );



ReactDOM.render(
<><h1>{Person.title}{Person.name}{Person.surname}</h1><span>{Person.age}</span>




</>,
document.querySelector("#app")





);