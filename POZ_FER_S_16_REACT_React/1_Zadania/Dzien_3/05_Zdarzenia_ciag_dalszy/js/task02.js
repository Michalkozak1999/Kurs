import React, {Component} from "react";
import ReactDOM from "react-dom";
import { isAbsoluteURL } from "webpack-dev-server";


// class CrazyDiv extends Component{
//     state={
//         width:'100px',
//         height:'100px',
//         background:'red',
//         position:'absolute',
//         top:'0',
//         left:'0'

//     };
//     render() {
//         return(
//             <>
//             <div style={this.state} onMouseEnter={()=>{this.setState({top:`${Math.random()*1000}px`})}}>s</div>
//             </>
//                 )
//     }
// }

// class App extends Component{
//     render() {
//         return(
//             <CrazyDiv></CrazyDiv>
//         )
//     }
//}




class CrazyDiv extends Component{
    constructor(props){
        super(props)
        this.state = {
            backgroudColor: "red",
            width: "400px",
            height: "400px",
            position: "absolute",
            top: "10px",
            bottom: "20px"

        }
    }
    render(){
        return(




            <div style = {this.state}  onMouseEnter = {() => {this.setState({top:`${Math.random()*1000}px`})}}>fubu
            
            </div>
        )
    }
}

ReactDOM.render(<CrazyDiv/>, document.getElementById("app"));