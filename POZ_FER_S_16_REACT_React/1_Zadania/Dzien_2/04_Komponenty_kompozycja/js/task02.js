import React, {Component} from "react";
import ReactDOM from "react-dom";

function ChatHeader() {
    return(
        <header>
            <h1>Chat prywatny</h1>
        </header>
    )
}
function ChatMessage() {
    return(
        <>
        <li>Wpis z chatu 1</li>
            <li>Wpis z chatu 2</li>
            <li>Wpis z chatu 3</li>
        </>
    )
}
function ChatMessages() {
    return(
        <div>
            <ul>
                <ChatMessage/>
            </ul>
        </div>
    )
}
function NewChatMessage() {
    return(
        <footer>
            <form>
                <input type="text"/>
                <button>Wyślij</button>
            </form>
        </footer>
    )
}
function Chat(props) {
  return (
    <section className="chat">
      <ChatHeader/>
      <ChatMessages/>
      <NewChatMessage/>
    </section>
  );
}

function App(props) {
  return <Chat/>;
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);