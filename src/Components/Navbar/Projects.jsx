import React from 'react';
import './Projects.css';

const Project = () => {
  const projects = [
    { id: 4, title: 'Dapstore', description: 'Multiple vendor store, seamless and intuitive experience, curated to solve users need, from extensive research to userflows, wireframes and prototyping', image: '/projn1.png', Prototype: '', Design: '' },
    { id: 4, title: 'Dapstore', description: 'Multiple vendor store, seamless and intuitive experience, curated to solve users need, from extensive research to userflows, wireframes and prototyping', image: '/projn2.png', Prototype: '', Design: '' },
    { id: 4, title: 'CVMP', description: 'CVMP is an official online marketplace designed to digitize and organize the trading ecosystem of Computer Village, Ikeja home to over 10,000 ICT vendors and millions in annual transactions.', image: '/Storeapp2.png', Prototype: '', Design: '' },
    { id: 4, title: 'StoreApp', description: 'A comprehensive e-commerce and community platform created to improve safety, transparency, and growth within the Computer Village trading ecosystem.', image: '/storeapp11.png', Prototype: '', Design: '' },
    { id: 4, title: 'Oma App', description: 'Oma crypto mining app, the feature of web 3, gaming, custome mining, entertainment', image: '/omaweb2.png', livelink:'https://www.linkedin.com/posts/miracle-nweze-52aab330b_comingsoon-cryptomining-uiuxdesign-activity-7356634440334303232-QAgx', githublink:'https://www.linkedin.com/posts/miracle-nweze-52aab330b_comingsoon-cryptomining-uiuxdesign-activity-7356634440334303232-QAgx' },
    { id: 4, title: 'Oma App', description: 'Multi-utility-token, custom mining, gaming and entertainment.', image: '/do1.png', livelink:'https://www.linkedin.com/posts/mhttps://www.linkedin.com/posts/mhttps://www.linkedin.com/posts/miracle-nweze-52aab330b_web3crypto-cryptomining-uiuxdesign-activity-7358262191021588481-4Qxl', githubLink: 'https://www.facebook.com/share/v/19GPLLFTHx/' },
    { id: 4, title: 'Paywith-Pi Website', description: 'payment web app, vast pages website with multi-dynamic-routing', image: '/do2.png', liveLink: 'https://paywith-pi.vercel.app', githubLink: 'https://github.com/Mncconcepts/Pay-with-pi' },
    { id: 4, title: 'Pearlz-store Website', description: 'A shopify ecomerce skin care website, where you will discover the essence of vitality and health in one place', image: '/proj13.png', liveLink: 'https://pearlz-store.vercel.app', githubLink: 'https://github.com/Mncconcepts/Pearlz' },
    { id: 4, title: 'Edu-Hub Website', description: 'Eductional website, addmission, news, updates, E-book shp for students', image: '/proj12.jpg', liveLink: 'https://edu-hub-ruddy.vercel.app', githubLink: 'https://github.com/Mncconcepts/Edu-hub' },
    { id: 1, title: 'ZenixStore Website', description: 'Complete e-comerce website, wide array of top products, seamless and swift shoping experience and smooth payment gateway', image: '/assets/project1.png', liveLink: 'https://zenix-shop-mall.vercel.app', githubLink: 'https://github.com/Mncconcepts/zenix-shop-mall' },
    { id: 2, title: 'Wavertm Blog Website', description: 'responsive blog web application.', image: '/assets/project3.png', liveLink: 'https://waverblog.vercel.app', githubLink: 'https://github.com/Mncconcepts/waverblog' },
    { id: 3, title: 'Chokma Market Place', description: 'Complete Payment web application.', image: '/assets/project4.png', liveLink: '', githubLink: 'https://www.linkedin.com/posts/miracle-nweze-52aab330b_simplicity-and-clarity-website-design-activity-7264215608576167936-Be55' },
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
          <h1 data-aos="fade-down">Recent Projects</h1>
          <div data-aos="fade-right" className="skills">
            <span>GitHub</span>
             <span>React.js</span>
            <span>Next.js</span>
            <span>Tailwind</span>
            <span>JavaScript</span>
            <span>Figma</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>Adobe Illustrator</span>
          </div>
        </div>
      </header>

      <section className="projects">
        <h2 className='mt-4 mb-5' data-aos="fade-right">PROJECT-FOLIO</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div data-aos="fade-up" className="project-card" key={project.id}>
              <img src={project.image} alt={`${project.title} screenshot`} className="project-image" loading='lazy' />
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

      <footer className="footers">
        <h2>Contact Me</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/miracle-nweze-52aab330b">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/mncconcepts">Instagram</a></li>
          <li><a href="https://github.com/Mncconcepts">GitHub</a></li>
          <li><a href="https://www.facebook.com/share/1B1QBYC6fm/">facebook</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Project;