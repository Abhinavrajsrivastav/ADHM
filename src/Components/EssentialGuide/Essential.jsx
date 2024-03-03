import React from 'react';
import GuideC from './GuideCards/GuideC';
import './Essential.css';

const Essential = () => {
  return (
    <div className="EssentialGuide">
        <div className="EssentialG-Head">
           <div className="Head-1">
            <h3> ① Essential Guide Updated Daily</h3>
            <div className="Essential-ViewMore">
                <h1>Ram Mandir Ayodhya</h1>
            </div>
           </div>
           <div className="Head-2">

           </div>
        </div>
        <div className="Essential-Container">
            <GuideC />
            <GuideC />
            <GuideC />
            <GuideC />
            <GuideC />
            <GuideC />
        </div>
    </div>
  )
}

export default Essential