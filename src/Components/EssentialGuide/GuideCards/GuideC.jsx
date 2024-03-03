import React from 'react';
import './GuideC.css';

const GuideC = ({
  imgSrc,
}) => {
  return (
    <div className="Essential-Card">
        <div className="Content-Img">
            <img src={imgSrc} alt="" />
            <div className="Essention-head">
              Read 
            </div>
        </div>
        <div className="About-Content">
            <span>Booking of ayodhya saryu aarti step-by-step guide.</span>
            <p>Read{" >>"}</p>
        </div>
    </div>
  )
}

export default GuideC;