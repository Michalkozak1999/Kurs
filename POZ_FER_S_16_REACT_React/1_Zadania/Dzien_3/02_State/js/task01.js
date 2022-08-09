import React, {Component} from "react";
import ReactDOM from "react-dom";

// class Modal extends Component{
//     state ={
//         Modall: false
//     };


// class Modal extends Component {
//         constructor(props){
//             super(props);
//             this.state = {
//                 Modall: false
//             }
//         }
//     componentDidMount() {
//         setTimeout( () => {
//             this.setState({Modall:true})
//         },1000)
//     }




//     render() {
//         if(this.state.Modall === true){
//         return(
//             <h2>{this.props.heading}</h2>
//         )}else{
//             return (
//                 <h2></h2>
//             )
//         }
//     }



// }

// // ReactDOM.render(<Modal heading ='Zapisz się do newslettera'/>, document.getElementById("app"));


class Modal extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            Modall: false
        }
    }

componentDidMount(){
    
    setTimeout(() => {
        this.setState({
            Modall: this.state.Modall = true
        })
    }, 1000);
}

render(){
    if(this.state.Modall === true){
        return(
            <h2>{this.props.heading}</h2>
        )
    }else{
        return(
            <h2>KochamFubu</h2>
        )
    }
}


}


  ReactDOM.render(
    <Modal heading = 'Zapisz się do newslettera'/>,
      document.querySelector("#app")
  )