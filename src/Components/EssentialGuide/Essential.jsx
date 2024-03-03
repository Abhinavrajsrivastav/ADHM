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
                <h1>Shri Ram Bhumi Mandir</h1>
            </div>
           </div>
           <div className="Head-2">

           </div>
        </div>
        <div className="Essential-Container">
            <GuideC imgSrc={'./images/Places/Temples/ramTemple.jpg'}/>
            <GuideC imgSrc={'./images/Places/Temples/HanumanGarhiTemple.jpeg'}/>
            <GuideC imgSrc={'./images/Places/Temples/KanakBhawanTemple.jpg'}/>
            <GuideC imgSrc={'./images/Places/Temples/nageshwarNathTemple.jpg'}/>
            <GuideC imgSrc={'./images/Places/Temples/swargDwarTemple.jpg'}/>
            <GuideC imgSrc={'./images/Places/Temples/tulsiSmarakBhawanMuseum.jpg'}/>
        </div>
    </div>
  )
}

export default Essential