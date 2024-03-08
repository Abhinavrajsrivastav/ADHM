import React, { useEffect } from 'react';
import './Expert.css';
import ExpertC from './ExpertCard/ExpertC';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

const Expert = () => {
  useEffect(() => {
    ScrollReveal().reveal('.Explore-Body-1', {
      origin: 'bottom',
      delay: 500,
      distance: '100px',
      easing: 'ease-in-out',
      duration: 1000,
    });

    ScrollReveal().reveal('.Explore-Heading', {
      origin: 'left',
      delay: 500,
      distance: '100px',
      easing: 'ease-in-out',
      duration: 1000,
    });
  }, []);

  const size = window.innerWidth;
  return (
    <div className="Explore-Container">
      <div className="Explore-Heading">
        <span>03 Guidance</span>
        <h2 className="Typing-text">Expert advice, Things to remember in Ayodhya.</h2>
      </div>
      <div className="Explore-Body">
        <div className="Explore-Body-1">
          {size >= 1005 ? (
            <>
              <ExpertC height={250} width={400} boxHeight={250} imgSrc={'./Images/ThingsRemember/askHelp.jpeg'} title={'Ask For Help.'} />
              <ExpertC height={250} width={400} boxHeight={250} imgSrc={'./Images/ImportantThings/ayodhyaPolicee.png'} title={'Police in Ayodhya'} />
            </>
          ) : (
            <>
              <ExpertC height={100} width={150} boxHeight={100} imgSrc={'./Images/ImportantThings/medical.jpg'} title={'Medical Hospitals in Ayodhya.'} />
              <ExpertC height={100} width={150} boxHeight={100} imgSrc={'./Images/ImportantThings/ayodhyaPolicee.png'} title={'Ayodhya Police Station.'} />
            </>
          )}
          <Link to="/ExpertAdvice">
            <button className="cta">
             <span>View More</span>
             <svg width="15px" height="10px" viewBox="0 0 13 10">
               <path d="M1,5 L11,5"></path>
               <polyline points="8 1 12 5 8 9"></polyline>
             </svg>
           </button>
          </Link>
        </div>
        <div className="Explore-Body-2">
          {size >= 1005 ? (
            <>
              <ExpertC height={300} width={350} boxHeight={300} imgSrc={'./Images/ThingsRemember/askHelp.jpeg'} title={'Ask for help.'} />
              <ExpertC height={300} width={350} boxHeight={300} imgSrc={'./Images/ImportantThings/medical.jpg'} title={'Medical Hospitals in Ayodhya.'} />
              <ExpertC height={300} width={350} boxHeight={300} imgSrc={'./Images/ImportantThings/aware.png'} title={'Be aware.'} />
              <ExpertC height={300} width={350} boxHeight={300} imgSrc={'./Images/ImportantThings/motals.jpg'} title={'Place where you can stay.'} />
              <ExpertC height={300} width={350} boxHeight={300} imgSrc={'./Images/ImportantThings/busService.png'} title={'Bus services in Ayodhya.'} />
              <ExpertC height={300} width={350} boxHeight={300} imgSrc={'./Images/ImportantThings/taxiService.jpg'} title={'Taxi service in local areas.'} />
            </>
          ) : (
            <>
              <ExpertC height={90} width={130} boxHeight={90} imgSrc={'./Images/ImportantThings/busService.png'} title={'Bus services in Ayodhya.'} />
              <ExpertC height={90} width={130} boxHeight={90} imgSrc={'./Images/ImportantThings/aware.png'} title={'Be aware.'} />
              <ExpertC height={90} width={130} boxHeight={90} imgSrc={'./Images/ThingsRemember/askHelp.jpeg'} title={'Ask for help if you need.'} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Expert;
