import React, {Component} from "react";
import ReactDOM, { render } from "react-dom";


// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("app"));



class ButtonCounter extends Component{
    constructor(props){
        super(props)
        this.state = {  
            counter: 0


        }
        this.Buttmójclick = this.Buttmójclick.bind(this)
    }
        Buttmójclick = () => {
            this.setState({
                counter: this.state.counter +1   
        } )
                console.log("jebac fubu")
        
        }
    render(){
        return(
            <div>
                <h2>
                        {this.state.counter}


                    {
                        <ButtonToClick
                        click={this.Buttmójclick}/> 
                    }
                </h2>
            </div>
        )
    }
}

class ButtonToClick extends Component {
    constructor(props){
        super(props)
        this.Funkcjaprzekazanie = this.Funkcjaprzekazanie.bind(this)
    }
    Funkcjaprzekazanie = () => {
       this.props.click()
    }
    
    render(){
        return(
                <div>


                <button onClick = {this.Funkcjaprzekazanie}> Kocham fubu </button>



                </div>

        )
    }
}

ReactDOM.render(
    <ButtonCounter/>,
    document.querySelector("#app")
)

// class ButtonCounter extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }
// render(){

//     return(
//         <div>
//                 <h1>{this.state.count}</h1>
//                 <PlusButton count = {this.state.count}  increasecount = {(count) => this.setState({count})}  />
//         </div>
//     )
// }
// }

// class PlusButton extends Component{

//     render(){
//         return(
//         <button onClick = {() => increasecount(count+1)}>+</button>
//         )
//     }
// }

// ReactDOM.render(
//     <ButtonCounter/>,
//     document.querySelector("#app")
// )