import React from 'react';
import './Explore.css';
import ExploreC from './ExploreCard/ExploreC';
import ScrollReveal from 'scrollreveal';
import {useEffect} from 'react';


const Explore = () => {

    useEffect(()=>{
        ScrollReveal().reveal('.Explore-Body-1', {
            origin: 'bottom',
            delay: 500,
            distance: '100px',
            easing: 'ease-in-out',
            duration: 1000
            });

           ScrollReveal().reveal('.Explore-Heading', {
            origin: 'left',
            delay: 500,
            distance: '100px',
            easing: 'ease-in-out',
            duration: 1000
            }); 
    },[])

    const size = window.innerWidth;
  return (
    <div className="Explore-Container">
        <div className="Explore-Heading">
            <span>03 Guidance</span>
            <h2>Expert advice to assist with travel planning</h2>
        </div>
        <div className="Explore-Body">
            <div className="Explore-Body-1">
                {size>=1005?(<>
                <ExploreC height={250} width={400} boxHeight={250}/>
                <ExploreC height={250} width={400} boxHeight={250}/></>):(<>
                <ExploreC height={100} width={150} boxHeight={100}/>
                <ExploreC height={100} width={150} boxHeight={100}/></>)}
                <div className="viewMore">
                </div>
            </div>
            <div className="Explore-Body-2">
                {size>=1005?
                (
                <>
                <ExploreC height={300} width={350} boxHeight={300}/>
                <ExploreC height={300} width={350} boxHeight={300}/>
                <ExploreC height={300} width={350} boxHeight={300}/>
                <ExploreC height={300} width={350} boxHeight={300}/>
                <ExploreC height={300} width={350} boxHeight={300}/>
                <ExploreC height={300} width={350} boxHeight={300}/>
                </>
                ):
                (
                <>
                <ExploreC height={90} width={130} boxHeight={90}/>
                <ExploreC height={90} width={130} boxHeight={90}/>
                <ExploreC height={90} width={130} boxHeight={90}/>
                </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Explore