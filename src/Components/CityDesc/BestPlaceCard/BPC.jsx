import React from 'react';
import './BPC.css';

const BPC = ({
  imgSrc,
}) => {
  return (
    <div className="city-container">
      <div className="city-image">
        <img src={imgSrc} alt="" />
        <div className="city-Desc">
          <h3>Deputy SAVS</h3>
          <p>
            Deputy SAVS is a famous place in Ayodhya. It is a very good place to visit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BPC;
