






// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Navigation from "./Components/Navigation";
// import Search from "./Components/Search";
// import Movies from "./Components/Movies";
// import Footer from "./Components/Footer";

// class App extends Component {
//   state = {
//     movies: false
//   };

//   displayMovies = movies => {
//     this.setState({
//       movies
//     });
//   };

//   render() {
//     const { movies } = this.state;

//     return (
//       <>
//         <Navigation />

//         <div className="jumbotron jumbotron-fluid">
//           <div className="container">
//             <h1 className="display-4">Twoja baza filmów</h1>
//             <p className="lead">
//               Wyszukuj swoje ulubione filmy. Dane dostarcza <a href="https://www.themoviedb.org" target="_blank">The Movie DB</a>.
//             </p>
//           </div>
//         </div>

//         <div className="container py-5">
//           <div className="row">
//             <div className="col-md text-center">
//               <h3 className="lead">Znajdź swój ulubiony film!</h3>
//               <Search displayMovies={this.displayMovies} />
//             </div>
//           </div>
//         </div>

//         {movies === false ? null : <Movies movies={movies} />}

//         <Footer/>
//       </>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));


import React from "react";
import ReactDOM from "react-dom";
 
ReactDOM.render(
  <h1>Hello, World!</h1>,
  document.getElementById("app")
);