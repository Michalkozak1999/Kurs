import React from "react";
import ReactDOM from "react-dom";
import Animals from './data/animals'



// ReactDOM.render(
//   <h1>{Animals.length}<h2> {Animals.join(', ')}</h2></h1>,
//   document.getElementById("app")
// );


ReactDOM.render(
<h1>
{Animals.length}<h2>{Animals.join(", ")}</h2>

</h1>,
document.querySelector("#app")

);