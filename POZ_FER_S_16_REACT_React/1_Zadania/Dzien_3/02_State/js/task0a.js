import React, {Component} from "react";
import ReactDOM from "react-dom";

// class HelloWorld extends Component{
//     state={
//         counter:0
//     }
//     componentDidMount(){
//        this.intervalId = setInterval(() => this.setState({counter:this.state.counter+1}),
//             1000)
//     }

//     componentWillUnmount() {
//         console.log('odmontowane');
//         clearInterval(this.intervalId);
//     }

//     render() {
//         let text;
//         if(this.state.counter < 5){
//             text = 'HelloWorld!'
//         }else{
//             text = 'Hi Everyone!'
//         }
//         return(
//             <h1>{text}</h1>
//         )
//     }
// }
// class App extends Component{
//     render() {
//         return (
//             <HelloWorld/>
//         );
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById("app"));



class LifeCyclesTester extends Component{
    constructor(props){
        super(props);
        this.state = {
            seconds: 0
        }
       
    }





    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.setState({
                seconds: this.state.seconds +1
            })
          
        }, 1000);
    }

    componentWillUnmount() {
        console.log("odmontowane jak fubu")
        clearInterval(this.intervalId);
        
      }


    render(){
        let text
        if(this.state.seconds < 5 ){
            text = "Kocham Fubu"
        } else {
            text = "Chyba kocham fubu"
        }



            return( 
            
            <div>
           
            <h1>{text}</h1>
            <h1>Mineło {this.state.seconds}</h1>
            
            
            
            </div>
            )
    
        }

}

class App extends Component{
        render() {
            return (
                <LifeCyclesTester/>
            );
        }
    }

ReactDOM.render(
        <App />,
        document.getElementById("app"));
