import React from "react";
import "./Help.css";

const Help = () => {
  return (
    <div className="help-container">
      <h1 className="help-title">Need Help?</h1>
      <p className="help-subtitle">
        We are here to assist you! Find answers to common questions or reach out to us directly.
      </p>

      <div className="help-section">
        <h2>FAQs</h2>
        <div className="faq">
          <h3>What is Bridge AI?</h3>
          <p>Bridge AI is an AI-powered platform that helps entrepreneurs connect with mentors, industry experts, and business networks.</p>
        </div>
        <div className="faq">
          <h3>How do I get started?</h3>
          <p>Click on "Get Started" on the homepage and sign up to explore our features.</p>
        </div>
        <div className="faq">
          <h3>Is Bridge AI free to use?</h3>
          <p>We offer both free and premium plans to meet different user needs.</p>
        </div>
      </div>

      <div className="help-section">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:support@bridgeai.com">support@bridgeai.com</a></p>
        <p>Phone: +1 (234) 567-890</p>
        <p>Address: 123 AI Street, Tech City, Innovation Land</p>
      </div>

      <div className="help-section">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a href="https://twitter.com/bridgeai" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com/company/bridgeai" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://facebook.com/bridgeai" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default Help;
