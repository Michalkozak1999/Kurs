import React, {Component} from "react";
import ReactDOM from "react-dom";

function CurrencyConverter(props) {
    return(
        <div>
            <strong>{props.value}</strong> {props.from} => <strong>{props.value*props.rate}</strong> {props.to}
        </div>
    )
}
function App(){
    return(
        <>
            <CurrencyConverter from='EUR' to='USD' value={200} rate={1.122275}/>
            <CurrencyConverter from="EUR" to="PL" value={200} rate={4.232} />
            <CurrencyConverter from="EUR" to="LP" value={200} rate={2.12275} />
         </>
    )
}



ReactDOM.render(<App/>, document.getElementById("app"));