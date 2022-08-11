import React, {Component} from "react";
import ReactDOM from "react-dom";

// class Divs extends Component{
//     state={
//         width:'500px',
//         height:'200px',
//         background:'green'
//     };
//     render() {
//             return (
//                 <div style={this.state} onMouseEnter={()=>{this.setState({background:'blue',height:'400px'})}} onMouseLeave={()=>{this.setState({background:'green',height:'200px'})}}>s</div>
//             )
//     }
// }

// class App extends Component{
//     render() {
//         return(
//             <Divs/>
//         )
//     }

// }

// ReactDOM.render(<App/>, document.getElementById("app"));


class Bulb extends Component{
 constructor(props){
     super(props)
     this.state = {
         width: "400px",
         height: "400px",
         backgroundColor: "red",
         text: false
     }

 }
 render(){


    
     return(
         <div style = {this.state}>
             
             
             <button onMouseEnter = {() =>{this.setState({backgroundColor: "green"})}} onClick = {() =>{this.setState({backgroundColor: "blue", text: this.state.text ? 'off' : 'on'})}} onMouseLeave = {() => {this.setState({backgroundColor: "white"})}}>{this.state.text}</button>
             
             
        </div>
     )
 }
}
ReactDOM.render(<Bulb/>, document.getElementById("app"));


