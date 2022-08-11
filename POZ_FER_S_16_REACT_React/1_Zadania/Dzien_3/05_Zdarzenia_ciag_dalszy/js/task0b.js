import React, {Component} from "react";
import ReactDOM from "react-dom";





class Mobilemenu  extends Component{
    render(){
        return(

            <section class= "mobile">
               <header class ="mobile-menu">   
                <a href="#" class="open-menu">open menu</a>
                <nav class="hide">
                    <ul>
                    <li><a href="#">O nas</a></li>
                    <li><a href="#">Zespół</a></li>
                    <li><a href="#">Produkty</a></li>
                    <li><a href="#">Kontakt</a></li>
                    </ul>
                <a href="#" class="close-menu">Zamknij menu</a>
                </nav>
                </header>  
            </section>
        )
    }
}

ReactDOM.render(<Mobilemenu/>, document.getElementById("app"));
