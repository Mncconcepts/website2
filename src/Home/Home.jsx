import React from 'react';
import Hero from './Hero';
import Abouts from '../About/Abouts';
import ServicesSection from './Service';
import Reviews from '../Components/Navbar/Reviews';
import Services from '../Home/Services.jsx'
import Projects2 from '../Components/Navbar/Projects2.jsx';






const Home = () => {
  return (
    <div>
      <Hero/>
      <Abouts/>
      <Projects2/>
      <ServicesSection/>
      <Services/>
      <Reviews/>
    </div>
  );
};

export default Home;