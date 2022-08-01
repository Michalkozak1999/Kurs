import React, {Component} from "react";
import ReactDOM from "react-dom";
const Button = () =>{
    return(
    <button onMouseEnter={() => {console.log('najechano')} }>ButtonTest</button>
    )}

class App extends Component{
    render() {
        return(
            <Button/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
