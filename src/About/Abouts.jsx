import React, { useState, useEffect } from 'react';
import './Abouts.css';

const About = () => {
  // State to store the values for achievements
  const [experience, setExperience] = useState(0);
  const [jobs, setJobs] = useState(0);
  const [clients, setClients] = useState(0);

  // Function to animate the counting of achievements
  const countUp = (target, setter, duration) => {
    let start = 0;
    const step = target / (duration / 15);
    const interval = setInterval(() => {
      start += step;
      setter(Math.floor(start));
      if (start >= target) {
        clearInterval(interval);
      }
    }, 50);
  };

  // useEffect hook to trigger countUp when the component mounts
  useEffect(() => {
    countUp(2, setExperience, 2000);
    countUp(100, setJobs, 2000);
    countUp(15, setClients, 2000);
  }, []);

  return (
    <div className="about mt-5">
      <div className="about-achievements">
        <div className="about-achievement slide-in-left">
          <h1>{experience}+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr className="slide-in-left" />
        <div className="about-achievement slide-in-left">
          <h1>{jobs}+</h1>
          <p>SUCCESSFUL JOBS</p>
        </div>
        <hr className="slide-in-left" />
        <div className="about-achievement slide-in-left">
          <h1>{clients}+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>

      <div className='before-hero'>
        <div className='before-hero-text'>
          <div data-aos="fade-down">
            <h1>More Than A Website</h1>
          </div>
          <p className='mb-5'>We develop and design websites, top notch
            websites, vast web application, we specialize in
            making brands stand out in every sector both in business,
            and on the E-comerce sector, i have helped over 50+ brands 
            stand out with out-standing web development and designs, I have 
            covered and completed most graphics design jobs for some explicit brands</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default About;
