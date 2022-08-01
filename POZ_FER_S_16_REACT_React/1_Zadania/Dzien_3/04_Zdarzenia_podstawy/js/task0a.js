import React, {Component} from "react";
import ReactDOM from "react-dom";

const Loguj = () => {
    let first = prompt('x');
    let second = prompt('y');
    first=parseFloat(first);
    second=parseFloat(second);
    console.log(Math.pow(first,second))
}
const operacjaWindow = () => {
    console.log(window.innerWidth, window.innerHeight);
}
const Buttons = () => {
    return(
        <>
        <button onClick={()=>{console.log('Pierwszy')}}>Click</button>
        <button onClick={Loguj}>Click</button>
         <button onClick={operacjaWindow}>Click</button>
    </>
            )
}

const App = ()=><Buttons/>


ReactDOM.render(<App/>, document.getElementById("app"));
