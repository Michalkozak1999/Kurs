import React, {Component} from "react";
import ReactDOM from "react-dom";

class Hello extends Component{
    state={
        name:'ty'
    }
    render() {
        return(
            <form>
                <h1>Hello {this.state.name}</h1>
                <input type='text' onChange={(e)=> this.setState({name:e.target.value})} value={this.state.name}/>
            </form>
        )
    }
}

class App extends Component{
    render() {
        return(
            <Hello></Hello>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
