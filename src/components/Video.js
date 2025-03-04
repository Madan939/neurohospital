import React, { useState } from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      {!isPlaying ? (
        <div className="video-container">
          <div className="video-thumbnail" onClick={() => setIsPlaying(true)}>
            <img src="images/video-img.jpg" alt="Video Thumbnail" />
            <i className="play-btn fa-solid fa-play"></i>
          </div>
        </div>
      ) : (
        <div className="fullscreen-video">
          <ReactPlayer 
            url="https://www.youtube.com/watch?v=TnBuYRP5hZo" 
            controls
            playing
            width="90%"
            height="90%"
          />
          <i className="close-btn fa-solid fa-times" onClick={() => setIsPlaying(false)}></i>
        </div>
      )}
    </div>
  );
};

export default Video;
