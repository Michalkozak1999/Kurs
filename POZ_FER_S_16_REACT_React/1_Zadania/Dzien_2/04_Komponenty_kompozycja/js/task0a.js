import React, {Component} from "react";
import ReactDOM from "react-dom";
const item ={
    title: "MacBook Pro",
    image: "https://bit.ly/2EEtduD",
    description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999
};
// function ShopHeader(props) {
//     return(
//         <header>
//             <h1>{props.title}</h1>
//             <img src={props.image}/>
//         </header>
//     )
// }
// function Article(props) {
//     return(
//         <article>
//             <p>{props.description}</p>
//         </article>
//     )
// }
// function Footer(props) {
//     return(
//         <footer>
//             Cena: {props.price} zł
//             <button>Kup!</button>
//         </footer>
//     )
// }
// function ShopItem(props) {
// return(
// <section>
//     <ShopHeader title={props.title} image={props.image} />
//     <Article description={props.description}/>
//    <Footer price={props.price}/>
// </section>
// )}
// class App extends Component{
//     render(){
//         return(
//             <ShopItem title={item.title} image={item.image} description={item.description} price={item.price}/>
//         )
//     }
// }
// ReactDOM.render(
//   <App/>,
//   document.getElementById("app")
// );

/////////////////////////////////////////////////////

function Shopiteamheder(props){
    return(
        <heder>
            <h1>{props.title}</h1>
            <img src = {props.image}/>
            </heder>
    )
}

// function ShopHeader(props) {
//     return(
//         <header>
//             <h1>{props.title}</h1>
//             <img src={props.image}/>
//         </header>
//     )
// }




function ShopItemDescription(props){
    return(
        <article>
            <p>{props.description}</p>  
        </article>
    )
}


//function Article(props) {
    //     return(
    //         <article>
    //             <p>{props.description}</p>
    //         </article>
    //     )
    // }


function ShopItemPricing(props){
    return(
        <footer>
            Cena: {props.price}
            <button>KUP!</button>  
        </footer>
    )
}

//function Footer(props) {
    //     return(
    //         <footer>
    //             Cena: {props.price} zł
    //             <button>Kup!</button>
    //         </footer>
    //     )
    // }


function Shopitem(props){
    return(
        <section>
            <Shopiteamheder title = {item.title} image = {item.image}  />
            <ShopItemDescription description = {item.description}  />
            <ShopItemPricing price = {item.price}  />

        </section>
    )
}



ReactDOM.render(
    <Shopitem/>,
    document.querySelector("#app")
)