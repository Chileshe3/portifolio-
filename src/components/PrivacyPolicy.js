import React from 'react';
import { motion } from 'framer-motion';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <motion.div 
        className="privacy-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us when you:</p>
          <ul>
            <li>Fill out the contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Leave comments on blog posts</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries</li>
            <li>Send newsletters and updates</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Protection</h2>
          <p>We implement security measures to protect your personal information, including:</p>
          <ul>
            <li>Encryption of data transmission</li>
            <li>Secure storage practices</li>
            <li>Limited access to personal information</li>
          </ul>
        </section>

        <section>
          <h2>4. Cookies Policy</h2>
          <p>We use cookies to:</p>
          <ul>
            <li>Analyze website traffic</li>
            <li>Improve user experience</li>
            <li>Remember your preferences</li>
          </ul>
        </section>

        <section>
          <h2>5. Contact Information</h2>
          <p>For privacy-related inquiries, please contact:</p>
          <p>Email: privacy@example.com</p>
          <p>Address: Your Address Here</p>
        </section>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
