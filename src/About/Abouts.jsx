import React, { useState, useEffect } from 'react';
import './Abouts.css';
import { useForm, ValidationError } from '@formspree/react';

const About = () => {
  const [experience, setExperience] = useState(0);
  const [jobs, setJobs] = useState(0);
  const [clients, setClients] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [state, handleSubmit] = useForm("xbldnryn");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });

  const countUp = (target, setter, duration) => {
    let start = 0;
    const step = target / (duration / 15);
    const interval = setInterval(() => {
      start += step;
      setter(Math.floor(start));
      if (start >= target) clearInterval(interval);
    }, 50);
  };

  useEffect(() => {
    countUp(3, setExperience, 2000);
    countUp(100, setJobs, 2000);
    countUp(15, setClients, 2000);
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setShowAlert(true);
      setShowForm(false);
      setFormData({ name: '', email: '', date: '', time: '', message: '' });

      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [state.succeeded]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="about mt-5">
      <div className="about-achievements">
        <div className="about-achievement slide-in-left">
          <h1>{experience}+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr className="slide-in-left" />
        <div className="about-achievement slide-in-left">
          <h1>{jobs}+</h1>
          <p>SUCCESSFUL JOBS</p>
        </div>
        <hr className="slide-in-left" />
        <div className="about-achievement slide-in-left">
          <h1>{clients}+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>

      <div className='before-hero'>
        <div className='before-hero-text'>
          <div data-aos="fade-down">
            <h1>More Than Just Websites</h1>
          </div>
          <p className='mb-5'>
            At our core, we specialize in developing and designing visually stunning, highly functional websites and expansive web applications tailored to meet the needs of businesses across all sectors. Our mission is to ensure that every brand we work with stands out in a competitive digital landscape. Whether it's a startup looking to establish an online presence or an established company aiming to elevate its digital branding, we bring ideas to life with precision, creativity, and technical excellence. <br /><br />
            Over the years, we've had the privilege of helping more than 50 remarkable brands transform their digital identity through exceptional web development and cutting-edge design. Our team doesn't just create websites, we craft immersive online experiences that engage users, build trust, and drive conversions. <br /><br />
            In addition to web services, we've also successfully completed a wide array of high-quality graphic design projects for top-tier brands, enhancing their visual storytelling and marketing appeal. From user-friendly e-commerce platforms to interactive business websites, our work continues to set the standard for innovation, quality, and results in the ever-evolving world of web and graphic design.
          </p>

          <button className='contact-btn' onClick={() => setShowForm(true)}>
            Book A Call
          </button>
        </div>
      </div>

      {/* Call Booking Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Book a Call via Google Meet</h2>
            <form onSubmit={handleSubmit} className="call-form">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Brief Message or Query"
                value={formData.message}
                onChange={handleInputChange}
              />
              <p className="note">A Google Meet invite will be sent upon confirmation.</p>
              <div className="btn-group">
                <button type="submit" disabled={state.submitting} className="btn btn-success">Submit</button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAlert && (
        <div className="custom-alert-card">
          <p>Thanks {formData.name || 'there'}, we will reach out via Google Meet soon!</p>
        </div>
      )}
    </div>
  );
};

export default About;
