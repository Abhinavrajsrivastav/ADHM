import React from 'react';
import './GuideCard.css';

const GuideCard = () => {
  return (
    <div className="Expert-card">
      <div className="image">
        <img src="./images/Places/ramMandir.jpg" alt="" />
      </div>
      <div className="content">
          <span className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>

        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
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
