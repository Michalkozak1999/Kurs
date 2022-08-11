import React, {Component} from "react";
import ReactDOM from "react-dom";






class SpeedClickGame extends Component{
    constructor(props){
        super(props)
        this.state = {
            time: 2000,
            punkty: 0,
            blokada: false,
            wynik: 0
        }
    }

    componentDidMount(){
        this.intervalid = setInterval(() => {
            this.setState({
               time: this.state.time - 5,
               punkty: this.state.punkty
        })
                // this.state.time -50
            if(this.state.time <= 0){
                this.setState({
                    blokada: true,
                    time: 0
                })
            }
        }, 50);
    }

    render(){
    
        
        return(
            <section>
                <button onClick={() => {this.setState({
                    punkty: this.state.punkty +1,
                    wynik: this.state.wynik +50,
                    time: 2000 - this.state.wynik

                })}} disabled={this.state.blokada}
                
                >Click ME!</button>



                    <h1>{this.state.time}</h1>
                    <h2>Ilość Kliknięć: {this.state.punkty}</h2>
                    {this.state.wynik}

            </section>
        )
    }
}

ReactDOM.render(<SpeedClickGame/>, document.getElementById("app"));


// onClick={this.state.time-50}
// disabled={this.state.blokada} 