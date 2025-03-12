import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaLink } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              <FaTimes />
            </button>
            
            <div className="modal-header">
              <h2>{project.title}</h2>
              <div className="modal-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Source
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaLink /> Live Demo
                </a>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="modal-details">
                <h3>Project Overview</h3>
                <p>{project.description}</p>
                
                <h3>Key Features</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h3>Technologies Used</h3>
                <div className="modal-tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
