import React, {Component} from "react";
import ReactDOM from "react-dom";


// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("app"));






class Clock extends Component{
    constructor(props){
        var statusgodzinowy = new Date()
        super(props)
        this.state = {
           date: 0,
           status: statusgodzinowy.toLocaleTimeString()
        }
    }


componentDidMount(){
    this.intervalid = setInterval(() => {
        this.setState({
date: this.props.date,
status: this.state.status +1
        })
    }, 1000);
}



render(){
    let xd = new Date();
    let wz = xd.toLocaleTimeString()
    return(
    <div><h1>{this.props.date}</h1>{wz}<h1>{this.state.status}</h1>
    </div>
    )
}

}

// class App extends Component{
//     render(){
//         return(
//             <section><Clock/></section>
//         )
//     }
// }

ReactDOM.render(
    <section>   <Clock date = "10.08.2022"  />    </section>,
    document.querySelector("#app")
)
