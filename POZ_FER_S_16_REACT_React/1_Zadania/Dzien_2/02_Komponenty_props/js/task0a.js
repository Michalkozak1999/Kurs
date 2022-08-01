import React, {Component} from "react";
import ReactDOM from "react-dom";

function Hi(props){
    console.log(props);
}
ReactDOM.render(
  <Hi name='asd' tablica = {[1,2,3]} surname='asdas'/>,
  document.getElementById("app")
);
