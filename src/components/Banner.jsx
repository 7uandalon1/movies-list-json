import React from "react";
import MoviesJson from "../assets/movies/movies.json";
import {Link} from 'wouter'
const constMovies = MoviesJson.movies;
const Banner = () => {
  function bannerSelection(){
    let actualBanner = constMovies[Math.floor(Math.random() * constMovies.length)];
    return actualBanner;
  }
    const [selectedBanner, setSelectedBanner] = React.useState(bannerSelection());
    function changeBanner(){
      setSelectedBanner(bannerSelection());
    }
  return (
    <header
      className="banner backdrop-brightness-100 relative"
      style={{
        backgroundSize: "contain",
        backgroundImage: `url("${selectedBanner.poster}")`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        paddingRight: "10vw",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {selectedBanner.title}
        </h1>
        <div className="banner__buttons">
        <Link to={"/view/" + selectedBanner.id + "/" + selectedBanner.path}>
          <button className="banner__button">Play</button>
        </Link>
          <button className="banner__button" onClick={changeBanner}>Random</button>
        </div>
        <h1 className="banner__description">
          {" "}
  
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>

    </header>
  );
};

export default Banner;
