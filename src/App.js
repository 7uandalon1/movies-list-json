import React from 'react'
import {Route} from "wouter"
import SingleMovie from './pages/singleMovie/Index.js'
import Banner from "./components/Banner";
import Row from "./components/Row";
import Navbar from "./components/Navbar";
import moviesJson from "./assets/movies/movies.json";
// import {Player} from "./components/VideoPlayer.jsx";

const movieconst = Object.values(moviesJson.movies);

console.log(movieconst);



const Home = () =>  
  <React.Fragment>
    <div className="bg-[#111] w-screen overflow-x-hidden">
      <Navbar />
      <Banner />
      <Row title="Movies" isLargeRow movies={movieconst}/>
    </div>
  </React.Fragment>
  ;


function App() {
 

  return (
    <div className="bg-[#111] w-screen overflow-x-hidden">
        <Route path='/'>
          {<Home/>}
        </Route>
        <Route path="/view/:id">{<SingleMovie/>}</Route>
     </div>
  );
}


export default App;
