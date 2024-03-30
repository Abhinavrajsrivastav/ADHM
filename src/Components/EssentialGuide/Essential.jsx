import React from 'react';
import GuideCard from './GuideCards/GuideCard';
import './Essential.css';
import { Link } from 'react-router-dom';

const Essential = () => {
  return (
    <div className="EssentialGuide">
      <div className="EssentialG-Head">
        <div className="Head-1">
            <span>Shri <span style={{color: "orange"}}>Ram</span> Bhumi Mandir 🚩</span>
          <div className="Essential-ViewMore">
          <span>Essential Guide Updated Daily</span>
          </div>
        </div>
      </div>
      <div className="Essential-Container">
        <div className="guide-container">
          <GuideCard img={"./Images/Places/Temples/ramMandir.jpg"} name={"Ram Janmbhumi"} about={"Ram Janmbhumi, the birthplace of Lord Ram"}/>
          <GuideCard img={"./Images/Places/Temples/HanumanGarhiTemple.jpeg"} name={"Hanuman Garhi"} about={"Hanuman Garhi is a temple dedicated to Lord Hanuman, situated in the heart of Ayodhya"}/>
          <GuideCard img={"./Images/Places/Temples/tulsiSmarakBhawanMuseum.jpg"} name={"Tulsi Smarak Bhavan"} about={"Tulsi Smarak Bhavan is a museum and research center dedicated to the life and works of Goswami Tulsidas"}/>
        </div>

        <Link to="/Temples">
          <button className="cta">
            <span>View More</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Essential;
