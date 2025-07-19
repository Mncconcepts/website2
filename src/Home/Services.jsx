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
            title: "Web Development",
            description: "Building high-performance, scalable websites to bring your ideas to life on the internet.",
            icon: faCode,
        },
        {
            title: "UI/UX Design",
            description: "Designing immersive experiences that merge functionality with elegance for maximum user satisfaction.",
            icon: faPencilRuler,
        },
        {
            title: "Website Design",
            description:
                "Crafting visually stunning, user-friendly designs that captivate and enhance user experiences.",
            icon: faGlobe,
        },
        {
            title: "App Design",
            description: "Creating seamless, intuitive app interfaces that engage users and drive meaningful interactions.",
            icon: faMobileAlt,
        },
        {
            title: "Graphic Design",
            description: "Transforming ideas into compelling visuals that tell your story and inspire your audience.",
            icon: faPaintBrush,
        },
        {
            title: "Brand Identity Design",
            description: "Crafting cohesive visual identities that reflect your values, connect with your audience, and leave a lasting impression.",
            icon: faMobileAlt,
        },
        {
            title: "Logo Design",
            description: "Transforming ideas into compelling visuals that tell your story and inspire your audience.",
            icon: faPaintBrush,
        },
        {
            title: "Web Management",
            description: "Building high-performance, scalable websites to bring your ideas to life on the internet.",
            icon: faCode,
        },
    ];

    return (
        <section className="services-section">
            <h2 data-aos="fade-right" className="services-title mt-5"><span>Our Services</span></h2>
            <p data-aos="fade-down" className="services-intro">
                I am a skilled and passionate web developer and designer with experience in creating
                visually appealing and user-friendly websites. I have a strong
                understanding of design and a keen eye for detail. I am proficient in
                Reactjs, JavaScript, Tailwind css, HTML, CSS, Bootstrap, React Native as well as design software such as Adobe
                Photoshop, Illustrator and Figma.
            </p>
            <div className="services-container">
                {services.map((service, index) => (
                    <div data-aos="zoom-in" key={index} className="service-card">
                        <div className="service-icon">
                            <FontAwesomeIcon icon={service.icon} />
                        </div>
                        <div className="service-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="quest">
                <div className="quest-text">
                    <h1>Need A Website?</h1>
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
