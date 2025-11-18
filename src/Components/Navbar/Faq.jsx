import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Faq.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [redirectMsg, setRedirectMsg] = useState(false);
  const navigate = useNavigate();



  const faqs = [
    {
      question: "What are the benefits of using cloud computing for businesses?",
      answer: "Cloud computing provides scalability, cost efficiency, remote access, enhanced security, automated backups, and faster deployment for applications and data management.",
    },
    {
      question: "What skills do modern software developers need?",
      answer: "Full-stack knowledge, strong problem-solving skills, version control (Git), cloud deployment, API integration, testing practices, and understanding CI/CD pipelines are essential.",
    },
    {
      question: "Are NFTs, blockchain, and Web3 still relevant?",
      answer: "Yes blockchain technology continues to power distributed systems, digital identity, smart contracts, fintech solutions, and secure data management beyond the hype of digital art NFTs.",
    },
    {
      question: "How important is cybersecurity today?",
      answer: "Cybersecurity is more critical than ever due to rising global cyber threats. Companies invest in encryption, ethical hacking, Zero-Trust frameworks, and AI-powered detection systems.",
    },
    {
      question: "What is DevOps and why does it matter?",
      answer: "DevOps is a set of practices that integrates development and operations teams to automate processes, improve collaboration, accelerate deployment cycles, and increase reliability.",
    },
  ];


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleRedirect = () => {
    setLoading(true);
    setRedirectMsg(true);

    setTimeout(() => {
      navigate('/contact');
    }, 2000);
  };


  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-questions">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div>{faq.question}</div>
              <div>+</div>
              {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
        <div className="contact-box">
          <h3>Do you have more questions?</h3>
          <p>
            Web design and development updates, Meet the right platform to help you realize and stay on trend.
          </p>

          <button onClick={handleRedirect} disabled={loading}>
            {loading ? (
              <span className="spinner"></span>
            ) : (
              'Send a Direct Mail'
            )}
          </button>

          {redirectMsg && !loading && (
            <p className="redirect-msg">Redirecting to contact section...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
