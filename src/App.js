import React from 'react';
import './scss/main.scss';
import HomeHeads from "./components/LandingPage/HomeHeads";
import MainSection from "./components/LandingPage/MainSection";
import Footer from "./components/LandingPage/Footer";

function App() {
  return (
    <div className="App">
      <HomeHeads/>
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;
