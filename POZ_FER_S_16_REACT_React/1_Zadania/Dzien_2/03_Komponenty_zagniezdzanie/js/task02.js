import React, {Component} from "react";
import ReactDOM from "react-dom";
// function AddNumbers(props) {
//     return(
//         <h1>{props.numberA + props.numberB} </h1>
//     )
// }

// function App(){
//     return(
//     <AddNumbers numberA ={3} numberB = {4}/>
//     )
// }



// ReactDOM.render(<App/>, document.getElementById("app"));




// function Numbers(props) {
//     const {numberA, numberB} = props;
//     return(
//         <div>
// <h1>{numberA + numberB}</h1>
//         </div>
//     )
// }

// function App(props) {
//     return(
//         <Numbers numberB = {5} numberA = {5}   />
//     )
    
// }







class Numbers extends Component{
    render(){  
    return(
        <div>
        <h1>{this.props.numberA + this.props.numberB}</h1>
        
        
        </div>
    )
}
}


class App extends Component{
    render(){
return(
    <Numbers numberA= {11}  numberB = {12} />
)

    }}



    ReactDOM.render(
        <App/>,
        document.querySelector("#app")
    )