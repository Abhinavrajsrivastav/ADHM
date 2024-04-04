import React, { useState } from 'react';
import './TempleCard.css';

const TempleCard = ({ name, img, about }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="Essential-card">
      <div className="image">
        <img src={img} alt="Temple" />
      </div>
      <div className="content">
        <span className="title">
          {name}
        </span>
        <p className="desc">
          {expanded ? about : about.slice(0, 100)}
          {about.length > 100 && !expanded && (
            <span>
              ...{' '}
              <button className="read-more" onClick={toggleExpansion}>
                Read More
              </button>
            </span>
          )}
        </p>
        {expanded && (
          <button className="read-less" onClick={toggleExpansion}>
            Read Less
          </button>
        )}
        <a className="Expert-read" href="#">
          Explore
          <span aria-hidden="true"> → </span>
        </a>
      </div>
    </div>
  );
};

export default TempleCard;
