import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './CityDesc.css';
import {useState} from 'react';
import BPC from './BestPlaceCard/BPC';
import { Link } from 'react-router-dom';

const CityDesc = () => {

  const [animationsInitialized, setAnimationsInitialized] = useState(false);

  useEffect(() => {
    if (!animationsInitialized) {
      ScrollReveal().reveal('.city-image-1, .city-image-2', {
        origin: 'bottom',
        delay: 500,
        distance: '100px',
        easing: 'ease-in-out',
        duration: 1000
      });

      ScrollReveal().reveal('.city-description,.cityDesc-Heading', {
        origin: 'left',
        delay: 500,
        distance: '100px',
        easing: 'ease-in-out',
        duration: 1000
      });

      setAnimationsInitialized(true);
    }
  }, [animationsInitialized]);


  return (
    <div className="City-Box">
      <div className="cityDesc-Heading">
        <h2>04 Guidance</h2>
        <span>Some Of the best Places in Ayodhya.</span>
      </div>
      <div className="Best-Places">
           <BPC imgSrc={'./Images/Places/RelaxPlace/ramKiPaidi.jpg'} title={'Ramki Paidi'} about={'Ram ki paidi'}/>  
           <BPC imgSrc={'./Images/Places/RelaxPlace/guptarGhat.jpg'} title={'Guptar ghat'} about={'Guptar Ghat'}/>   
           <BPC imgSrc={'./Images/Places/RelaxPlace/militaryTemple.jpg'} title={'Milatry temple'} about={'Milatry temple'}/>     
      </div>
      <div className="ViewMore">
        <Link to="/SomePlaces"><button className="city-Button">Explore More</button></Link>
      </div>
    </div>
  );
};

export default CityDesc;
