import React from 'react';
import Hero from './Hero';
import About from '../About/Abouts';
import ServicesSection from './Service';
import Reviews from '../Components/Navbar/Reviews';
import Services from '../Home/Services.jsx'
import Projects2 from '../Components/Navbar/Projects2.jsx';






const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects2/>
      <ServicesSection/>
      <Services/>
      <Reviews/>
    </div>
  );
};

export default Home;