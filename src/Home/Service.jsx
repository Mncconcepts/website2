import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3Alt,
    faBootstrap,
    faJs,
    faReact,
    faFigma,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCogs, faPaintBrush, faLink } from "@fortawesome/free-solid-svg-icons";
import "./Service.css";

const services = [
    {
        title: "Github",
        description: "manage, track, collaborate on code",
        icon: faGithub,
    },
     {
        title: "ReactJS Development",
        description: "Dynamic Frontend Solutions",
        icon: faReact,
    },
    {
        title: "Tailwind CSS",
        description: "Utility-First Styling Framework",
        icon: faCogs,
    },
    {
        title: "HTML5 Development",
        description: "Structuring the Web",
        icon: faHtml5,
    },
    {
        title: "CSS3 Styling",
        description: "Designing Beautiful Interfaces",
        icon: faCss3Alt,
    },
    {
        title: "Bootstrap Framework",
        description: "Building Responsive Websites",
        icon: faBootstrap,
    },
    {
        title: "JavaScript Programming",
        description: "Bringing Interactivity to Life",
        icon: faJs,
    },
   
    {
        title: "React Native",
        description: "Cross-Platform Mobile Apps",
        icon: faReact,
    },
   
    {
        title: "Adobe Illustrator",
        description: "Creating Stunning Vector Graphics",
        icon: faPaintBrush,
    },
    
    


];

const ServicesSection = () => {
    return (
        <section className="services-section mb-5">
            <div data-aos="fade-down" className="">
                <h1 className="mb-5 mt-5"><span>Framework And Design Tools</span></h1>
            </div>
            <div className="services-container">
                {services.map((service, index) => (
                    <div data-aos="fade-up" className="service-card" key={index}>
                        <div className="icon">
                            <span> <FontAwesomeIcon icon={service.icon} size="2x" /></span>
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
