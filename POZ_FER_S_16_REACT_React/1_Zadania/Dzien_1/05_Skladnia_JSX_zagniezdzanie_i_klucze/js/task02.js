import React from "react";
import ReactDOM from "react-dom";
import People from "./data/people";


// ReactDOM.render(
//     People.map(el =><div key={el.id} className = 'person'>
//         <img src={el.avatar}></img>
//         <div className="info">
//             <h1>{el.title} {el.name} {el.surname}</h1>
//             <p>{el.bio}</p>
//         </div>
//     </div> ),
//   document.getElementById("app")
// );




ReactDOM.render(
<>
{People.map((xd)=><div key = {xd.id} className = 'person' >
<img src={xd.avatar}></img>
<div  className = "info">
<h1>{xd.title}{xd.name}{xd.surname}</h1>
<p>{xd.bio}</p>
</div>
</div>)}


</>,
document.querySelector("#app")



);