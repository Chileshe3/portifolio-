import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';


const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos
      > currentScrollPos || currentScrollPos < 10;
      
      setIsScrolled(currentScrollPos > 50);
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    // Close dropdowns when clicking outside
    const handleClickOutside = (event) => {
      Object.keys(dropdownRefs.current).forEach(key => {
        if (dropdownRefs.current[key] && 
            !dropdownRefs.current[key].contains(event.target)) {
          setActiveDropdown(null);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [prevScrollPos]);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
    {
      title: 'More',
      children: [
        { title: 'Timeline', path: '/timeline' },
        { title: 'Testimonials', path: '/testimonials' },
        { title: 'Resume', path: '/resume' },
        { title: 'Blog', path: '/blog' },
        { title: 'Education', path: '/education' },
        { title: 'Sitemap', path: '/sitemap' },
        { title: 'Privacy Policy', path: '/privacy-policy' }
      ]
    },
    
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className={`navigation ${isScrolled ? 'scrolled' : ''}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
        > 
          <div 
            className="nav-menu-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            {menuItems.map((item, index) => (
              item.children ? (
                <div 
                  key={index} 
                  className="dropdown"
                  ref={el => dropdownRefs.current[index] = el}
                >
                  <button 
                    className="dropdown-trigger"
                    onClick={() => toggleDropdown(index)}
                    aria-expanded={activeDropdown === index}
                  >
                    {item.title} <FaChevronDown />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        className="dropdown-content"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            to={child.path}
                            onClick={closeMenu}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              )
            ))}
            <Link to="/login" className="nav-link">Login</Link>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;