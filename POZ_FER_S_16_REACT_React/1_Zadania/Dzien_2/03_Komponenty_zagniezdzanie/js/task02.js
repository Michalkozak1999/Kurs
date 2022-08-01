import React, {Component} from "react";
import ReactDOM from "react-dom";
function AddNumbers(props) {
    return(
        <h1>{props.numberA + props.numberB} </h1>
    )
}

function App(){
    return(
    <AddNumbers numberA ={3} numberB = {4}/>
    )
}



ReactDOM.render(<App/>, document.getElementById("app"));
