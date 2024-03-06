import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Intro from './Components/IntroductionBox/Intro';
import Essential from './Components/EssentialGuide/Essential';
import News from './Components/News/News';
import CityDesc from './Components/CityDesc/CityDesc';
import Videos from './Components/Videos/Videos';
import Fotter from './Components/Fotter/Fotter';
import BestPlaces from './Components/CityDesc/BestPlacePage/bestPlacePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Intro />
            <Essential />
            <CityDesc />
            <News />
            <Videos />
            <Fotter />
          </>
        } />

        <Route path="/SomePlaces" element={
          <>
            <Navbar />
            <BestPlaces />
            <Fotter />
          </>
        } />

        <Route path="/ExpertAdvice" element={
          <>
            <Navbar />
            <Fotter />
          </>
        } />

      </Routes>
    </Router>
  );
};

export default App;
