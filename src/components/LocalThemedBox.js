import React from 'react';
import { useTheme } from './ThemeProvider';

const LocalThemedBox = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      id="local-themed-box"
      className={theme === 'light' ? 'bg-light' : 'bg-dark'}
    >
      <p
        id="local-themed-text-container"
        className={theme === 'light' ? 'txt-light' : 'txt-dark'}
      >
        Some Text
      </p>
      <button
        id="local-theme-toggler"
        className={`btn ${theme === 'light' ? 'btn-light' : 'btn-dark'}`}
        onClick={toggleTheme}
      >
        Toggle local theme to {theme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
};

export { LocalThemedBox };


