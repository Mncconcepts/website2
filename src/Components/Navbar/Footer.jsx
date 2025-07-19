import React, { useState } from 'react';
import './Footer.css';
import { useForm, ValidationError } from '@formspree/react';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleFormSubmit(e); 

    if (state.succeeded) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
    }
  };

  const [state, handleFormSubmit] = useForm("myzkqqar");
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Icons */}
        <div className="footerr-section">
          <h2 className="footer-logo">MNCCONCEPTS</h2>
          <h3>Web Developer And Designer</h3>
          <p>Bringing ideas to reality, Providing top-notch web development and design services.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://x.com/Mncconcepts2" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/mncconcepts" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/miracle-nweze-52aab330b" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {showPopup && (
          <div className="popups">
            <div className="popups-card">
              <div className="successs-icon">
                <span>&#10003;</span>
              </div>
              <p>Subscription Successful!</p>
              <p>You will receive news from us daily concerning design and development</p>
            </div>
          </div>
        )}

        {/* Newsletter */}
        <div className="footer-section me-3">
          <h3>Newsletter</h3>
          <p>Stay updated with our latest news and offers.</p>
          <form className="newsletter-form">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
            <button className='contact-btn' type="button" onClick={handleSubscribe}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Mncconcepts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
