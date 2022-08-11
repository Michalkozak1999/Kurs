import React, {Component} from "react";
import ReactDOM from "react-dom";


// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("app"));






// class Clock extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//            date: new Date(),
//         }
//     }


// componentDidMount(){
//     this.intervalid = setInterval(() => {
//         this.setState({
// date: new Date()

// // status: this.state.status +1
//         })
//     }, 1000);
// }



// render(){
//     let xd = this.state.date.toLocaleTimeString()
//     let wz = this.state.date.toLocaleDateString()
//     return(
//     <div><h1>{this.props.date}</h1>{xd}<h1>jebac fubu{wz}</h1>
//     </div>
//     )
// }

// }

// // class App extends Component{
// //     render(){
// //         return(
// //             <section><Clock/></section>
// //         )
// //     }
// // }

// ReactDOM.render(
//     <section>   <Clock/>    </section>,
//     document.querySelector("#app")
// )



class Clock extends Component {
constructor(props){
    super(props)
    this.state = {
        actualdate: new Date()
    }
}

componentDidMount(){
    this.intervalactualdate = setInterval(() => {
        this.setState({
                actualdate: new Date()
        })
    }, 1000);
}



render(){
    class ClockTime extends Component {
        render(){
            let data = this.props.actualdate.toLocaleTimeString()
            return(
                <div>
                    {data}
                </div>
            )
        }
    }
    class ClockDate extends Component {
        render(){
           let data2 = this.props.actualdate.toLocaleDateString()
            return(
                <div>
                    jebac fubu
                   <h1>{data2}</h1> 
                </div>
            )
        }
    }
    // let xd = this.state.actualdate.toLocaleTimeString()
    return(
        <div>
            <ClockDate actualdate = {new Date()}/>
            <ClockTime actualdate = {new Date()}/>
            {/* {xd} */}
        </div>
    )
}
}


class App extends Component {
    render(){
        return(
            <section> 
                <Clock/> 
               {/* <ClockTime actualdate = {new Date()} />
               <ClockDate actualdate = {new Date()}/> */}
            </section>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#app")
)





// class ClockTime extends Component {
//     render(){
//         let data = this.props.actualdate.toLocaleTimeString()
//         return(
//             <div>
//                 {data}
//             </div>
//         )
//     }
// }

// class ClockDate extends Component {
//     render(){
//        let data2 = this.props.actualdate.toLocaleDateString()
//         return(
//             <div>
//                 jebac fubu
//                <h1>{data2}</h1> 
//             </div>
//         )
//     }
// }