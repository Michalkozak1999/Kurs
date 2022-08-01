import React, {Component} from "react";
import ReactDOM from "react-dom";

class HelloWorld extends Component{
    state={
        counter:0
    }
    componentDidMount(){
       this.intervalId = setInterval(() => this.setState({counter:this.state.counter+1}),
            1000)
    }

    componentWillUnmount() {
        console.log('odmontowane');
        clearInterval(this.intervalId);
    }

    render() {
        let text;
        if(this.state.counter < 5){
            text = 'HelloWorld!'
        }else{
            text = 'Hi Everyone!'
        }
        return(
            <h1>{text}</h1>
        )
    }
}
class App extends Component{
    render() {
        return (
            <HelloWorld/>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app"));
