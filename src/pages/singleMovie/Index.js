import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import ReactPlayer from "react-player/file";
import { Link } from "wouter";
const videoStyle = {
  backgroundColor: "#1151515",
  height: "100vh",
  width: "100%"
};

export default function SingleMovie(props) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const playlistData = [
    {
      title: "Video Principal",
      url: require("C:/Users/Juan David/Desktop/movies/" + props.path)
    },
    {
      title: "Preroll",
      url: require("C:/Users/Juan David/Desktop/movies/lana.mp4")
    }

    // Agrega más elementos a la lista
  ];

  const handleVideoEnded = () => {
    if (currentVideoIndex < playlistData.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0); // Reproduce el primer video de la lista nuevamente
    }
  };
  return (
    <React.Fragment>
      <div className="video-container" style={videoStyle}>
        <div className="back-button">
          <Link to="/">
            <BsArrowLeftShort />
          </Link>
        </div>

        <ReactPlayer
          url={playlistData[currentVideoIndex].url}
          controls={true}
          width="100%"
          height="100%"
          onEnded={handleVideoEnded}
        />
      </div>
    </React.Fragment>
  );
}
