import React, {Component} from "react";
import ReactDOM from "react-dom";

class AddTwoNumbers extends Component{
    state={
        num1:'',
        num2:''
    }
    render() {
        const adding = ()=>{
            if(isNaN(parseInt(this.state.num1)*parseInt(this.state.num2)) ===false){
            return parseInt(this.state.num1)*parseInt(this.state.num2)}
            else{
                return 'podaj liczby'
            }

        }
        return(
            <form>
                <h1>{adding()}</h1>
                <input type="text" onChange={(e)=>{this.setState({num1:e.target.value})}}></input>
                <input type="text" onChange={(e)=>{this.setState({num2:e.target.value})}}></input>

            </form>
        )
    }
}

class App extends Component{
    render() {
        return(
            <AddTwoNumbers/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
