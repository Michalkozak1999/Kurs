import React from "react";
import ReactDOM from "react-dom";
import People from "./data/people";



// ReactDOM.render(
//   <>{People.map(el =><div key={}>{el.name} {el.surname}</div> )}</>,
//       document.getElementById("app")
// );


ReactDOM.render(
<>  
{People.map((xd, index )=> <div key = {index}>{xd.name} {xd.surname}</div>)}
</>,

document.getElementById("app")






);