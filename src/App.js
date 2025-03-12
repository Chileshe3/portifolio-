import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import Blog from './components/Blog';
import './styles/Blog.css'; 
import Education from './components/Education';
import Login from './components/Login'; // Updated import to match new filename
import Resume from './components/Resume';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import './styles/Education.css'; 
import './styles/Login.css';
import './App.css';
import BackToTop from './components/BackToTop';
import './styles/BackToTop.css';
import PrivacyPolicy from './components/PrivacyPolicy';
import './styles/PrivacyPolicy.css';
import Sitemap from './components/Sitemap';
import './styles/Sitemap.css';

const AppContent = () => {
  const { isDark, accentColor } = useContext(ThemeContext);
  
  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`} style={{'--accent-color': accentColor}}>
      <ScrollProgress />
      <ParticleBackground />
      <Navigation />
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
};

export default App;
