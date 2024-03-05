import React from 'react';
import './BPP.css';

const BPP = ({
  imgSrc,
  title,
  about,
}) => {
  return (
   <div className="card">
<div className="header">
  <img src={imgSrc} alt="" />
  <button type="button" className="action">Read more</button>
</div>
<div className="info">
  <p className="title">{title}</p>
  <p>{about}</p>
</div>
</div>
  );
};

export default BPP;
