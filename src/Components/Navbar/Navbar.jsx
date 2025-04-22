import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when an item is clicked
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
          <li onClick={handleMenuClose} key="home">
            <Link to="/home">HOME</Link>
          </li>
          <li onClick={handleMenuClose} key="about">
            <Link to="/about">ABOUT</Link>
          </li>
          <li onClick={handleMenuClose} key="services">
            <Link to="/services">SERVICES</Link>
          </li>
          <li onClick={handleMenuClose} key="projects">
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li onClick={handleMenuClose} key="contact">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li onClick={handleMenuClose} key="faq">
            <Link to="/faq">FAQ</Link>
          </li>
          <button
            className="custom-logout-btn block lg:hidden"
            onClick={handleMenuClose}
            key="LogOut"
          >
            <Link to="/logout">Logout</Link>
          </button>
        </ul>
      </div>

      <div className="nav-connect-container">
        <Link to="/signup">
          <div className="nav-connect me-5">Join Us</div>
        </Link>
      </div>

      {/* Hamburger Menu */}
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
