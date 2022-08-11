import React, {Component} from "react";
import ReactDOM from "react-dom";
// const Button = () =>{
//     return(
//     <button onMouseEnter={() => {console.log('najechano')} }>ButtonTest</button>
//     )}

// class App extends Component{
//     render() {
//         return(
//             <Button/>
//         )
//     }
// }

// ReactDOM.render(<App/>, document.getElementById("app"));



// class ButtonsTest extends Component{
//     najechany(){
//         console.log("najechany")
//     }

//     render(){
//         return (
//             <section>
//                     <button onMouseEnter={this.najechany}>Kocham fubu</button>
//             </section>
//         )
//     }
// }

// ReactDOM.render(
//     <ButtonsTest/>,
//     document.querySelector("#app")
// )



const ButtosTest2 = () =>{
    return(
        <section>    
<button onMouseEnter={() => console.log("najechany jak baba przez hajta")} >Kocham fubu</button>
        </section>
    )
}


class App extends Component {
    render(){
        return(
            <ButtosTest2/>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector("#app")
)