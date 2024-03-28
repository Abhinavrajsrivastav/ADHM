import React from 'react';
import './GuideCard.css';

const GuideCard = ({
  img,
  name,
  about
}) => {
  return (
    <div className="Essential-Expert-card">
      <div className="Essential-image">
        <img src={img} alt="" />
      </div>
      <div className="contents">
          <span className="title">
            {name}
          </span>

        <p className="desc">
          {about}
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
