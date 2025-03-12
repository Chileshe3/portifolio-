import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Timeline = () => {
  const timelineData = [
    {
      year: "2023",
      title: "Senior Software Developer",
      company: "Tech Corp",
      type: "work",
      description: "Led development of enterprise applications",
      skills: ["React", "Node.js", "AWS"]
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      type: "work",
      description: "Developed scalable web applications",
      skills: ["Vue.js", "Python", "Docker"]
    },
    {
      year: "2021",
      title: "Enrolled for Beng Chemical Engineering",
      company: "The Copperbelt University",
      type: "education",
      description: "Graduated with honors",
      skills: ["Algorithms", "Data Structures", "Systems Design"]
    }
  ];

  return (
    <div className="timeline-container">
      <h2>My Journey</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="timeline-icon">
              {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
            </div>
            <div className="timeline-content">
              <span className="year">{item.year}</span>
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
              <div className="timeline-skills">
                {item.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
