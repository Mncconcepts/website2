import React, { useEffect, useRef } from "react";
import "./Reviews.css";
import { Link } from "react-router-dom";

const reviews = [
  { id: 1, name: "Hillary", role: "Business Owner", text: "Amazing service! Highly recommended. Great attention to detail and seamless delivery process.", image: "/user1.png", rating: 5 },
  { id: 2, name: "Jane Smith", role: "Founder - JS Tech", text: "Professional and very responsive. They understood our brand needs perfectly.", image: "/user1.png", rating: 4 },
  { id: 3, name: "Alice Johnson", role: "Entrepreneur", text: "Great experience, MNCconcepts delivers beyond expectations.", image: "/user1.png", rating: 5 },
  { id: 4, name: "Bob Brown", role: "Creative Director", text: "Exceptional quality and timely delivery. I will work with them again.", image: "/user1.png", rating: 4 },
   { id: 1, name: "Hillary", role: "Business Owner", text: "Amazing service! Highly recommended. Great attention to detail and seamless delivery process.", image: "/user1.png", rating: 5 }
];

const Reviews = () => {

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let interval = setInterval(() => {
      if (slider) slider.scrollRight += 310;
      if (slider.scrollRight + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollRight = 0;
      }
    }, 2600);

    slider.addEventListener("mouseenter", () => clearInterval(interval));
    slider.addEventListener("mouseleave", () => {
      interval = setInterval(() => {
        if (slider) slider.scrollRight += 310;
        if (slider.scrollRight + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollRight = 0;
        }
      }, 2600);
    });
  }, []);

  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h1>What Our Clients Say</h1>
      </div>

      <div className="reviews-slider" ref={sliderRef}>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="top-quote">❝</div>
            <img src={review.image} alt={review.name} className="reviewer-image" />
            <p className="review-text">{review.text}</p>
            <div className="reviewer-info">
              <h4 className="reviewer-name">{review.name}</h4>
              <span className="reviewer-role">{review.role}</span>
            </div>
            <div className="star-rating">
              {"⭐".repeat(review.rating)}
            </div>
          </div>
        ))}
      </div>

      <div className="quest">
        <h1>Ready to Elevate Your Brand?</h1>
        <p>Reach out today if your business is growing, your website should too.</p>
        <div className="reach-button">
          <Link to="/message">
            <button className="contact-btn">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
