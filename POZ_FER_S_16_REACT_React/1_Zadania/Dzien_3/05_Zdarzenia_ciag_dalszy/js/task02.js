import React, {Component} from "react";
import ReactDOM from "react-dom";


class CrazyDiv extends Component{
    state={
        width:'100px',
        height:'100px',
        background:'red',
        position:'absolute',
        top:'0',
        left:'0'

    };
    render() {
        return(
            <>
            <div style={this.state} onMouseEnter={()=>{this.setState({top:`${Math.random()*1000}px`})}}>s</div>
            </>
                )
    }
}

class App extends Component{
    render() {
        return(
            <CrazyDiv></CrazyDiv>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
