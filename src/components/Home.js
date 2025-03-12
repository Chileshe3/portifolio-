import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';  // Add this import
import profileImage from '../images/1740173751031.jpg';
import { FaGithub, FaLinkedin, FaCode, FaAward, FaLaptopCode, FaServer, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import Timeline from './Timeline';
import Testimonials from './Testimonials';
import Resume from './Resume';
import Login from './Login';
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb, 
  SiPostgresql, 
  SiAmazonaws, 
  SiDocker, 
  SiGit, 
  SiTypescript, 
  SiRedux, 
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiAngular,
  SiVuedotjs,
  SiFigma
} from 'react-icons/si';

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

  const techStack = [
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: SiAmazonaws, name: 'AWS', color: '#FF9900' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiRedux, name: 'Redux', color: '#764ABC' },
    { icon: SiGraphql, name: 'GraphQL', color: '#E10098' },
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: SiAngular, name: 'Angular', color: '#DD0031' },
    { icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' }
  ];

  return (
    <div className="home">
      <div className="floating-objects">
        <motion.div 
          className="floating-circle"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div 
          className="floating-square"
          variants={rotatingAnimation}
          animate="animate"
        />
        <motion.div 
          className="floating-triangle"
          variants={floatingAnimation}
          animate="animate"
        />

        {/* New floating elements */}
        <motion.div 
          className="floating-small-circle left"
          variants={horizontalFloatLeft}
          animate="animate"
        />
        <motion.div 
          className="floating-small-circle right"
          variants={horizontalFloatRight}
          animate="animate"
        />
        <motion.div 
          className="floating-diamond left-mid"
          variants={horizontalFloatLeft}
          animate="animate"
        />
        <motion.div 
          className="floating-diamond right-mid"
          variants={horizontalFloatRight}
          animate="animate"
        />
        <motion.div 
          className="floating-cross top"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div 
          className="floating-cross bottom"
          variants={floatingAnimation}
          animate="animate"
        />
      </div>
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
              Chileshe Besa 
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

        {/* Featured Services Section */}
        <motion.section 
          className="featured-services"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>What I Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <FaLaptopCode className="service-icon" />
              <h3>Frontend Development</h3>
              <p>Creating responsive and interactive user interfaces with modern frameworks.</p>
            </div>
            <div className="service-card">
              <FaServer className="service-icon" />
              <h3>Backend Development</h3>
              <p>Building robust server-side applications and APIs.</p>
            </div>
            <div className="service-card">
              <FaMobileAlt className="service-icon" />
              <h3>Mobile Development</h3>
              <p>Developing cross-platform mobile applications.</p>
            </div>
            <div className="service-card">
              <FaDatabase className="service-icon" />
              <h3>Database Design</h3>
              <p>Designing and optimizing database structures.</p>
            </div>
          </div>
        </motion.section>

        {/* Latest Projects Preview */}
        <motion.section 
          className="latest-projects"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2>Latest Projects</h2>
          <div className="projects-preview-grid">
            {[1, 2, 3].map((project, index) => (
              <div className="project-preview-card" key={index}>
                <div className="project-preview-image">
                  <img src={`https://via.placeholder.com/400x300?text=Project+${index + 1}`} alt={`Project ${index + 1}`} />
                </div>
                <div className="project-preview-content">
                  <h3>Project Title {index + 1}</h3>
                  <p>Brief project description goes here. Highlighting key features and technologies used.</p>
                  <div className="project-preview-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <motion.div 
            className="view-all-projects"
            whileHover={{ scale: 1.05 }}
          >
            <a href="/projects" className="view-all-button">View All Projects</a>
          </motion.div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          className="achievements"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2>Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <FaAward className="achievement-icon" />
              <h3>Best Developer 2023</h3>
              <p>Awarded by Local Tech Community</p>
            </div>
            <div className="achievement-card">
              <FaCode className="achievement-icon" />
              <h3>100+ Projects</h3>
              <p>Successfully Completed</p>
            </div>
            <div className="achievement-card">
              <FaLaptopCode className="achievement-icon" />
              <h3>50+ Happy Clients</h3>
              <p>Worldwide</p>
            </div>
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section 
          className="technologies"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h2>Technologies I Work With</h2>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <motion.div 
                key={index}
                className="tech-item"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                }}
                style={{
                  background: `linear-gradient(135deg, ${tech.color}22, ${tech.color}11)`
                }}
              >
                <tech.icon style={{ color: tech.color, fontSize: '2.5rem' }} />
                <p>{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="resume">
        <Resume />
      </div>
    </div>
  );
};

export default Home;