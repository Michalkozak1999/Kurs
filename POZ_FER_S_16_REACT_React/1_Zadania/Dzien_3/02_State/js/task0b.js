import React, {Component} from "react";
import ReactDOM from "react-dom";



class TextTyper extends Component{
    state={
        index: 1
    }
    componentDidMount() {
       this.intervalId = setInterval( () => {
           if(this.state.index <= this.props.text.length){
               this.setState({index:this.state.index + 1})
           }else{
               clearInterval(this.intervalId);
           }
        },1000 )
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return(
            <h1>{this.props.text.slice(0,this.state.index)}</h1>
        )
    }
}

class App extends Component{
    render() {
        return(
            <h1><TextTyper text = 'Witaj!'/></h1>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById("app"));
