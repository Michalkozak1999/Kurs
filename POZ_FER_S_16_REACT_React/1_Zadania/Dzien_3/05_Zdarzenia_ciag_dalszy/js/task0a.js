import React, {Component} from "react";
import ReactDOM from "react-dom";

class Divs extends Component{
    state={
        width:'500px',
        height:'200px',
        background:'green'
    };
    render() {
            return (
                <div style={this.state} onMouseEnter={()=>{this.setState({background:'blue',height:'400px'})}} onMouseLeave={()=>{this.setState({background:'green',height:'200px'})}}>s</div>
            )
    }
}

class App extends Component{
    render() {
        return(
            <Divs/>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById("app"));
