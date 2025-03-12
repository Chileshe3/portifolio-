import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaEnvelope, FaBlog, FaGraduationCap, FaClock, FaComments, FaFileAlt, FaShieldAlt } from 'react-icons/fa';
import '../styles/Sitemap.css';

const Sitemap = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/', icon: <FaHome /> },
        { name: 'About', path: '/about', icon: <FaUser /> },
        { name: 'Projects', path: '/projects', icon: <FaCode /> },
        { name: 'Contact', path: '/contact', icon: <FaEnvelope /> }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog', icon: <FaBlog /> },
        { name: 'Education', path: '/education', icon: <FaGraduationCap /> },
        { name: 'Resume', path: '/resume', icon: <FaFileAlt /> }
      ]
    },
    {
      title: 'Features',
      links: [
        { name: 'Timeline', path: '/timeline', icon: <FaClock /> },
        { name: 'Testimonials', path: '/testimonials', icon: <FaComments /> }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy', icon: <FaShieldAlt /> }
      ]
    }
  ];

  return (
    <div className="sitemap-container">
      <motion.div 
        className="sitemap-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Sitemap</h1>
        <div className="sitemap-grid">
          {siteStructure.map((section, index) => (
            <motion.div 
              key={index}
              className="sitemap-section"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2>{section.title}</h2>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 10 }}
                  >
                    <Link to={link.path}>
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Sitemap;
