import React, {Component} from "react";
import ReactDOM from "react-dom";
import Products from './data/products';

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("app"));



function Receipt(props) {
    return(
        Products.map(function (xd) {
            let obliczenia = 0;
            let wynik = 0;
            return (
                <div key = {xd.code}>
                    
                    {xd.name} | {xd.single_price} | {xd.qty} |
                    {/* |||||obliczenia = {xd.single_price*xd.qty} */}
                    {/* <p>Code:  {xd.code}</p> <p>Single Price:  {xd.single_price}</p><p>Qty:  {xd.qty}</p> */}

                  | {obliczenia = xd.qty * xd.single_price}

                 
                 
                    
                     </div>
            )
           
            
        })
        
    )
  
}



let magia5 = 0;
let magia2 = 0;
let magia4 = [];
function Cwiczenia2(props) {
    
return(
    Products.map(function (jd, i) {
        // {magia4 = jd.single_price*jd.qty}
        {magia2 = magia2 + (jd.single_price*jd.qty)}
        {magia5 =jd.single_price*jd.qty }
        {magia4.push(magia5)}
       
        return(
        
            <div> 

           //// { magia2}/////
           {/* //// {magia4}///// */}



             {/* {magia4.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue;
                
            })}   */}


    {/* {magia3.reduce(function(previousValue, currentValue){
            return previousValue + currentValue; */}

            
         {/* })}  */}


        
            </div>
        )  
    }) 
),
<div> SUMA: {magia4.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
    
})}  </div>






}

// var cwiczenia = [1,2,3,4,5]
// function Cwiczenia(props) {
//     let magia = 0;
//     return(
//         cwiczenia.map(function (zd) {
// return(
//           <div> {zd} {magia = magia + zd} ////////////
          
//           {cwiczenia.reduce(function(previousValue, currentValue){
//             return previousValue + currentValue;

//           })}
          
          
          
//           </div>

//           )
        
//         })


//     )
// }


function Witam(props) {
    return(
        
        <p>
             {/* {magia4.reduce(function(previousValue, currentValue){
            return previousValue + currentValue; 

            
     })}  */}

     {magia4}



        </p>

     
      
    )
    
}


function Join(props) {
    return(
        <section>
<h3>Nazwa | Cena | Ilość | Łączna cena</h3>
<Receipt/>
<Witam/>


<h3>  <Cwiczenia2/> </h3>
        </section>
    )
    
}







function App(props) {
    return(
        <>
<Join/>
{/* <Cwiczenia/> */}
{/* <Cwiczenia2/> */}

        </>
    )
    
}


ReactDOM.render(
    <App/>,
    document.querySelector("#app")
)
