import React from "react";

const Banner = () => {
  

  return (
    <header
      className="banner backdrop-brightness-100 relative"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          something...
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
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
