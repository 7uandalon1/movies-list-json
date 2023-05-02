import Banner from "./components/Banner";
import Row from "./components/Row";
import Navbar from "./components/Navbar";
import moviesJson from "./assets/movies/movies.json";
const movieconst = Object.values(moviesJson.movies);
console.log(movieconst);
function App() {
 

  return (
    <div className="bg-[#111] w-screen overflow-x-hidden">
      <Navbar />
      <Banner />
      <Row title="Movies" isLargeRow movies={movieconst}/>{" "}
       {/* <Row title="Animations" fetchUrl={requests.fetchAnimations} />{" "}  */}
    </div>
  );
}

export default App;
