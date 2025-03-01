import React, { useState } from 'react';
import './Faq.css';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are the latest trends in web development?",
      answer: "Modern web development focuses on serverless architectures, edge computing, AI-powered development, and frameworks like Next.js and Svelte for faster, more dynamic experiences.",
    },
    {
      question: "Which programming languages are in high demand?",
      answer: "Languages like Python, JavaScript, and Rust are growing in demand due to their versatility in AI, web development, and system-level programming. TypeScript is also popular for large-scale applications.",
    },
    {
      question: "What are the key UI/UX design trends for 2024?",
      answer: "Minimalist design, glassmorphism, dark mode, immersive animations, and AI-assisted UI/UX tools are shaping the future of design.",
    },
    {
      question: "How is AI impacting software development?",
      answer: "AI is revolutionizing coding with tools like GitHub Copilot and ChatGPT, automating repetitive tasks, improving debugging, and enhancing software testing.",
    },
    {
      question: "What’s the future of mobile app development?",
      answer: "Cross-platform frameworks like Flutter and React Native, progressive web apps (PWAs), and AI-driven personalization are shaping the future of mobile development.",
    },
  ];
  

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
          <p>Web design and development updates, Meet the right platform to help you realize and stay on trend.</p>
          <Link to="/contact">
          <button>Send a Direct Mail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
