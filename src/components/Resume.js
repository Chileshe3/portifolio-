import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaFilePdf } from 'react-icons/fa';

const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  const resumeData = {
    summary: "Experienced software developer with expertise in modern web technologies",
    experience: [
      {
        position: "Senior Developer",
        company: "Tech Corp",
        duration: "2022 - Present",
        achievements: [
          "Led team of 5 developers",
          "Increased performance by 40%",
          "Implemented CI/CD pipeline"
        ]
      }
    ],
    education: [
      {
        degree: "BSc Computer Science",
        school: "University Name",
        year: "2021"
      }
    ],
    skills: {
      technical: ["React", "Node.js", "Python", "AWS"],
      soft: ["Leadership", "Communication", "Problem Solving"]
    }
  };

  return (
    <div className="resume-container">
      <div className="resume-actions">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('/resume.pdf', '_blank')}
        >
          <FaDownload /> Download PDF
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPreviewOpen(true)}
        >
          <FaEye /> Preview
        </motion.button>
      </div>

      <div className="resume-content">
        <section className="resume-section">
          <h2><FaFilePdf /> Professional Summary</h2>
          <p>{resumeData.summary}</p>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>{exp.position}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        {/* Add Education and Skills sections similarly */}
      </div>

      {isPreviewOpen && (
        <motion.div
          className="resume-preview-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="resume-preview">
            <iframe src="/resume.pdf" title="Resume Preview" />
            <button onClick={() => setIsPreviewOpen(false)}>Close</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Resume;
