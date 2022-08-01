import React, {Component} from "react";
import ReactDOM from "react-dom";

class InteractiveDiv extends Component{
    state={
        input:''
    }
    render() {
        return(
            <div>
                <input type='number' onChange={(e)=>{this.setState({input:e.target.value})}}/>
                <div style={{height:'100px', width:`${this.state.input}`+'px',background:'red'}}/>
            </div>
        )
    }
}

class App extends Component{
    render() {
        return(
          <InteractiveDiv/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
