import React from 'react';
import './HelpPage.css';
import HelpPageCard from './ExpertPageCard/HelpPageCard';
import HelpFullData from '../../Data/HelpFullData'; 

const HelpPage = () => {
  const HelpData = HelpFullData();
  return (

    <div className="expert-page-container">
    <h1 className="expert-page-heading">Expert Advice for visiters coming in Shri Ayodhya Dham.</h1>
    <div className="ExpertPage-container">
       {HelpData.map((place, index) => (
          <HelpPageCard
            key={index} // Providing a unique key for each card
            name={place.name}
            img={place.img}
            about={place.about}
          />
        ))}
    </div>
    </div>
  )
}

export default HelpPage;