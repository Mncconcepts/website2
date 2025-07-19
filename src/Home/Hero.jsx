import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';
import {
    FaReact,
    FaJs,
    FaBootstrap,
    FaHtml5,
    FaCss3Alt,
    FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiVite, SiFigma, SiAdobeillustrator } from 'react-icons/si';

const Hero = () => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/My cv docs main.pdf';
        link.download = 'Mncconcepts_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 5000);
    };

    return (
        <section className="hero">
            <div data-aos="fade-down" className="hero-text ms-2">
                <h1>
                    <span>Welcome To <br /> Mncconcepts. <br /></span>
                </h1>
                <h3 className='ms-1'><span>Web Developer | UIUX Designer </span></h3>
                <div className="hero-action">
                    <button onClick={() => handleNavigation('/contact')} className="ms-2 clickable hero-connect">
                        Send Your Messages
                    </button>
                    <button onClick={handleResumeDownload} className="ms-2 hero-resume">
                        Download Resume
                    </button>
                </div>
            </div>

            <div data-aos="fade-up" className="hero-image-wrapper">
                <div className="glow-circles"></div> {/* Glowing animated circles */}
                <div className="hero-image">
                    <img src="/assets/profile3.jpg" alt="Your Brand" />
                    <div className="tech-icons">
                        <FaReact className="icon react" />
                        <SiVite className="icon vite" />
                        <FaJs className="icon js" />
                        <FaBootstrap className="icon bootstrap" />
                        <FaHtml5 className="icon html" />
                        <FaCss3Alt className="icon css" />
                        <SiTailwindcss className="icon tailwind" />
                        <SiNextdotjs className="icon nextjs" />
                        <SiFigma className="icon figma" />
                        <SiAdobeillustrator className="icon illustrator" />
                        <FaGithub className="icon github" />
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="popup">
                    <p>Download complete</p>
                </div>
            )}

            <div className='next-button'>
                <div className='next-button'>
                    <Link to="/about">
                        <button className='btn btn-outline-light' type='submit'>Explore</button>
                    </Link>
                </div>
            </div>

        </section>

    );
};

export default Hero;
