import React from 'react';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Deals from './components/Deals';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Navbar/>
      <Hero/>
      <Activities/>
      <Deals/>
      <Gallery/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
