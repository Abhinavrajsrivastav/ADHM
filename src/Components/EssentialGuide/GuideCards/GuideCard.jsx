import React, { useState } from 'react';
import './GuideCard.css';

const GuideCard = ({
  images,
  name,
  about
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="Essential-Expert-card">
      <div className="Essential-image">
        <img src={images[currentImageIndex]} alt="" style={{ transition: ".5s ease-in-out" }} />
      </div>
      <div className="contents">
        <span className="title">
          {name}
        </span>
        <p className="Temple-desc">
          {about}
        </p>
        <div className="action">
          {/* <button className="backward" onClick={prevImage}>
            ←
          </button> */}
          <button className="forward" onClick={nextImage}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
