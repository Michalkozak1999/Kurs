import React, {Component} from "react";
import ReactDOM from "react-dom";

class Menu extends Component{
    render(){
        return(
        <>
            <ul>
                <li><a href='/'>Strona główna</a></li>
                <li><a href ='/blog'>Blog</a></li>
                <li><a href='cennik'>Cennik</a></li>
                <li><a href='/kontakt'>Kontakt</a></li>
            </ul>
        </>
        )
    }
}

ReactDOM.render(
 <Menu/>,
  document.getElementById("app")
);
