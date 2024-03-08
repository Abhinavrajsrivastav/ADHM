import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Intro from './Components/IntroductionBox/Intro';
import Essential from './Components/EssentialGuide/Essential';
import Expert from "./Components/ExpertAdvice/Expert";
import PlaceDesc from './Components/PlaceDesc/PlaceDesc';
import Videos from './Components/Videos/Videos';
import Fotter from './Components/Fotter/Fotter';
import BestPlaces from './Components/PlaceDesc/BestPlacePage/bestPlacePage';
import ExpertAdvicePage from './Components/PlaceDesc/ExpertAdvicePage/ExpertAdvicePage';
// import ExpertAdvicePage from './Components/ExpertAdvice/ExpertAdvicePage/ExpertAdvicePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Intro />
            <Essential />
            <Essential />
            <Essential />
            <PlaceDesc />
            <Expert />
            <Videos />
            <Fotter />
          </>
        } />

        <Route path="/SomePlaces" element={
          <>
            <Navbar />
            <Intro />
            <ExpertAdvicePage />
            <Fotter />
          </>
        } />

        <Route path="/ExpertAdvice" element={
          <>
            <Navbar />
            <Intro />
            <ExpertAdvicePage />
            <Fotter />
          </>
        } />

      </Routes>
    </Router>
  );
};

export default App;
