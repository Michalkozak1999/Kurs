import React, {Component} from "react";
import ReactDOM from "react-dom";

// class Search extends Component{
//     render(){
//         return (
//             <>
//                 <input type='text'></input>
//                 <button></button>
//             </>
//         )
//     }
// }
// function Search(){
//     return (
//         <>
//             <input type='text'/>
//             <button></button>
//         </>
//     )
// }
const Search = () => (
    <>
        <input type='text'/>
        <button>Wyszukaj</button>
    </>

)

ReactDOM.render(
  Search(),
  document.getElementById("app")
);
