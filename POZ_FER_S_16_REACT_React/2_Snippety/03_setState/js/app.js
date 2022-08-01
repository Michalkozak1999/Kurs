import React, {Component} from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {seconds: 0};
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <h1>Minęło {this.state.seconds} sekund.</h1>;
  }
}

function App() {
  return <Counter/>;
}

ReactDOM.render(<App/>, document.getElementById("app"));