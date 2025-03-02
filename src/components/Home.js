import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../images/1740173751031.jpg';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Home = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML5/CSS3", "Responsive Design"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "RESTful APIs", "Database Design"]
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Docker", "AWS"]
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="home-content">
        <motion.div 
          className="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Chileshe Besa 2
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Software Developer
            </motion.h2>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Specializing in full-stack development with a passion for creating 
              innovative solutions. Let's build something amazing together.
            </motion.p>
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a href="/contact" className="cta-primary">Get in Touch</a>
              <a href="/projects" className="cta-secondary">View Projects</a>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="profile-image-container">
              <img 
                src={profileImage}
                alt="Chileshe Besa" 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400?text=CB';
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Overview Section */}
        <motion.section 
          className="skills-overview"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2>Skills & Expertise</h2>
          <div className="skills-grid-home">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="skill-category-card"
                whileHover={{ scale: 1.05 }}
              >
                <h3>{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quick Stats Section */}
        <motion.section 
          className="quick-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="stats-grid">
            <div className="stat-card">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.section 
          className="social-links-home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="/projects">
              <FaCode />
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;