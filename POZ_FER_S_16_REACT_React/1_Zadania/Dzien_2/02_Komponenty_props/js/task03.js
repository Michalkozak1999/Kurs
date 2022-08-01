import React, {Component} from "react";
import ReactDOM from "react-dom";
class Menu extends Component{
    render(props){
       let elements = this.props.menu.map(function (el) {
            return <li key={el.text}><a href={el.url}>{el.text}</a></li>
        })
        return(
            <>
                <ul>
                    {elements}
                    {/*<li><a href='/'>Strona główna</a></li>*/}
                    {/*<li><a href ='/blog'>Blog</a></li>*/}
                    {/*<li><a href='cennik'>Cennik</a></li>*/}
                    {/*<li><a href='/kontakt'>Kontakt</a></li>*/}
                </ul>
            </>
        )
    }
}
ReactDOM.render(
    <Menu menu={[{url:'asdasd',text:'asdasda'}, {url:'asdasd', text:'2123'}]} />,
  document.getElementById("app")
);
