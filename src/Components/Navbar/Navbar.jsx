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
          <img src="/logo2.png" alt="Logo" />
        </Link>
      </div>
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={handleMenuClose} key="home">
            <Link to="/home">Home</Link>
          </li>
          <li onClick={handleMenuClose} key="about">
            <Link to="/about">About</Link>
          </li>
          <li onClick={handleMenuClose} key="services">
            <Link to="/services">Services</Link>
          </li>
          <li onClick={handleMenuClose} key="projects">
            <Link to="/projects">Projects</Link>
          </li>
          <li onClick={handleMenuClose} key="contact">
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={handleMenuClose} key="faq">
            <Link to="/faq">Faq</Link>
          </li>
          <li onClick={handleMenuClose} key="LogOut">
            <Link to="/logout">LogOut</Link>
          </li>
        </ul>
      </div>

      <div className="nav-connect-container">
        <Link to="/signup">
          <div className="nav-connect">Join Us</div>
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
