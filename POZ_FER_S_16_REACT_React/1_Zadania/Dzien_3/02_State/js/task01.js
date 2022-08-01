import React, {Component} from "react";
import ReactDOM from "react-dom";

class Modal extends Component{
    state ={
        showModal: false
    };
    componentDidMount() {
        setTimeout( () => {
            this.setState({showModal:true})
        },1000)
    }

    render() {
        if(this.state.showModal === true){
        return(
            <h2>{this.props.heading}</h2>
        )}else{
            return (
                <h2></h2>
            )
        }
    }
}

ReactDOM.render(<Modal heading ='Zapisz się do newslettera'/>, document.getElementById("app"));
