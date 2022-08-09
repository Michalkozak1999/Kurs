import React, {Component} from "react";
import ReactDOM from "react-dom";



// class StrobeLight extends Component {
//         constructor(props){
//             super(props)
//             this.state = {
//                 width: '500px',
//                 height: '50px',
//                 backgroundColor: 'white'
//             }
//         }


// // class StrobeLight extends Component{
// //     state={
// //         width: '500px',
// //         height: '700px',
// //         backgroundColor: 'red'
// //     }
//     componentDidMount() {
//         setInterval(() => {
//             if(this.state.backgroundColor === "red"){
//                 this.setState({backgroundColor: this.props.backgroundColor, width:'300px'})
//             }else if(this.state.backgroundColor === 'blue'){
//                 this.setState({backgroundColor: "orange", width:'500px'})
//             }else{
//                 this.setState({backgroundColor: "red", width:'200px'})
//             }
//         },this.props.frequency)
//     }

//     render(){
//             return(
//                 <div style = {this.state}></div>
//             )
//         }
//     // render() {
//     //     return(
//     //        <div style={this.state}></div>

//     //     )
//     // }
// }

// ReactDOM.render(
//     <StrobeLight backgroundColor = 'blue'  freqency="100"/>,
//     document.querySelector("#app")
// )
// // ReactDOM.render(<StrobeLight backgroundColor='blue' frequency ='100'/>, document.getElementById("app"));




class StrobeLight extends Component {
    constructor(props){
        super(props)
        this.state = {
            width: '500px',
            height: '50px',
            backgroundColor: 'red'
        }
    }

componentDidMount(){
     setInterval(() => {
        if(this.state.backgroundColor === 'red'){
            this.setState({
                backgroundColor: this.props.backgroundColor, width:"300px"
            }) 
        }
             else if (this.state.backgroundColor === 'blue'){
                this.setState({
                    backgroundColor: 'orange', width:"400px"
                })
             } else{
                 this.setState({
                     backgroundColor:'red', width: "500px"
                 })
             }
    }, this.props.freqency);
}


// componentDidMount() {
//             setInterval(() => {
//                 if(this.state.backgroundcolor === "red"){
//                     this.setState({backgroundcolor: this.props.backgroundColor, width:'300px'})
//                 }else if(this.state.backgroundcolor === 'blue'){
//                     this.setState({backgroundcolor: "orange", width:'500px'})
//                 }else{
//                     this.setState({backgroundcolor: "red", width:'200px'})
//                 }
//             },this.props.frequency)
//         }

render(){
    return(
        <div style = {this.state}></div>
    )
}

}

ReactDOM.render(
    <StrobeLight backgroundColor = 'blue'  freqency="100"/>,
    document.querySelector("#app")
)