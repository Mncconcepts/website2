import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects2 = () => {
  const projects = [
    { id: 4, title: 'Oma App', description: 'Oma crypto mining app, the feature of web 3, gaming, custome mining, entertainment. users participate on tasks and gets reward for it.', image: '/oma web2.png', Prototype: 'https://www.linkedin.com/posts/miracle-nweze-52aab330b_comingsoon-cryptomining-uiuxdesign-activity-7356634440334303232-QAgx', Design: '' },
    { id: 4, title: 'Pearlz-store', description: 'A shopify ecomerce skin care website, where you will discover the essence of vitality and health in one place', image: '/proj13.png', liveLink: 'https://pearlz-store.vercel.app', githubLink: 'https://github.com/Mncconcepts/Pearlz' },
    { id: 4, title: 'Paywith-Pi', description: 'payment web app, vast pages website with multi-dynamic-routing', image: '/do2.png', liveLink: 'https://paywith-pi.vercel.app', githubLink: 'https://github.com/Mncconcepts/Pay-with-pi' },
    { id: 1, title: 'ZenixStore', description: 'Complete e-comerce website, wide array of top products, seamless and swift shoping experience and smooth payment gateway', image: '/assets/project1.png', liveLink: 'https://zenix-shop-mall.vercel.app', githubLink: 'https://github.com/Mncconcepts/zenix-shop-mall' },


  ];
  return (
    <div className="portfolio-container">
      <section className="projects">
        <h2 className='mt-4 mb-5' data-aos="fade-right">PROJECT-FOLIO</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div data-aos="fade-up" className="project-card" key={project.id}>
              <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className='wrapped-button'>
                <span>Reactjs</span> <span>Tailwind css</span> <span>Bootstrap</span> <span>Django</span> <span>Figma</span>
                <span>JavaScript</span> <span>CSS styling</span>
              </div>
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