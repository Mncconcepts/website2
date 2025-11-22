import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/home">
          <img className='logo' src="/logo2.png" alt="Logo" />
        </Link>
      </div>

      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={handleMenuClose}><Link to="/home">HOME</Link></li>
          <li onClick={handleMenuClose}><Link to="/services">SERVICES</Link></li>
          <li onClick={handleMenuClose}><Link to="/projects">PROJECTS</Link></li>
          <li onClick={handleMenuClose}><Link to="/contact">CONTACT</Link></li>
          <li onClick={handleMenuClose}><Link to="/faq">FAQs</Link></li>
        </ul>
      </div>

      <div className="nav-connect-container">
        <Link to="/signup">
          <div className="nav-connect me-5">Join Us</div>
        </Link>
      </div>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
