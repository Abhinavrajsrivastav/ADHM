// ExpertPageCard.js

import React from 'react';
import './ExpertPageCard.css';

const ExpertPageCard = (
  { name,
    img ,
    about
  }
) => {
  return (
    <div className="Expert-card">
      <div className="image">
        <img src={img} alt="Temple" />
      </div>
      <div className="content">
        <span className="title">
          {name}
        </span>
        <p className="desc">
          {about}
         </p>
        <a className="Expert-read" href="#">
          Explore
          <span aria-hidden="true"> → </span>
        </a>
      </div>
    </div>
  );
};

export default ExpertPageCard;
