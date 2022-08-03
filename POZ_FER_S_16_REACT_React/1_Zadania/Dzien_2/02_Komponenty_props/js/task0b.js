import React, {Component} from "react";
import ReactDOM, { render } from "react-dom";

// ReactDOM.render(
//   <h1>Hello, World!</h1>,
//   document.getElementById("app")
// );


// class AddNumbers extends Component{
//   render(){
//     <h1>
//  {this.props.numberA}
//  {this.props.numberB}
//  {this.props.numberA + this.props.numberB}
//     </h1>
//   }
// }

// ReactDOM.render(
//   <AddNumbers name = "5"  />,
//   document.querySelector("#app")
// )






// const number1 = 11;
// let numberA = 5;
// let numberB = 6;

function AddNumbers(props) {
 
  return( 

    <h1>Hellow, {props.numberA} 
    <p>hi,{props.numberB}</p>
    <p>suma {props.numberA + props.numberB}</p>

    </h1>
  )
  
}



// class Hellow extends Component{
//   render(){
//     return(
//       <h1>Hello, {this.props.name} {this.props.surname}</h1>
//     )
//   }
// }

ReactDOM.render(
<AddNumbers numberA={5} numberB={6} />,
document.querySelector("#app")

)
