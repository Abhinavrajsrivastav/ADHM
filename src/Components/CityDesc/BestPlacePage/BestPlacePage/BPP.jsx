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
  <p className="title">How to make this material card ?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi. </p>
</div>
{/* <div className="footer">
  <p className="tag">#HTML #CSS </p>
  <button type="button" className="action">Read more</button>
</div> */}
</div>
  );
};

export default BPP;
