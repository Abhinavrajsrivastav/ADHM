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
            <GuideCard />
            <GuideCard />
            <GuideCard />
            <GuideCard />
            <GuideCard />
            
            </div>

            <button className="cta">
             <span>View More</span>
             <svg width="15px" height="10px" viewBox="0 0 13 10">
               <path d="M1,5 L11,5"></path>
               <polyline points="8 1 12 5 8 9"></polyline>
             </svg>
           </button>
        </div>
    </div>
  )
}

export default Essential