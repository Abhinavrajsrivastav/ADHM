import React from 'react';
import './bestPlacePage.css';
import BPP from './BestPlacePage/BPP';

const bestPlacePage = () => {
  return (
    <div className="bestPlace-container">
        <div className="bestPlace-Head">
            <img src="./images/Places/ramMandir.jpg" alt="" />
            <div className="heading-text">
                <span>Welcome to Ayodhya, here are some of beautiful and peaceful places to visit.</span>
            </div>
        </div>

        <div className="body-heading">
            <h2>04 Guidance</h2>
            <span>Some Of the best Places in Ayodhya.</span>
        </div>
         <div className="Best-Places-body">
           <BPP imgSrc={'./Images/Places/RelaxPlace/ramKiPaidi.jpg'} title={'Ramki Paidi'} about={'Ram ki paidi'}/>  
           <BPP imgSrc={'./Images/Places/RelaxPlace/guptarGhat.jpg'} title={'Guptar ghat'} about={'Guptar Ghat'}/>   
           <BPP imgSrc={'./Images/Places/RelaxPlace/militaryTemple.jpg'} title={'Milatry temple'} about={'Milatry temple'}/>  
           <BPP imgSrc={'./Images/Places/RelaxPlace/ramKiPaidi.jpg'} title={'Ramki Paidi'} about={'Ram ki paidi'}/>  
           <BPP imgSrc={'./Images/Places/RelaxPlace/guptarGhat.jpg'} title={'Guptar ghat'} about={'Guptar Ghat'}/>   
           <BPP imgSrc={'./Images/Places/RelaxPlace/militaryTemple.jpg'} title={'Milatry temple'} about={'Milatry temple'}/>
      </div>
    </div>
  )
}

export default bestPlacePage