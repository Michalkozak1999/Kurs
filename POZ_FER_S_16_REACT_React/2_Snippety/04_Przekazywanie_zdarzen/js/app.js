import React, {Component} from "react";
import ReactDOM from "react-dom";

class ToDoList extends Component {
  state = {
    tasks: [
      {id: 1, title: "Zrobić zakupy"},
      {id: 2, title: "Obejrzeć nowy sezon Gry o Tron"},
      {id: 3, title: "Zrobić zadania domowe"}
    ]
  };

  handleTaskDone = id => {
    const tasks = this.state.tasks.filter(task => {
      return task.id !== id;
    });

    this.setState({
      tasks
    });
  };

  render() {
    return (
      <ul>
        {this.state.tasks.map(task => (
          <ToDoItem
            key={task.id}
            task={task}
            onDone={this.handleTaskDone}/>
        ))}
      </ul>
    );
  }
}

class ToDoItem extends Component {
  handleDoneClick = () => {
    if (typeof this.props.onDone === "function") {
      this.props.onDone(this.props.task.id);
    }
  };

  render() {
    return (
      <li>
        <h2>{this.props.task.title}</h2>
        <button onClick={this.handleDoneClick}>Zakończone</button>
      </li>
    );
  }
}


function App(){
  return <ToDoList/>;
}

ReactDOM.render(<App/>, document.getElementById("app"));
