import React, {Component} from "react";
import ReactDOM from "react-dom";


class SecretStuff extends Component{
    render() {
        if(this.props.password === this.props.correctPassword){
        return(
            <div>{this.props.secret}</div>
        )}
        else{
            return (
                null
            )
        }
    }
}
class App extends Component{
    render() {
        return(
            <SecretStuff password='admin' correctPassword = 'admin' secret='gicik'></SecretStuff>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("app"));
