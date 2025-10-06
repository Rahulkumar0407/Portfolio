// src/components/Footer/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css'; // Import the component-specific CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/Rahulkumar0407" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/rahulkumarmait/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} Rahul Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;