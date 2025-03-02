import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>I am a passionate software developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create efficient and user-friendly solutions.</p>
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
