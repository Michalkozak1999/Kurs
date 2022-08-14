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
//

// class Serch extends Component{
//   render(){
//     return(
     
//       <div className="lubie fubu"><input type = "zrozum fubu"/><div><button>Kochac fubu</button></div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Serch />,
//   document.querySelector("#app")
// );


function Search(){
      return (
          <>
              <input type='text'/>
              <button>i tak on działa </button>
          </>
      )
  }
  
  
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
  