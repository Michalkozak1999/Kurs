import React, {Component} from "react";
import ReactDOM from "react-dom";



class App extends Component{
    state={
        number:'0'
    };
    componentDidMount() {
            setInterval( ()=>{
               this.setState({number:`${Math.ceil(Math.random() * 5 )}`})
            },1000)
    }

    render() {

        if(this.state.number > 3){
        return(
            <div>Wieksza</div>
        )}else {
            return(
         <div>Mniejsza</div>
            )
        }
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
