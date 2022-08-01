import React, {Component} from "react";
import ReactDOM from "react-dom";

function Sum(props){
    return(
        <h1>{props.numbers.reduce(function (previousValue, currentValue) {
            return currentValue+previousValue;
        })}</h1>
    )

}

ReactDOM.render(
  <Sum numbers = {[1,3,5,7,10]} />,
  document.getElementById("app")
);
