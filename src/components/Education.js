import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCertificate } from 'react-icons/fa';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor's Degree in Computer Science",
      school: "University Name",
      year: "2019 - 2023",
      description: "Specialized in Software Engineering and Data Structures",
      achievements: ["Dean's List", "First Class Honors"],
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      degree: "Web Development Certification",
      school: "Tech Academy",
      year: "2022",
      description: "Full Stack Web Development Program",
      achievements: ["Top Performance Award"],
      icon: <FaCertificate />
    },
    {
      id: 3,
      degree: "Advanced Software Engineering",
      school: "Tech Institute",
      year: "2021",
      description: "Advanced programming and system design",
      achievements: ["Project Excellence Award"],
      icon: <FaAward />
    }
  ];

  return (
    <div className="education-container">
      <motion.h2 
        className="education-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education & Certifications
      </motion.h2>

      <div className="education-timeline">
        {education.map((edu, index) => (
          <motion.div 
            key={edu.id}
            className="education-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="education-icon">
              {edu.icon}
            </div>
            <div className="education-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.school}</h4>
              <p className="education-year">{edu.year}</p>
              <p className="education-description">{edu.description}</p>
              <div className="achievements">
                {edu.achievements.map((achievement, i) => (
                  <span key={i} className="achievement-tag">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
