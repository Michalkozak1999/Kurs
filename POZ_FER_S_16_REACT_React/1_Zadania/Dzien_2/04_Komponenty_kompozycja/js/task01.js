import React, {Component} from "react";
import ReactDOM from "react-dom";

const item =
    [
        {
            title: "Mysz komputerowa",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
        },
        {
            title: "Klawiatura",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
        },
        {
            title: "Laptop programisty",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
        }
    ]
function ShopItemHeader(props) {
    return(
        item.map(function (el) {
           return <><h1>{el.title}</h1><img src={el.image}/></>
        })
    )
}
class ShopList extends Component{
    render(props){
        return(
            <div className='shoplist' title={item.title} image={item.image}>
                <ShopItemHeader/>
            </div>
        )
    }
}

ReactDOM.render(
  <ShopList/>,
  document.getElementById("app")
);
