import React from 'react'
import {BsArrowLeftShort} from "react-icons/bs";
import ReactPlayer from 'react-player/file'
const videoStyle = {
    "backgroundColor": "#1151515",
    "height": "100vh",
    "width": "100%"
  }

export default function SingleMovie() {
    return (
        <React.Fragment>
        <div className='video-container' style={videoStyle}>
          <div className='back-button'>
            <BsArrowLeftShort />
          </div>
      <ReactPlayer url={require('../../../cascada-158229.mp4')}></ReactPlayer>
        </div>
      </React.Fragment> 
    )
}