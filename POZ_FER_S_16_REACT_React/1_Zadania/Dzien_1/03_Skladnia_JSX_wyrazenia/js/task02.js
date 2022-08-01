import React from "react";
import ReactDOM from "react-dom";
import Person from './data/person';

// ReactDOM.render(
//     <ul>
//         <li>{Person.title}</li>
//         <li>{Person.name}</li>
//         <li>{Person.surname}</li>
//         <li>{Person.age}</li>
//     </ul>,
//   document.getElementById("app")
// );


// xport default {
//   title: "Mr.",
//   name: "Tester",
//   surname: "Kowalski",
//   age: 41
// };



ReactDOM.render(
<ul>
<li>{Person.title}</li>
<li>{Person.name}</li>
<li>{Person.surname}</li>
<li>{Person.age}</li>
</ul>,
document.querySelector("#app")




);