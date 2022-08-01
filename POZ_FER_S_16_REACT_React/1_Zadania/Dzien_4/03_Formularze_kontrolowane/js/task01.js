import React, {Component} from "react";
import ReactDOM from "react-dom";

class TextField extends Component{
    state={
        selected:''
    }
    render() {
        return(
            <div>
                <p>{this.state.selected}</p>
                <select onChange={(e)=>{this.setState({selected: e.target.value})}}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <span>{this.state.selected.length}</span>
            </div>
        )
    }
}

class App extends Component{
    render() {
        return(
            <TextField/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
