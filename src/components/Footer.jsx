// Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Home from './Home'; // Import Home component
const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Define onClick functions to scroll to respective sections in Home component
  const handleServicesLinkClick = () => {
    scrollToSection('serve-sections'); // Corrected to 'serve-sections'
  };

  const   handleAboutLinkClick= () => {
    scrollToSection('about-us'); // Corrected to 'serve-sections'
  };


  const handleHomeLinkClick = () => {
    scrollToSection('home-container'); // Corrected to 'serve-sections'
  };

  const handleTeamLinkClick = () => {
    scrollToSection('team');
  };

  const handleMissionLinkClick = () => {
    scrollToSection('mission');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-image">
          <img src="./src/assets/safal-transparent-logo.png" alt="Company Logo" />
        </div>
        <div className="social-icons">
          <a href="https://github.com/your-github-url" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/your-linkedin-url" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div className="footer-links">
          <div className="section">
          <a href="/" onClick={handleHomeLinkClick}>Home</a><br></br>
            <a href="#serve-sections" onClick={handleServicesLinkClick}>Services</a> {/* Corrected function call */}
          </div>
          <div className="section">
          <a href="#about-us" onClick={handleAboutLinkClick}>About Us</a><br></br>
            <a href="#team" onClick={handleTeamLinkClick}>Our Team</a><br></br>
            <a href="#mission" onClick={handleMissionLinkClick}>Our Mission</a>
          </div>
          <div className="section">
            <Link to="/feedback">Feedback</Link>
            <p className="text-white">Contact Us</p>
          </div>
        </div>
      </div>
      <p>&copy; 2024 Team SAFAL. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
