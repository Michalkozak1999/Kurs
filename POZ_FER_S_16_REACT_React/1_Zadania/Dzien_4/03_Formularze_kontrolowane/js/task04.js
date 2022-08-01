import React, {Component} from "react";
import ReactDOM from "react-dom";

class SelectOrType extends Component{
    state={
        first:this.props.items[0],
        second:this.props.items[1],
        third:this.props.items[2],
        selected:'',
        inne:'inne'
    };
    render() {

        const PodSelectem = ()=>{
            if(this.state.selected ==='inne'){
                return(
                    <>
                    <input type='text' onChange={(e)=>{this.setState({inne:e.target.value})}}/>
                    <button>sdad</button>
                    </>
                )
            }else{
            return null
            }
        }

        return(
            <form>
                <select onChange={(e)=>{this.setState({selected: e.target.value})}}>
                    <option value={this.state.first}>{this.state.first}</option>
                    <option value={this.state.second}>{this.state.second}</option>
                    <option value={this.state.third}>{this.state.third}</option>
                    <option value={this.state.inne}>{this.state.inne}</option>
                </select>
                <PodSelectem/>
            </form>
        )
    }
}


class App extends Component{
    render() {
        return(
            <SelectOrType items={['pierwszy','drugi','trzeci']}/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
