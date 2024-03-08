import React from 'react';
import './ExpertAdvicePage.css';
import ExpertPageCard from './ExpertPageCard/ExpertPageCard';

const ExpertAdvicePage = () => {
  return (

    <div className="expert-page-container">
    <h1 className="expert-page-heading">Expert Advice for visiters coming in Shri Ayodhya Dham.</h1>
    <div className="ExpertPage-container">
      <ExpertPageCard />
      <ExpertPageCard />
      <ExpertPageCard />
      <ExpertPageCard />
      <ExpertPageCard />
      <ExpertPageCard />
    </div>
    </div>
  )
}

export default ExpertAdvicePage