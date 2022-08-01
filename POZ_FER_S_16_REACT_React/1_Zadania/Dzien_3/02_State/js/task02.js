import React, {Component} from "react";
import ReactDOM from "react-dom";

class StrobeLight extends Component{
    state={
        width: '500px',
        height: '700px',
        backgroundColor: 'red'
    }
    componentDidMount() {
        setInterval(() => {
            if(this.state.backgroundColor === "red"){
                this.setState({backgroundColor: this.props.backgroundColor, width:'300px'})
            }else if(this.state.backgroundColor === 'blue'){
                this.setState({backgroundColor: "orange", width:'500px'})
            }else{
                this.setState({backgroundColor: "red", width:'200px'})
            }
        },this.props.frequency)
    }

    render() {
        return(
           <div style={this.state}></div>

        )
    }
}

ReactDOM.render(<StrobeLight backgroundColor='blue' frequency ='100'/>, document.getElementById("app"));
