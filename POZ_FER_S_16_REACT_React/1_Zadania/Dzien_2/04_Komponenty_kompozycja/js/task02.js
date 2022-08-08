import React, {Component} from "react";
import ReactDOM from "react-dom";

// function ChatHeader() {
//     return(
//         <header>
//             <h1>Chat prywatny</h1>
//         </header>
//     )
// }
// function ChatMessage() {
//     return(
//         <>
//         <li>Wpis z chatu 1</li>
//             <li>Wpis z chatu 2</li>
//             <li>Wpis z chatu 3</li>
//         </>
//     )
// }
// function ChatMessages() {
//     return(
//         <div>
//             <ul>
//                 <ChatMessage/>
//             </ul>
//         </div>
//     )
// }
// function NewChatMessage() {
//     return(
//         <footer>
//             <form>
//                 <input type="text"/>
//                 <button>Wyślij</button>
//             </form>
//         </footer>
//     )
// }
// function Chat(props) {
//   return (
//     <section className="chat">
//       <ChatHeader/>
//       <ChatMessages/>
//       <NewChatMessage/>
//     </section>
//   );
// }

// function App(props) {
//   return <Chat/>;
// }

// ReactDOM.render(
//   <App/>,
//   document.getElementById("app")
// );







function ChatHeder(props) {
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




// function Chatmessage(props) {
//     return(

// <>

//         <li>Wpis z chatu 1</li>
//              <li>Wpis z chatu 2</li>
//             <li>Wpis z chatu 3</li>   
    
            
//        </>

        
//     )
    
// }


function ChatMessages() {
    return(
        <div>
            <ul>
                <ChatMessage/>
            </ul>
        </div>
    )
}





// function Chatmessages(props) {
//     return(

//         <div>
//             <ul>
                  
//           <ChatMessage/>
//             </ul>
                     
//         </div>
        
//     )
    
// }


function Chatnewmessages(props) {
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
    return(
        <section className ="chat">
<ChatHeder/>
<div>
<ChatMessages/>
{/* <Chatmessages/> */}
</div>
<Chatnewmessages/>
        </section>
       
        
    )
    
}


function App(props) {
    return(
        
<Chat/>
       
       
        
    )
    
}


ReactDOM.render(
<App/>,
document.querySelector("#app")


)