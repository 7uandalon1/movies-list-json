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
      <Row title="Movies" isLargeRow Json={movieconst}/>
      <Row title="Series" isLargeRow Json={movieconst} isSeries/>
    </div>
  </React.Fragment>
  ;


function App() {
 

  return (
    <div className="bg-[#111] w-screen overflow-x-hidden background-app">
        <Route path='/'>
          {<Home/>}
        </Route>
        <Route path="/view/:id/:path">{(params) => <SingleMovie path={params.path} id={params.id}/>}</Route>
     </div>
  );
}


export default App;
