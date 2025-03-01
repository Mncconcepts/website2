import React from 'react';
import Hero from './Hero';
import About from '../About/Abouts';
import ServicesSection from './Service';
import Reviews from '../Components/Navbar/Reviews';






const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <ServicesSection/>
      <Reviews/>
    </div>
  );
};

export default Home;