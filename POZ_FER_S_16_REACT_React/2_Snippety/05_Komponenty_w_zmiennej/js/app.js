import React, {Component} from "react";
import ReactDOM from "react-dom";

class Bulb extends Component {
  state = {
    bulbOn: false
  };

  handleTurnOffClick = () => {
    this.setState({
      bulbOn: false
    });
  };

  handleTurnOnClick = () => {
    this.setState({
      bulbOn: true
    });
  };

  render() {
    let bulb;
    if (this.state.bulbOn) {
      bulb = <BulbOn onClick={this.handleTurnOffClick}/>;
    } else {
      bulb = <BulbOff onClick={this.handleTurnOnClick}/>;
    }
    return (
      <div>
        <h1>Żarówka</h1>
        {bulb}
      </div>
    );
  }
}


class BulbOff extends Component {
  render() {
    return (
      <>
        <span>Żarówka zgaszona</span>
        <button onClick={this.props.onClick}>Włącz</button>
      </>
    );
  }
}

class BulbOn extends Component {
  render() {
    return (
      <>
        <strong>Żarówka świeci</strong>
        <button onClick={this.props.onClick}>Wyłącz</button>
      </>
    );
  }
}

function App() {
  return <Bulb/>;
}

ReactDOM.render(<App/>, document.getElementById("app"));
