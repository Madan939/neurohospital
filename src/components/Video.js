import React, { useState } from "react";
import ReactPlayer from "react-player";

const Video = ({url,img}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      {! isPlaying && (
        <div className="video-container">
          <div className="video-thumbnail" onClick={() => setIsPlaying(true)}>
            <img src={img} alt="Video Thumbnail" />
            <i className="play-btn fa-solid fa-play"></i>
          </div>
        </div>
      ) }
      {isPlaying &&(
        <div className="fullscreen-video">
          <ReactPlayer 
            url={url}
            controls
            playing
            width="90%"
            height="90%"
            z-index="99"
          />
          <i className="close-btn fa-solid fa-times" onClick={() => setIsPlaying(false)}></i>
        </div>
      )}
    </div>
  );
};

export default Video;
