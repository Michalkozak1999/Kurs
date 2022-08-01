import React, {Component} from "react";
import ReactDOM from "react-dom";

const Div = () => {
    return(
        <div onClick={()=>{console.log('kliknieto')}} onMouseEnter={()=>{console.log('najechao')}} onMouseLeave={()=>{console.log('zjechano')}} >s</div>
    )
}

class App extends Component{
    render() {
        return(
            <Div></Div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
