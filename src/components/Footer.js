import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaHeart, 
  FaEnvelope, 
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaDev,
  FaMedium,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Chileshe Besa</h3>
          <p>Building digital experiences with passion and precision.</p>
          
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/education">Education</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <div className="footer-links">
            <Link to="/resume">Resume</Link>
            <Link to="/timeline">Timeline</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/sitemap">Sitemap</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
              <FaTwitter />
            </a>
            <a href="https://dev.to" target="_blank" rel="noopener noreferrer" title="Dev.to">
              <FaDev />
            </a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer" title="Medium">
              <FaMedium />
            </a>
          </div>
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            Made with <FaHeart className="heart-icon" /> by Chileshe Besa © {new Date().getFullYear()}
          </p>
          <div className="footer-tech">
            <FaCode /> Built with React.js
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
