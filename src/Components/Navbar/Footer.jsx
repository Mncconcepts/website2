import React, { useState } from 'react';
import './Footer.css';
import { useForm } from '@formspree/react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [state, handleFormSubmit] = useForm("myzkqqar");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="modern-footer">
      <div className="footer-content">
        {/* Left - Branding */}
        <div className="footer-brand">
          <h2>MNCCONCEPTS</h2>
          <p>Web Developer & Designer</p>
          <p className="footer-desc">
            We bring digital ideas to life. Let's build experiences together!
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com/profile.php" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://x.com/Mncconcepts2" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com/mncconcepts" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com/in/miracle-nweze-52aab330b" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Middle - Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>

        {/* Right - Newsletter */}
        <div className="footer-newsletter">
          <h4>Subscribe to Newsletter</h4>
          <p>Get updates on new designs, tutorials, and offers.</p>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {showPopup && (
            <div className="footer-popup">
              <div className="popup-card">
                <span className="checkmark">&#10003;</span>
                <p>Subscription Successful!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Mncconcepts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
