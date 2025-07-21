import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects2 = () => {
  const projects = [
    { id: 4, title: 'Paywith-Pi', description: 'payment web app, multi dynamic routing and vast pages', image: '/assets/project11.png', liveLink: 'https://paywith-pi.vercel.app', githubLink: 'https://github.com/Mncconcepts/Pay-with-pi' },
    { id: 4, title: 'Pearlz-store', description: 'A shopify ecomerce skin care website', image: '/proj13.png', liveLink: 'https://pearlz-store.vercel.app', githubLink: 'https://github.com/Mncconcepts/Pearlz' },
    { id: 4, title: 'Edu-Hub', description: 'Eductional website, multi routing and vast pages', image: '/proj12.jpg', liveLink: 'https://edu-hub-ruddy.vercel.app', githubLink: 'https://github.com/Mncconcepts/Edu-hub' },
    { id: 1, title: 'ZenixStore', description: 'Complete e-comerce website', image: '/assets/project1.png', liveLink: 'https://zenix-shop-mall.vercel.app', githubLink: 'https://github.com/Mncconcepts/zenix-shop-mall' },

   
  ];
  return (
    <div className="portfolio-container">
      <header className="header">
        <div className="header-contentt">
          <h1 data-aos="fade-down">Recent Projects</h1>
        </div>
      </header>

      <section className="projects">
        <div className="project-grid">
          {projects.map((project) => (
            <div data-aos="fade-up" className="project-card" key={project.id}>
              <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-overlay">
                <button onClick={() => window.open(project.liveLink)}>View Live</button>
                <button onClick={() => window.open(project.githubLink)}>Design|Repository</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="">
        <Link to="/projects">
       <button type='submit' className='contactt-btn'>See all Projects</button>
       </Link>
      </footer>
    </div>
  );
};

export default Projects2;