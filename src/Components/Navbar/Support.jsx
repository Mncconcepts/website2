import React from 'react';
import { Link } from 'react-router-dom';
import './Support.css';
import Footer from './Footer';

const Support = () => {
  return (
    <div className="helps-section">
      <div data-aos="fade-left" className="helps-header">
        <h3 className='mt-5'>Need help?</h3>
        <small>We are always here for you. Reach out to us anytime, we are eager and ready to hear from you</small>
      </div>

      <div className="helps-cards">
        <div data-aos="fade-up" className="helps-card">
          <div className="helps-image">
            <img src="/profile3.jpg" alt="Customer Support" />
          </div>
          <div className="helps-content">
            <h4>Customer Support</h4>
            <p>
              Our friendly support team is available 24/7 to assist you with any queries
              Feel free to contact us via chat email or phone
            </p>
            <Link to="/contact">
              <button>Contact Support</button>
            </Link>
          </div>
        </div>

        {/* Ticket Support */}
        <div data-aos="fade-up" className="helps-card">
          <div className="helps-content">
            <h4>Ticket Support</h4>
            <p>
              Submit a support ticket for detailed assistance on complex issues
              Our team ensures timely resolution of all your concerns
            </p>
            <button className='form-button'>Submit a Ticket</button>
          </div>
          <div className="helps-image">
            <img src="/profile4.png" alt="Ticket Support" />
          </div>
        </div>

        {/* FAQ */}
        <div data-aos="fade-up" className="helps-card">
          <div className="helps-image">
            <img src="/profile5.png" alt="FAQ" />
          </div>
          <div className="helps-content">
            <h4>FAQ</h4>
            <p>
              Browse our Frequently Asked Questions for quick answers to common queries
              Find solutions without waiting
            </p>
            <Link to="/faq">
              <button>Explore FAQ</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
