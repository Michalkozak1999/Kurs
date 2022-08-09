import React, {Component} from "react";
import ReactDOM, { render } from "react-dom";






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
            clearInterval(this.intervalId);
            
          }


        render(){
                return <h1>Mineło {this.state.seconds}</h1>
        
            }

    }

    // componentDidMount(){}
    //     this.intervalid = setInterval(() => {
    //         {this.state.seconds = this.state.seconds + 1}
    //     }, 1000);
    // }


    // render(){
    //     return <h1>Mineło {this.state.seconds}</h1>

    // }


    ReactDOM.render(
        <h1>Hello World! <LifeCyclesTester/></h1>,
        document.getElementById("app")
        );
