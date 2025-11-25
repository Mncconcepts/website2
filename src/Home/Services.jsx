import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faPencilRuler,
    faGlobe,
    faMobileAlt,
    faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Services = () => {
    const services = [
       
        {
            title: "Website Design",
            description:
                "Crafting visually stunning, user-friendly designs that captivate and enhance user experiences.",
            icon: faGlobe,
        },
       
        {
            title: "Logo Design",
            description: "Transforming ideas into compelling visuals that tell your story and inspire your audience.",
            icon: faPaintBrush,
        },

         {
            title: "Web Development",
            description: "Building high-performance, scalable websites to bring your ideas to life on the internet.",
            icon: faCode,
        },

         {
            title: "Product (UI/UX Design)",
            description: "Designing immersive experiences that merge functionality with elegance for maximum user satisfaction.",
            icon: faPencilRuler,
        },
       
    ];

    return (
        <section className="services-section">
            <h2 data-aos="fade-up" className="services-title mt-5 mb-3"><span>Our Services</span></h2>
            <p data-aos="fade-up" className="services-intro">
                <p className="section-subtitle">
                    We are a skilled and passionate team of web developers and designers with 
                    expertise in building visually appealing, user-friendly, and responsive websites. 
                    We specialize in React.js, JavaScript, Tailwind CSS, HTML, CSS, Bootstrap, and React 
                    Native to deliver fast, interactive digital experiences. We also offer UI/UX design using 
                    industry-standard tools like Figma, Adobe Illustrator, ensuring that every 
                    project is not only functional but beautifully crafted.
                </p>

            </p>
            <div className="services-container">
                {services.map((service, index) => (
                    <div data-aos="fade-up" key={index} className="services-card">
                        <div className="services-iconn">
                            <FontAwesomeIcon icon={service.icon} />
                        </div>
                        <div className="services-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="quest">
                <div className="quest-text">
                    <h1>Need Any Of Our Services?</h1>
                    <p>Reach us out with the button below</p>
                    <div className="reach-button">
                        <Link to="/message">
                            <button className="contact-btn">Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
