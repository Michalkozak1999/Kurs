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

///
///
// const Search = () => (
//     <>
//         <input type='text'/>
//         <button>Wyszukaj</button>
//     </>

// )

// ReactDOM.render(
//   Search(),
//   document.getElementById("app")
// );


class Serch extends Component{
  render(){
    return(
     
      <div className="lubie fubu"><input type = "zrozum fubu"/><div><button>Kochac fubu</button></div>
      </div>
    )
  }
}

ReactDOM.render(
  <Serch />,
  document.querySelector("#app")
);