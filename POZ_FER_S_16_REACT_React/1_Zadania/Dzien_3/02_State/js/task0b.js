import React, {Component} from "react";
import ReactDOM from "react-dom";



// class TextTyper extends Component{
//     state={
//         index: 1
//     }
//     componentDidMount() {
//        this.intervalId = setInterval( () => {
//            if(this.state.index <= this.props.text.length){
//                this.setState({index:this.state.index + 1})
//            }else{
//                clearInterval(this.intervalId);
//            }
//         },1000 )
//     }
//     componentWillUnmount() {
//         clearInterval(this.intervalId);
//     }

//     render() {
//         return(
//             <h1>{this.props.text.slice(0,this.state.index)}</h1>
//         )
//     }
// }

// class App extends Component{
//     render() {
//         return(
//             <h1><TextTyper text = 'Witaj!'/></h1>
//         )
//     }
// }


// ReactDOM.render(
//     <App/>,
//     document.getElementById("app"));


class TextTyper extends Component {
    constructor(props){
        super(props);
        this.state = {
            secends: 1
        }
    }

componentDidMount(){
    this.intervalid = setInterval(() => {
if(this.state.secends <= this.props.text.length){
    this.setState({
        secends: this.state.secends +1
    })
}else{
    clearInterval(this.intervalid)
    // componentWillUnmount(){
    //     clearInterval(this.intervalid)
    // }
}

        
       
    }, 1000);
}
componentWillUnmount(){
        clearInterval(this.intervalid)
    }

    render(){
        return <h1>{this.props.text.slice(0, this.state.secends)}</h1>
    }



}
class App extends Component {
    render(){
        return(
        <div> <TextTyper text = "FubuKochany"/> </div>
        
    )
}
}

ReactDOM.render(
    <section> tak trzymaj: <App></App></section>,
    document.querySelector("#app")
)