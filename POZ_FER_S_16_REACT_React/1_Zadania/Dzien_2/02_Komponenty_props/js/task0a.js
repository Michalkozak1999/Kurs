import React, {Component} from "react";
import ReactDOM from "react-dom";

// function Hi(props){
//     console.log(props);
// }
// ReactDOM.render(
//   <Hi name='asd' tablica = {[1,2,3]} surname='asdas'/>,
//   document.getElementById("app")
// );




function Hellow(props) {
  return(
    <h1>Hellow, {props.name}</h1>
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
<Hellow name="michal" surname = "kozak"/>,
document.querySelector("#app")

)


