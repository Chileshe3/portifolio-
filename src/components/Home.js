import React, { useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

import '../styles/Home.css';

// Mock components for demonstration
const Timeline = () => <div className="timeline-component">Timeline Component</div>;
const Testimonials = () => <div className="testimonials-component">Testimonials Component</div>;
const Resume = () => <div className="resume-component">Resume Component</div>;

// Icons (using simple SVG icons instead of external libraries)
const GithubIcon = () => (
  <svg className="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const CodeIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const LaptopIcon = () => (
  <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ServerIcon = () => (
  <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const MobileIcon = () => (
  <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const AwardIcon = () => (
  <svg className="icon-large" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleOnHover = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  whileTap: { scale: 0.95 }
};

// Floating animation variants
const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const rotatingAnimation = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const horizontalFloatRight = {
  animate: {
    x: [0, 100, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const horizontalFloatLeft = {
  animate: {
    x: [0, -100, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Intersection Observer hook for animations
const useAnimateOnInView = () => {
  const [ref, inView] = [React.useRef(), true]; // Simplified for demo
  return [ref, inView];
};

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Memoized data to prevent unnecessary re-renders
  const skillCategories = useMemo(() => [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML-5", "CSS"],
      icon: <LaptopIcon />
    },
    {
      title: "Backend",
      skills: ["Node.js", "Flask", "Djangle", "PostgreSQL", "Firebase"],
      icon: <ServerIcon />
    },
    {
      title: "Tools & Cloud",
      skills: ["AWS", "Docker", "Git", "VS Code"],
      icon: <DatabaseIcon />
    }
  ], []);

  const techStack = useMemo(() => [
    { name: 'JavaScript', color: '#F7DF1E', level: 90 },
    { name: 'React', color: '#61DAFB', level: 95 },
    { name: 'Node.js', color: '#339933', level: 85 },
    { name: 'Python', color: '#3776AB', level: 80 },
    { name: 'Kotlin', color: '#3178C6', level: 85 },
    { name: 'Django', color: '#E10098', level: 75 },
    { name: 'Flask', color: '#FF9900', level: 70 },
    { name: 'Docker', color: '#2496ED', level: 75 },
    { name: 'Firebase', color: '#FF9900', level: 75}
  ], []);

  const services = useMemo(() => [
    {
      icon: <LaptopIcon />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks and best practices."
    },
    {
      icon: <ServerIcon />,
      title: "Backend Development",
      description: "Building robust, scalable server-side applications and RESTful APIs."
    },
    {
      icon: <MobileIcon />,
      title: "Mobile Development",
      description: "Developing mobile applications with React Native and kotlin."

    },
    {
      icon: <DatabaseIcon />,
      title: "Database Design",
      description: "Designing and optimizing database structures for performance and scalability."
    }
  ], []);

  const projects = useMemo(() => [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      tags: ["React", "Node.js", "MySql", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates.",
      tags: ["Kotlin", "Django", "Firebase"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts and reports.",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    }
  ], []);

  const achievements = useMemo(() => [
    {
      icon: <AwardIcon />,
      title: "Best Developer 2023",
      description: "Awarded by Local Tech Community"
    },
    {
      icon: <CodeIcon />,
      title: "10+ Projects",
      description: "Successfully Completed"
    },
    {
      icon: <LaptopIcon />,
      title: "8+ Happy Clients",
      description: "Worldwide"
    }
  ], []);

  const FloatingObjects = React.memo(() => (
    <div className="floating-objects" aria-hidden="true">
      <motion.div 
        className="floating-circle floating-circle-1"
        variants={floatingAnimation}
        animate="animate"
      />
      <motion.div 
        className="floating-circle floating-circle-2"
        variants={rotatingAnimation}
        animate="animate"
      />
      <motion.div 
        className="floating-triangle"
        variants={floatingAnimation}
        animate="animate"
      />
      <motion.div 
        className="floating-dot floating-dot-1"
        variants={horizontalFloatLeft}
        animate="animate"
      />
      <motion.div 
        className="floating-dot floating-dot-2"
        variants={horizontalFloatRight}
        animate="animate"
      />
    </div>
  ));

  return (
    <div className="home-container">
      <FloatingObjects />
      
      <div className="content-wrapper">
        {/* Hero Section */}
        <motion.section 
          className="hero-section"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <div className="hero-grid">
            <motion.div variants={fadeInUp} className="hero-content">
              <motion.h1 
                className="hero-title"
                variants={fadeInUp}
              >
                Chileshe Besa
              </motion.h1>
              <motion.h2 
                className="hero-subtitle"
                variants={fadeInUp}
              >
                Full-Stack Developer
              </motion.h2>
              <motion.p 
                className="hero-description"
                variants={fadeInUp}
              >
                Creating digital experiences with modern technologies. 
                Passionate about creating scalable, user-centric solutions that make a difference.
              </motion.p>
              <motion.div 
                className="hero-buttons"
                variants={fadeInUp}
              >
                <motion.a
                  href="#contact"
                  className="btn btn-primary"
                  variants={scaleOnHover}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  className="btn btn-secondary"
                  variants={scaleOnHover}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  View Projects
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-image"
              variants={fadeInUp}
            >
              <div className="profile-image-container">
                <div className="profile-image">
                  <img 
                    src={require('../images/us.png')} 
                    alt="Chileshe Besa - Full Stack Developer"
                    loading="lazy"
                  />
                </div>
                <div className="profile-decoration profile-decoration-1"></div>
                <div className="profile-decoration profile-decoration-2"></div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Quick Stats */}
        <motion.section 
          className="stats-section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="stats-grid">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="skills-section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="section-header" variants={fadeInUp}>
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-description">
              Specialized in modern app and web technologies with a focus on performance and user experience.
            </p>
          </motion.div>
          
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="skill-category"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
                <div className="category-skills">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies with Skill Levels */}
        <motion.section 
          className="technologies-section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="section-header" variants={fadeInUp}>
            <h2 className="section-title">Technologies I Master</h2>
          </motion.div>
          
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <motion.div 
                key={index}
                className="tech-item"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className="tech-icon"
                  style={{ 
                    backgroundColor: `${tech.color}22`, 
                    color: tech.color 
                  }}
                >
                  {tech.name.slice(0, 2)}
                </div>
                <h3 className="tech-name">{tech.name}</h3>
                <div className="tech-progress">
                  <motion.div 
                    className="tech-progress-bar"
                    style={{ backgroundColor: tech.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="tech-level">{tech.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Services */}
        <motion.section 
          id="services"
          className="services-section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="section-header" variants={fadeInUp}>
            <h2 className="section-title">What I Do</h2>
            <p className="section-description">
              Comprehensive development services tailored to your needs.
            </p>
          </motion.div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section 
          id="projects"
          className="projects-section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="section-header" variants={fadeInUp}>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">
              A showcase of recent work demonstrating technical expertise and creative problem-solving.
            </p>
          </motion.div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="project-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="projects-cta"
            variants={fadeInUp}
          >
            <motion.a
              href="/projects"
              className="btn btn-primary"
              variants={scaleOnHover}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              View All Projects
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Achievements */}
        <motion.section 
          className="achievements-section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="section-header" variants={fadeInUp}>
            <h2 className="section-title">Achievements</h2>
          </motion.div>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="achievement-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        </div>           
    </div>
  );
};

export default Home;