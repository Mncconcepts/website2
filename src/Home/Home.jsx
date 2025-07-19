import React from 'react';
import Hero from './Hero';
import About from '../About/Abouts';
import ServicesSection from './Service';
import Reviews from '../Components/Navbar/Reviews';
import Services from '../Home/Services.jsx'






const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <ServicesSection/>
      <Services/>
      <Reviews/>
    </div>
  );
};

export default Home;