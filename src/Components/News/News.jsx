import React from 'react';
import './News.css';
import NewsC from './NewsCard/NewsC';
import ScrollReveal from 'scrollreveal';
import {useEffect} from 'react';


const News = () => {

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
            <h2>Expert advice, Things to be remember in Ayodhya.</h2>
        </div>
        <div className="Explore-Body">
            <div className="Explore-Body-1">
                {size>=1005?(<>
        <NewsC height={250} width={400} boxHeight={250}  imgSrc={'./Images/ThingsRemember/askHelp.jpeg'} title={'Ask For Help.'}/>
        <NewsC height={250} width={400} boxHeight={250}  imgSrc={'./Images/ImportantThings/ayodhyaPolicee.png'} title={'Police in Ayodhya'}/></>):(<>
        <NewsC height={100} width={150} boxHeight={100}  imgSrc={'./Images/ImportantThings/medical.jpg'} title={'Medical Hospitals in ayodhya.'}/>
        <NewsC height={100} width={150} boxHeight={100}  imgSrc={'./Images/ImportantThings/ayodhyaPolicee.png'} title={'Ayodhya Police Station.'}/></>)}
                <div className="viewMore">
                </div>
            </div>
            <div className="Explore-Body-2">
                {size>=1005?
                (
                <>
                <NewsC height={300} width={350} boxHeight={300} imgSrc={'./Images/ThingsRemember/askHelp.jpeg'} title={'Ask for help.'}/>
                <NewsC height={300} width={350} boxHeight={300} imgSrc={'./Images/ImportantThings/medical.jpg'} title={'Medical Hospitals in ayodhya.'}/>
                <NewsC height={300} width={350} boxHeight={300} imgSrc={'./Images/ImportantThings/aware.png'} title={'Be aware.'}/>
                <NewsC height={300} width={350} boxHeight={300} imgSrc={'./Images/ImportantThings/motals.jpg'} title={'Place where you can stay.'}/>
                <NewsC height={300} width={350} boxHeight={300} imgSrc={'./Images/ImportantThings/busService.png'} title={'Bus services in ayodhya.'}/>
                <NewsC height={300} width={350} boxHeight={300} imgSrc={'./Images/ImportantThings/taxiService.jpg'} title={'Taxi service in local areas.'}/>
                </>
                ):
                (
                <>
                <NewsC height={90} width={130} boxHeight={90}  imgSrc={'./Images/ImportantThings/busService.png'} title={'Bus services in ayodhya.'}/>
                <NewsC height={90} width={130} boxHeight={90}  imgSrc={'./Images/ImportantThings/aware.png'} title={'Be aware.'}/>
                <NewsC height={90} width={130} boxHeight={90}  imgSrc={'./Images/ThingsRemember/askHelp.jpeg'} title={'ask for help if you need.'}/>
                </>
                )}
            </div>
        </div>
    </div>
  )
}

export default News;