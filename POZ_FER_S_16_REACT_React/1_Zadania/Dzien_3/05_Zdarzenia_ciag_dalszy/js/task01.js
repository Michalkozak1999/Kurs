import React, {Component} from "react";
import ReactDOM from "react-dom";


// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("app"));




// class Color extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             backgroundColor: "red",
//             click: false,
//             width: "500px",
//             height: "500px"
//         }
//     }
// render(){
//     return(
//         <div style = {this.state} onMouseEnter = {() => {this.setState({backgroundColor: "blue"})}} onMouseLeave = {() => {this.setState({backgroundColor: "green"})}}> fubu</div>
//     )
// }
// }

// ReactDOM.render(
//     <Color/>,
//     document.querySelector("#app")
// )


class CrazyDiv extends Component{
    constructor(props){
        super(props)
        this.state = {
            backgroundColor: "red",
            width: "400px",
            height: "400px",
            position: "absolute",
            top: "10px",
            bottom: "20px"

        }
    }
    render(){
        return(




            <div style = {this.state}  onMouseEnter = {() => {this.setState({top:`${Math.random()*550}px`})}}>fubu
            
            </div>
        )
    }
}

ReactDOM.render(<CrazyDiv/>, document.getElementById("app"));