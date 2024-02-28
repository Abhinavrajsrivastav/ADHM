import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className="Intro-Container">
        <img src="./images/Places/RamKiPaidi.jpg" alt="" style={{height: '500px', width: '1300px'}}/>
        <div className="Content-Overlay">
            <h1>Your Ayodhya<br /> Dham Visit Guide</h1>
            <div  className="OverLays-box">
                <span>Ram Mandir Aarti Booking Guide</span>
                <span>Ram Mandir Darshan Booking Guide</span>
            </div>
        </div>
    </div>
  )
}

export default Intro;
