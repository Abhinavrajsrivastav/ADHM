import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar/Navbar';
import Intro from './Components/IntroductionBox/Intro';
import Essential from './Components/EssentialGuide/Essential';
import Explore from './Components/Explore/Explore';


const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Essential />
      <Essential />
      <Essential />
      <Explore />
    </>
  )
}

export default App;