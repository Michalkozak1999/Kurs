import React, {Component} from "react";
import ReactDOM from "react-dom";


class App extends Component {
  render() {
    const {post} = this.props;
    return (
      <div>
        <User user={post.author}/>
        <Post post={post}/>
      </div>
    );
  }
}

class Post extends Component {
  render() {
    const {title, body} = this.props.post;
    return (
      <div className="post">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

class User extends Component {
  render() {
    const {avatar, name} = this.props.user;
    return (
      <div className="user">
        <img src={avatar}/>
        <strong>{name}</strong>
      </div>
    );
  }
}

const post = {
  author: {
    avatar: "/img/mel.jpg",
    name: "Mel Gibson"
  },
  title: "The best of",
  body: "this is my post"
};

ReactDOM.render(
  <App post={post}/>,
  document.getElementById("app")
);