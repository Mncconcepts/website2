import React, { useState, useRef, useEffect } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  const [experience, setExperience] = useState(0);
  const [jobs, setJobs] = useState(0);
  const [clients, setClients] = useState(0);
  const achievementsRef = useRef(null);
  const hasAnimated = useRef(false);

  const countUp = (target, setter, duration) => {
    let start = 0;
    const step = target / (duration / 15);
    const interval = setInterval(() => {
      start += step;
      setter(Math.floor(start));
      if (start >= target) {
        setter(target);
        clearInterval(interval);
      }
    }, 15);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true; // prevent rerun
          countUp(3, setExperience, 2000);
          countUp(100, setJobs, 2000);
          countUp(15, setClients, 2000);
        }
      },
      { threshold: 0.9 }
    );

    const section = achievementsRef.current;
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="about">
      <div data-aos="fade-down" className="about-title">
        <h1>About Us</h1>
      </div>
      <div className="about-section">
        <div className="about-right">
          <div data-aos="fade-right" className="about-para">
            <p>
              At our core, we specialize in developing and designing visually stunning, highly functional websites and expansive web applications tailored to meet the needs of businesses across all sectors. Our mission is to ensure that every brand we work with stands out in a competitive digital landscape. Whether it's a startup looking to establish an online presence or an established company aiming to elevate its digital branding, we bring ideas to life with precision, creativity, and technical excellence. <br /><br />
              Over the years, we've had the privilege of helping more than 50 remarkable brands transform their digital identity through exceptional web development and cutting-edge design. Our team doesn't just create websites, we craft immersive online experiences that engage users, build trust, and drive conversions. <br /><br />
              In addition to web services, we've also successfully completed a wide array of high-quality graphic design projects for top-tier brands, enhancing their visual storytelling and marketing appeal. From user-friendly e-commerce platforms to interactive business websites, our work continues to set the standard for innovation, quality, and results in the ever-evolving world of web and graphic design.
            </p>
          </div>
          <div className="about-skills mb-5">
            <h2 className='tools'>Tools We Use For Development And Design</h2>
            <div data-aos="fade-right" duration="300" className="about-skill">
              <p>HTML CSS - 75% </p><hr style={{ width: "55%" }} />
            </div>
            <div data-aos="fade-right" duration="500" className="about-skill">
              <p>BOOTSTRAP - 90%</p><hr style={{ width: "95%" }} />
            </div>
            <div data-aos="fade-right" duration="700" className="about-skill">
              <p>REACT JS - 90%</p><hr style={{ width: "75%" }} />
            </div>
            <div data-aos="fade-right" duration="1000" className="about-skill">
              <p>JAVASCRIPT - 80%</p><hr style={{ width: "85%" }} />
            </div>
            <div data-aos="fade-right" duration="1200" className="about-skill">
              <p>REACT NATIVE - 65%</p><hr style={{ width: "30%" }} />
            </div>
            <div data-aos="fade-right" duration="1400" className="about-skill">
              <p>TAILWIND CSS - 70%</p><hr style={{ width: "50%" }} />
            </div>
            <div data-aos="fade-right" duration="1600" className="about-skill">
              <p>FIGMA - 90%</p><hr style={{ width: "75%" }} />
            </div>
            <div data-aos="fade-right" duration="1800" className="about-skill">
              <p>ADOBE ILLUSTRATOR - 85%</p><hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements mt-5" ref={achievementsRef}>
        <div className="about-achievement">
          <h1>{experience}+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>{jobs}+</h1>
          <p>SUCCESSFUL JOBS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>{clients}+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>

      <div className='project-container'>
        <div className="showcase-wrapper">
          <h1>Projects ShowCase</h1>
        </div>
        <div data-aos='fade-left' className='first-project'>
          <div className='scrolling-projects-wrapper'>
            <div className='scrolling-projects'>
              <div className='first-project-card'>
                <img src='/assets/project1.png' alt='Project 1' />
              </div>
              <div className='first-project-card'>
                <img src='/assets/project2.png' alt='Project 2' />
              </div>
              <div className='first-project-card'>
                <img src='/assets/project3.png' alt='Project 3' />
              </div>
              <div className='first-project-card'>
                <img src='/assets/project4.png' alt='Project 4' />
              </div>
              <div className='first-project-card'>
                <img src='/assets/project1.png' alt='Project 1' />
              </div>
              <div className='first-project-card'>
                <img src='/assets/project2.png' alt='Project 2' />
              </div>
              <div className='first-project-card'>
                <img src='/assets/project3.png' alt='Project 3' />
              </div>
              <div className='first-project-card'>
                <img src='/assets/project4.png' alt='Project 4' />
              </div>
            </div>
          </div>
        </div>
        <div data-aos='fade-right' className='video-section'>
        </div>
        <Link to='/projects'>
          <button className='contact-btn w-100' type='submit'>View All Recent Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
