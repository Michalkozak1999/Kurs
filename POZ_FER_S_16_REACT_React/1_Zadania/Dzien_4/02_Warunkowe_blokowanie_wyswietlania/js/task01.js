import React, {Component} from "react";
import ReactDOM from "react-dom";
import FakeAPI from "./data/fakeAPI.js";

class AccountData extends Component{
    state={
        data:false
    }
    componentDidMount() {
        FakeAPI.then( data => {
            this.setState({data:data})
        });
    }
    render() {
        if(this.state.data === false){
        return(
            null
        )}else{
            return(
                <div>gicik</div>
            )
        }
    }
}

class App extends Component{
    render() {
        return(
            <AccountData></AccountData>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
