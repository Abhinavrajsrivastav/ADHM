import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './CityDesc.css';
import {useState} from 'react';

const CityDesc = () => {

  const [animationsInitialized, setAnimationsInitialized] = useState(false);

  useEffect(() => {
    if (!animationsInitialized) {
      ScrollReveal().reveal('.city-image-1, .city-image-2', {
        origin: 'left',
        delay: 500,
        distance: '100px',
        easing: 'ease-in-out',
        duration: 1000
      });

      ScrollReveal().reveal('.city-description', {
        origin: 'right',
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
      <div className="city-container">
        <div className="city-image-1">
          <img src="./images/Places/deputsavs.jpg" alt="" />
        </div>
        <div className="city-description">
          <h2>Ayodhya</h2>
          <p>
            Ayodhya is a city located in the Indian state of Uttar Pradesh. It holds great
            cultural and historical significance, known for being the birthplace of Lord Rama.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Aut incidunt enim veritatis, magnam iste aspernatur culpa doloremque ea?
            Consectetur soluta similique eius esse tempore laborum sapiente deserunt ut temporibus cum!
          </p>
        </div>
      </div>
      
      <div className="city-container">
        <div className="city-image-2">
          <img src="./images/Places/deputsavs.jpg" alt="" />
        </div>
        <div className="city-description">
          <h2>Ayodhya</h2>
          <p>
            Ayodhya is a city located in the Indian state of Uttar Pradesh. It holds great
            cultural and historical significance, known for being the birthplace of Lord Rama.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Aut incidunt enim veritatis, magnam iste aspernatur culpa doloremque ea?
            Consectetur soluta similique eius esse tempore laborum sapiente deserunt ut temporibus cum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityDesc;
