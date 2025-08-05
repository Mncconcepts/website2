import React, { useState } from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';


const ContactUs = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
    const [showPopup, setShowPopup] = useState(false);
    const [showTicketForm, setShowTicketForm] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [ticketDetails, setTicketDetails] = useState({ name: "", email: "", subject: "", message: "" });
    const [state, handleFormSubmit] = useForm("xbldnryn");

    const handleInputChange = (e) => {
        setTicketDetails({ ...ticketDetails, [e.target.name]: e.target.value });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        await handleFormSubmit(e);
        setTimeout(() => setFormSubmitted(false), 5000);
    };

    const handleTicketSubmit = (e) => {
        e.preventDefault();
        setShowTicketForm(false);
        setShowSuccessPopup(true);
        setTimeout(() => {
            setShowSuccessPopup(false);
            setTicketDetails({ name: "", email: "", subject: "", message: "" });
        }, 3000);
    };

    if (state.succeeded) {
        return <p>Sent successfully</p>;
    }


    return (
        <section className="contact-us">
            {formSubmitted && (
                <div className="alert-card">
                    <FaCheckCircle className="check-icon" />
                    <h3>Form Submitted Successfully!</h3>
                    <p>Name: {formData.name}</p>
                    <p>Phone: {formData.phone}</p>
                    <p>Email: {formData.email}</p>
                    <p>Subject: {formData.subject}</p>
                    <p>Message: {formData.message}</p>
                </div>
            )}


            <div className="contact-header">
                <div data-aos="fade-down" className="">
                    <h1 className="mt-5 pt-5"> <span>Contact</span></h1>
                </div>
            </div>

            <div data-aos="fade-right" className="contact-info">
                <div className="info-section bg-dark pb-5 pt-5">


                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Location: Lagos, Nigeria</span>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <span>Email: clintonnweze111@gmail.com</span>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <span>Call us: +234 902 049 5756</span>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <span>Call us: +234 913 319 4835</span>
                    </div>
                    <hr />
                </div>
                <div className="map-section">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.005279957473!2d3.345757645703107!3d6.521513865952185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1735174123615!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">"
                        loading="lazy"
                    </iframe>
                </div>
            </div>


            <div data-aos="fade-up" className="contact-form-section">
                <h3><span>Message Us</span></h3>
                <p>We would love to hear from you, kindly send us your message.</p>
                <form action="https://formspree.io/f/xbldnryn" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-row">
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                    </div>
                    <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>

            <div className="help-section">
                <h3>Need help?</h3>
                <p>Need Help? Reach Us Out</p>
                <div className="help-cards">
                    <div data-aos="fade-up" className="help-card">
                        <i className="fas fa-ticket-alt"></i>
                        <h4>Ticket support</h4>
                        <p>Need assistance? Submit a ticket for detailed assistance.</p>
                        <button onClick={() => setShowPopup(true)}>Learn more</button>
                    </div>
                    <div data-aos="fade-up" className="help-card">
                        <i className="fas fa-headset"></i>
                        <h4>Customer support</h4>
                        <p>Have any issue, reach us out we are ready to help you</p>
                        <Link to="/support">
                        <button>Learn more</button>
                        </Link>
                    </div>
                    <div data-aos="fade-up" className="help-card">
                        <i className="fas fa-question-circle"></i>
                        <h4>FAQ</h4>
                        <p>Check out the most frequently asked question</p>
                        <Link to="/faq">
                            <button>Learn more</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Ticket Form Modal */}
            {showTicketForm && (
                <div className="ticket-modal">
                    <div className="ticket-card">
                        <h3>Submit a Ticket</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Your Name" value={ticketDetails.name} onChange={handleInputChange} required />
                            <input type="email" name="email" placeholder="Your Email" value={ticketDetails.email} onChange={handleInputChange} required />
                            <input type="text" name="subject" placeholder="Subject" value={ticketDetails.subject} onChange={handleInputChange} required />
                            <textarea name="message" placeholder="Describe your issue" value={ticketDetails.message} onChange={handleInputChange} required />
                            <div className="ticket-buttons">
                                <button type="submit" className="btn-submit">Submit</button>
                                <button type="button" className="btn-cancel" onClick={() => setShowTicketForm(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Ticket Support Popup */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-card">
                        <h3>Submit a Support Ticket</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                            <textarea name="message" placeholder="Describe your issue" value={formData.message} onChange={handleChange} required></textarea>
                            <button type="submit">Submit Ticket</button>
                            <button type="buttonn" onClick={() => setShowPopup(false)} className="close-btn">Close</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Success Message Popup */}
            {showSuccessPopup && (
                <div className="success-modal">
                    <div className="success-card">
                        <div className="checkmark">
                            <svg viewBox="0 0 52 52">
                                <circle cx="26" cy="26" r="25" fill="none" />
                                <path fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M14 27l7 7 16-16" />
                            </svg>
                        </div>
                        <h3>Message Sent Successfully!</h3>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactUs;
