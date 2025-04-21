import React from 'react';
import './Projects.css';

const Project = () => {
  const projects = [
    { id: 1, title: 'ZenixStore', description: 'Complete e-comerce website', image: '/assets/project1.png', liveLink: 'https://zenix-shop-mall.vercel.app', githubLink: 'https://github.com/Mncconcepts/zenix-shop-mall' },
    { id: 2, title: 'Wavertm Blog', description: 'responsive blog web application.', image: '/assets/project3.png', liveLink: 'https://waverblog.vercel.app', githubLink: 'https://github.com/Mncconcepts/waverblog' },
    { id: 3, title: 'Chokma Market Place', description: 'Complete Payment web application.', image: '/assets/project4.png', liveLink: '', githubLink: 'https://www.linkedin.com/posts/miracle-nweze-52aab330b_simplicity-and-clarity-website-design-activity-7264215608576167936-Be55' },
    { id: 4, title: 'Paywith-Pi', description: 'payment web app with multi dynamic website and vast pages', image: '/assets/project11.png', liveLink: 'https://paywith-pi.vercel.app', githubLink: 'https://github.com/Mncconcepts/Pay-with-pi' },
    { id: 4, title: 'Pearlz-store', description: 'A shopify ecomerce skin care website', image: '/second1.png', liveLink: 'https://pearlz-store.vercel.app', githubLink: 'https://github.com/Mncconcepts/Pearlz' },
    { id: 4, title: 'Edu-Hub', description: 'multi dynamic website and vast pages', image: '/help3.jpg', liveLink: '', githubLink: '' },
    { id: 5, title: 'Emy Baking And Pasteries', description: 'resturant website.', image: '/assets/project6.png', liveLink: '', githubLink: 'https://www.linkedin.com/posts/miracle-nweze-52aab330b_on-it-again-one-of-the-website-i-created-activity-7246301444914442240-K-aK?' },
    { id: 6, title: 'Emy App Design', description: 'resturant web app design.', image: '/assets/project5.png', liveLink: '', githubLink: 'https://www.linkedin.com/posts/miracle-nweze-52aab330b_emy-app-is-a-few-steps-away-design-part-activity-7256985993646325761-k2ob' },
    { id: 6, title: 'Reina Events Logo', description: 'logo design for reinas event.', image: '/assets/project8.png', liveLink: '', githubLink: '' },
    { id: 6, title: 'Emy Logo Design', description: 'logo design for emy baking and pasteries.', image: '/assets/project7.png', liveLink: '', githubLink: 'https://www.linkedin.com/posts/miracle-nweze-52aab330b_recent-logo-design-for-emy-baking-and-pasteries-activity-7231636048961835008-4MV3' },
    { id: 6, title: 'Zenix Logo Design', description: 'Zenix store official logo', image: '/assets/project10.png', liveLink: '', githubLink: 'https://www.linkedin.com/posts/miracle-nweze-52aab330b_logo-design-for-zenix-store-it-was-really-activity-7231638038144036864-b6EU' },
    { id: 3, title: 'Chokma Market Place', description: 'Complete Payment application.', image: '/assets/project4.png', liveLink: '', githubLink: 'https://www.linkedin.com/posts/miracle-nweze-52aab330b_simplicity-and-clarity-website-design-activity-7264215608576167936-Be55' },
    { id: 6, title: 'Zenix Logo Design', description: 'Zenix store official logo', image: '/assets/project10.png', liveLink: '#', githubLink: 'https://www.linkedin.com/posts/miracle-nweze-52aab330b_logo-design-for-zenix-store-it-was-really-activity-7231638038144036864-b6EU' },
    { id: 2, title: 'Wavertm Blog', description: 'responsive blog web application.', image: '/assets/project3.png', liveLink: 'https://waverblog.vercel.app', githubLink: 'https://github.com/Mncconcepts/waverblog' },
   
  ];
  return (
    <div className="portfolio-container">
      <header className="header">
        <div className="header-content">
          <h1 data-aos="fade-down" className='mt-5'>My Skills And Expertise</h1>
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

      <section className="projects">
        <h2 className='mt-4 mb-5' data-aos="fade-right">PROJECT-FOLIO</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div data-aos="zoom-in" className="project-card" key={project.id}>
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

      <footer className="footers">
        <h2>Contact Me</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/miracle-nweze-52aab330b">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/mncconcepts">Instagram</a></li>
          <li><a href="https://github.com/Mncconcepts">GitHub</a></li>
          <li><a href="clintonnweze111@gmail.com">E-mail</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Project;