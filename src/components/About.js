import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../images/chilesg.jpg'; 

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Redux"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "MongoDB"] },
    { category: "Tools", items: ["Git", "VS Code", "Docker", "Webpack"] }
  ];

  return (
    <div className="about-container">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-header">
          <motion.div
            className="profile-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transitsion={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={profileImage} 
              alt="Chileshe Besa" 
              className="profile-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x300?text=CB';
              }}
            />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            About Chileshe
          </motion.h2>
        </div>
        
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3>I am a passionate software developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create efficient and user-friendly solutions.</h3>
        </motion.div>

        <motion.div 
          className="skills-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <h4>{skillGroup.category}</h4>
                <div className="skill-items">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span 
                      key={i} 
                      className="skill-tag"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
