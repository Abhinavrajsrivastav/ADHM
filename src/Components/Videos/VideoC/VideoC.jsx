import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './VideoC.css';

function VideoC({
  vId,
}) {
  const videoId = vId;
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
    window.scrollY = 0;
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  const opts = {
    height: '500',
    width: '800',
  };

  return (
    <div className="video-Box">
      <div className="video" onClick={openVideo}>
        <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" />
        <div className="play-button">▶</div>
      </div>

      {showVideo && (
        <div className="video-overlay" onClick={closeVideo}>
          <div className="video-modal">
            <YouTube videoId={videoId} opts={opts} />
          </div>
        </div>
      )}

      <div className="video-title">
        How to add hyperloop in website design.
      </div>
      <div className="video-about">
        Hyperloop in the website makes it more beautiful and interesting.
      </div>
    </div>
  );
}

export default VideoC;
