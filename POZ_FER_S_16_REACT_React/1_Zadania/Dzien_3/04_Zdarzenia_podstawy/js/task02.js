import React, {Component} from "react";
import ReactDOM from "react-dom";

// const Div = () => {
//     return(
//         <div onClick={()=>{console.log('kliknieto')}} onMouseEnter={()=>{console.log('najechao')}} onMouseLeave={()=>{console.log('zjechano')}} >s</div>
//     )
// }

// class App extends Component{
//     render() {
//         return(
//             <Div></Div>
//         )
//     }
// }

// ReactDOM.render(<App/>, document.getElementById("app"));



class ButtonsTest extends Component{
        najechany(){
            console.log("najechany")
        }
        clickniety(){
            console.log("clictniety")
        }
        opuszczony(){
            console.log("opuszczony jak król lew")
        }
        render(){
            return (
                <section>
                        <button onMouseEnter={this.najechany}
                        onClick={this.clickniety}
                        onMouseLeave = {this.opuszczony}
                        
                        >Kocham fubu</button>
                </section>
            )
        }
    }
    
    ReactDOM.render(
        <ButtonsTest/>,
        document.querySelector("#app")
    )