import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [accentColor, setAccentColor] = useState('#00b4d8');

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('isDark', !isDark);
  };

  const changeAccentColor = (color) => {
    setAccentColor(color);
    localStorage.setItem('accentColor', color);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('isDark') === 'true';
    const savedColor = localStorage.getItem('accentColor');
    if (savedColor) setAccentColor(savedColor);
    setIsDark(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, accentColor, changeAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
