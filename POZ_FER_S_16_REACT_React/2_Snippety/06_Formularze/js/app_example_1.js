import React, {Component} from "react";
import ReactDOM from "react-dom";

class FormExample extends Component {
  state = {
    name: ""
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Imię i nazwisko:
          <input type="text"
                 name="name"
                 value={this.state.name}
                 onChange={this.handleNameChange}/>
        </label>
        <input type="submit" value="Wyślij"/>
      </form>
    );
  }
}

function App() {
  return <FormExample/>;
}

ReactDOM.render(<App/>, document.getElementById("app"));