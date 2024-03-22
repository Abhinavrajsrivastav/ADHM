import React from 'react';
import GuideCard from './GuideCards/GuideCard';
import './Essential.css';

const Essential = () => {
  return (
    <div className="EssentialGuide">
      <div className="EssentialG-Head">
        <div className="Head-1">
          <h3>① Essential Guide Updated Daily</h3>
          <div className="Essential-ViewMore">
            <h1>Shri Ram Bhumi Mandir</h1>
          </div>
        </div>
      </div>
      <div className="Essential-Container">
        <div className="guide-container">
          <GuideCard img={"./Images/Places/Temples/ramMandir.jpg"} name={"Ram Janmbhumi"} about={"Ram Janmbhumi, the birthplace of Lord Ram"}/>
          <GuideCard img={"./Images/Places/Temples/HanumanGarhiTemple.jpeg"} name={"Hanuman Garhi"} about={"Hanuman Garhi is a temple dedicated to Lord Hanuman, situated in the heart of Ayodhya"}/>
          <GuideCard img={"./Images/Places/Temples/tulsiSmarakBhawanMuseum.jpg"} name={"Tulsi Smarak Bhavan"} about={"Tulsi Smarak Bhavan is a museum and research center dedicated to the life and works of Goswami Tulsidas"}/>
          <GuideCard img={"./Images/Places/Temples/nageshwarNathTemple.jpg"} name={"NageswarNath Temple"} about={"NageswarNath Temple is a prominent Shiva temple in Ayodhya"}/>
          <GuideCard img={"./Images/Places/Temples/kanakBhavan.jpg"} name={"Kanak Bhavan"} about={"Kanak Bhavan is a grand palace-like temple dedicated to Lord Ram and Goddess Sita"}/>
          <GuideCard img={"./Images/Places/Temples/tulsiUdyan.jpg"} name={"Tulsi Udyan"} about={"Tulsi Udyan is a serene garden dedicated to Goswami Tulsidas, located on the banks of the Sarayu River"}/>
          <GuideCard img={"./Images/Places/Temples/maniparvat.jpg"} name={"Mani Parvat"} about={"Mani Parvat is a sacred hill in Ayodhya"}/>
          <GuideCard img={"./Images/Places/Temples/rajaRamMandir.jpg"} name={"RajaRam Mandir"} about={"RajaRam Mandir is a magnificent temple dedicated to Lord Ram"}/>
        </div>

        <button className="Essential-cta">
          <span>Read More</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Essential;
