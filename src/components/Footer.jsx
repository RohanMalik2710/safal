// Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the Font Awesome icons
import '../styles/Footer.css'; // Import the Footer.css file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Image on the left */}
        <div className="footer-image">
          {/* Add your image here */}
          <img src="./src/assets/safal-transparent-logo.png" alt="Company Logo" />
        </div>
        {/* Text on the right */}
        <div className="social-icons">
            <a href="https://github.com/your-github-url" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/your-linkedin-url" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div className="footer-links">
          <div className="section">
            <h3>Know More</h3>
            <p>Information</p>
            <p>Services</p>
          </div>
          <div className="section">
            <h3>About</h3>
            <p>Company</p>
            <p>Team</p>
            <p>History</p>
          </div>
          <div className="section">
            <h3>Get in Touch</h3>
            <p>Contact Us</p>
            <p>Support</p>
            <p>Feedback</p>
          </div>
        </div>
      </div>
      {/* GitHub and LinkedIn icons */}
      
      <p>&copy; 2024 Team SAFAL. All rights reserved.</p>
    </footer>
  );
};

export default Footer;