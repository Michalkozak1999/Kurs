import React, {Component} from "react";
import ReactDOM from "react-dom";


fetch( 'http://localhost:3000/cars').then((response)=>{if(response.ok){console.log(response)}throw Error('huj nie dziala') })


ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("app"));
