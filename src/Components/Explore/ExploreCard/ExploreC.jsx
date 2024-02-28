import React from 'react';
import './ExploreC.css';

const ExploreC = ({ 
  height, 
  width, 
  boxHeight }) => {
  return (
    <div className="Explore-Card">
      <div className="Explore-Img" style={{height: boxHeight}}>
        <img src="./images/Places/AyodhyaAarti.jpg" alt="" style={{ height: height, width: width }} />
      </div>
      <div className="EContent">
        <div className="Explore-Content">
          <span>Booking of Ayodhya Saryu Aarti step-by-step guide.</span>
        </div>
        <div className="About-Explore">
          How to book Aarti at Saryu Ghat in Ayodhya?.
        </div>
      </div>
    </div>
  );
}

export default ExploreC;
