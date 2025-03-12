import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaPalette } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { isDark, toggleTheme, changeAccentColor } = useContext(ThemeContext);
  
  const colors = ['#00b4d8', '#4cc9f0', '#7209b7', '#f72585', '#ffd60a'];

  return (
    <motion.div 
      className="theme-switcher"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.button
        className="theme-toggle"
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </motion.button>
      
      <div className="color-options">
        <FaPalette />
        {colors.map((color) => (
          <motion.button
            key={color}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={() => changeAccentColor(color)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ThemeSwitcher;
