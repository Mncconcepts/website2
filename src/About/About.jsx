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
          countUp(2, setExperience, 2000);
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
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div data-aos="fade-left" className="about-left">
          <img src="/assets/profile2.jpg" alt="" />
        </div>
        <div className="about-right">
          <div data-aos="fade-right" className="about-para">
            <p>
              I am a web developer and designer, based frontend engineer, with expertise in frontend frameworks like HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT JS, and TAILWIND CSS.
              A seasoned graphic designer proficient with few software like PS, AI, FIGMA, CDR. Currently expanding my skills and network in backend technologies such as DJANGO, SQL, PYTHON.
            </p>
          </div>
          <div className="about-skills">
            <div data-aos="fade-right" duration="300" className="about-skill">
              <p>HTML CSS - 75% </p><hr style={{ width: "55%" }} />
            </div>
            <div data-aos="fade-right" duration="500" className="about-skill">
              <p>BOOTSTRAP - 90%</p><hr style={{ width: "95%" }} />
            </div>
            <div data-aos="fade-right" duration="700" className="about-skill">
              <p>REACT JS - 80%</p><hr style={{ width: "55%" }} />
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
              <p>FIGMA - 90%</p><hr style={{ width: "56%" }} />
            </div>
            <div data-aos="fade-right" duration="1800" className="about-skill">
              <p>ADOBE ILLUSTRATOR - 85%</p><hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements" ref={achievementsRef}>
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
      <header className="header">
        <div className="header-content">
          <h1 data-aos="fade-down" className='mt-5'>My Skills And Expertise</h1>
          <p>Programming Languages And Softwares</p>
          <div data-aos="fade-right" className="skills">
            <span>GitHub</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>Tailwind</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Next.js</span>
            <span>Figma</span>
            <span>Adobe Illustrator</span>
          </div>
        </div>
      </header>
      <div className='project-container'>
        <div data-aos='fade-left' className='first-project'>
          <h1>Projects</h1>
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
          <video controls>
            <source src='' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <Link to='/projects'>
          <button className='contact-btn w-100' type='submit'>PROJECT-FOLIO</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
