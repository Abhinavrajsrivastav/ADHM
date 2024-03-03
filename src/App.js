import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar/Navbar';
import Intro from './Components/IntroductionBox/Intro';
import Essential from './Components/EssentialGuide/Essential';
import News from './Components/News/News';
import CityDesc from './Components/CityDesc/CityDesc';
import Videos from './Components/Videos/Videos';
import Fotter from './Components/Fotter/Fotter';

const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Essential />
      {/* <Essential /> */}
      {/* <Essential /> */}
      <CityDesc />
      <News />
      <Videos />
      <Fotter />
    </>
  )
}

export default App;