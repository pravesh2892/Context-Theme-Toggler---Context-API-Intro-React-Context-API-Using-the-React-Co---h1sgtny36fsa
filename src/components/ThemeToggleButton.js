import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`btn ${theme === 'light' ? 'btn-light txt-light' : 'btn-dark txt-dark'}`}
      id="global-theme-toggler"
      onClick={toggleTheme}
    >
      {theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    </button>
  );
};

export { ThemeToggleButton };
