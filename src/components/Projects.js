import React from 'react';
import { motion } from 'framer-motion';
import ecommerce from '../images/1232.png';
import taskManager from '../images/1740173438121.jpg';
import weather from '../images/1740173751031.jpg';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and responsive design.",
      image: ecommerce,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
      features: ["User Authentication", "Shopping Cart", "Payment Integration"]
    },
    {
      title: "Task Management System",
      description: "A collaborative task management platform with real-time updates and team collaboration features.",
      image: taskManager,
      technologies: ["React", "Firebase", "Material-UI"],
      link: "#",
      github: "#",
      features: ["Real-time Updates", "Team Collaboration", "File Sharing"]
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with location-based forecasts and historical data visualization.",
      image: weather,
      technologies: ["React", "D3.js", "Weather API"],
      link: "#",
      github: "#",
      features: ["Location Detection", "5-Day Forecast", "Historical Data"]
    }
  ];
  return (
    <div className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>
      <motion.div 
        className="projects-grid"
        initial="hidden"
        animate="show"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-features">
                {project.features.map((feature, i) => (
                  <span key={i} className="feature-tag">{feature}</span>
                ))}
              </div>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="demo-link">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
