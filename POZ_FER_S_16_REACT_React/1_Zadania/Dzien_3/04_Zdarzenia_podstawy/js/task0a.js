import React, {Component} from "react";
import ReactDOM from "react-dom";



class Buttons extends Component {
    buttonsklick (){
        console.log("fubu")
    }
    przycisk_1 (){
        console.log("pierwszy przycisk klikniety")
    }
    przycisk_2 (){
       let promptX = prompt("podaj liczbe 1 wariacie")
       let promptY = prompt("podaj 2 liczbe wariacie")
       promptX = parseFloat(promptX);
       promptY = parseFloat(promptY);
       let XD = promptX*promptY 
       console.log(XD)
    }
    przycisk_3 (){
        console.log(window.innerWidth, window.innerHeight)
    }
render(){
    return(
        <section>
            <button onClick={this.przycisk_1}>1 przycisk</button>
            <button onClick={this.przycisk_2}>2 przycisk </button>
            <button onClick={this.przycisk_3}>3 przycisk</button>


        </section>
    )
}
}

ReactDOM.render(
    <Buttons/>,
    document.querySelector("#app")
)