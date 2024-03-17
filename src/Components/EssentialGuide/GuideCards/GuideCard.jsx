import React from 'react';
import './GuideCard.css';

const GuideCard = () => {
  return (
    <div className="Essential-Expert-card">
      <div className="Essential-image">
        <img src="./images/Places/ramMandir.jpg" alt="" />
      </div>
      <div className="content">
          <span className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>

        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <a className="Expert-read" href="#">
         Read More
          <span aria-hidden="true"> → </span>
        </a>
      </div>
    </div>
  );
};

export default GuideCard;
