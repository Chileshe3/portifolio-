import React, { useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

import '../styles/Home.css';

// Mock components for demonstration
const Timeline = () => <div className="p-8 bg-gray-100 rounded-lg">Timeline Component</div>;
const Testimonials = () => <div className="p-8 bg-gray-100 rounded-lg">Testimonials Component</div>;
const Resume = () => <div className="p-8 bg-gray-100 rounded-lg">Resume Component</div>;

// Icons (using simple SVG icons instead of external libraries)
const GithubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const CodeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const LaptopIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const MobileIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const AwardIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      icon: <LaptopIcon />
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "GraphQL", "PostgreSQL"],
      icon: <ServerIcon />
    },
    {
      title: "Tools & Cloud",
      skills: ["AWS", "Docker", "Git", "Figma"],
      icon: <DatabaseIcon />
    }
  ], []);

  const techStack = useMemo(() => [
    { name: 'JavaScript', color: '#F7DF1E', level: 90 },
    { name: 'React', color: '#61DAFB', level: 95 },
    { name: 'Node.js', color: '#339933', level: 85 },
    { name: 'Python', color: '#3776AB', level: 80 },
    { name: 'TypeScript', color: '#3178C6', level: 85 },
    { name: 'GraphQL', color: '#E10098', level: 75 },
    { name: 'AWS', color: '#FF9900', level: 70 },
    { name: 'Docker', color: '#2496ED', level: 75 }
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
      description: "Developing cross-platform mobile applications with React Native."
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
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates.",
      tags: ["React", "Socket.io", "PostgreSQL"],
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
      title: "Best Developer 2024",
      description: "Awarded by Local Tech Community"
    },
    {
      icon: <CodeIcon />,
      title: "50+ Projects",
      description: "Successfully Completed"
    },
    {
      icon: <LaptopIcon />,
      title: "30+ Happy Clients",
      description: "Worldwide"
    }
  ], []);

  const FloatingObjects = React.memo(() => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div 
        className="absolute w-24 h-24 bg-blue-500/10 rounded-full top-1/4 left-1/4"
        variants={floatingAnimation}
        animate="animate"
      />
      <motion.div 
        className="absolute w-20 h-20 bg-yellow-500/10 top-3/5 right-1/4"
        variants={rotatingAnimation}
        animate="animate"
      />
      <motion.div 
        className="absolute w-0 h-0 border-l-12 border-r-12 border-b-20 border-l-transparent border-r-transparent border-b-blue-500/10 top-1/3 right-1/3"
        variants={floatingAnimation}
        animate="animate"
      />
      <motion.div 
        className="absolute w-8 h-8 bg-white/20 rounded-full top-1/3 left-1/10"
        variants={horizontalFloatLeft}
        animate="animate"
      />
      <motion.div 
        className="absolute w-8 h-8 bg-white/20 rounded-full top-2/3 right-1/10"
        variants={horizontalFloatRight}
        animate="animate"
      />
    </div>
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <FloatingObjects />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section 
          className="min-h-screen flex items-center justify-center pt-20"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div variants={fadeInUp} className="text-center lg:text-left">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                variants={fadeInUp}
              >
                Chileshe Besa
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl text-blue-200 mb-6"
                variants={fadeInUp}
              >
                Full-Stack Developer
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
                variants={fadeInUp}
              >
                Crafting digital experiences with modern technologies. 
                Passionate about creating scalable, user-centric solutions that make a difference.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={fadeInUp}
              >
                <motion.a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  variants={scaleOnHover}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                  variants={scaleOnHover}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  View Projects
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={fadeInUp}
            >
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Chileshe Besa - Full Stack Developer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Quick Stats */}
        <motion.section 
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">{stat.number}</h3>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized in modern web technologies with a focus on performance and user experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-blue-400 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="inline-block bg-blue-600/20 text-blue-200 px-4 py-2 rounded-full text-sm mr-2 mb-2 border border-blue-600/30"
                    >
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
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Technologies I Master</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: `${tech.color}22`, color: tech.color }}
                >
                  {tech.name.slice(0, 2)}
                </div>
                <h3 className="font-semibold mb-2">{tech.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div 
                    className="h-2 rounded-full"
                    style={{ backgroundColor: tech.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="text-sm text-gray-400">{tech.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Services */}
        <motion.section 
          id="services"
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive development services tailored to your needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="text-blue-400 mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section 
          id="projects"
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of recent work demonstrating technical expertise and creative problem-solving.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-blue-600/20 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            variants={fadeInUp}
          >
            <motion.a
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Achievements</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="text-yellow-400 mb-6 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact"
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={fadeInUp}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-3">
                    <span className="text-blue-400">📧</span>
                    chileshe@example.com
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-blue-400">📱</span>
                    +1 (234) 567-8900
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-blue-400">📍</span>
                    San Francisco, CA
                  </p>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <a href="https://github.com/yourusername" className="text-gray-300 hover:text-white">
                    <GithubIcon />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" className="text-gray-300 hover:text-white">
                    <LinkedinIcon />
                  </a>
                </div>
              </div>

              <motion.form 
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                  variants={scaleOnHover}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;