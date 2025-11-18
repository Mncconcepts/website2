import React, { useState } from "react";
import "./Message.css";
import { useForm, ValidationError } from '@formspree/react';

const Message = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await handleFormSubmit(e); // Call Formspree's handleSubmit function

        if (state.succeeded) {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
        }
    };

    const [state, handleFormSubmit] = useForm("xbldnryn");

    return (
        <section className="get-in-touch">
            <div className="message-text">
                <h1 className="text-white">Send Your Message</h1>
                <p>use the form below to send your preferred messages.</p>
            </div>
            <form action="https://formspree.io/f/xbldnryn" data-aos="fade-up" className="contactt-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
                <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
                <input type="text" name="subject" placeholder="Your Subject" required onChange={handleChange} />
                <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
                <button type="submit">Send Now</button>
            </form>

            {/* Popup Card */}
            {showPopup && (
                <div className="popup-card">
                    <div className="popup-content">
                        <div className="checkmark">
                            &#10004;
                        </div>
                        <h2>Message Sent Successfully!</h2>
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Subject:</strong> {formData.subject}</p>
                        <p><strong>Message:</strong> {formData.message}</p>
                    </div>
                </div>
            )}
        </section>


    );
};

export default Message;
