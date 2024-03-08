import React from 'react';
import GuideCard from './GuideCards/GuideCard';
import './Essential.css';

const Essential = () => {
  return (
    <div className="EssentialGuide">
        <div className="EssentialG-Head">
           <div className="Head-1">
            <h3> ① Essential Guide Updated Daily</h3>
            <div className="Essential-ViewMore">
                <h1>Shri Ram Bhumi Mandir</h1>
            </div>
           </div>
        </div>
        <div className="Essential-Container">
            <div className="guide-container">
            <GuideCard />
            <GuideCard />
            <GuideCard />
            </div>
        </div>
    </div>
  )
}

export default Essential