import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';

const LocalThemedBox = () => {
  const { theme } = useTheme();
  const [localTheme, setLocalTheme] = useState(theme);

  const toggleLocalTheme = () => {
    setLocalTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      id="local-themed-box"
      className={localTheme === 'light' ? 'bg-light' : 'bg-dark'}
    >
      <p
        id="local-themed-text-container"
        className={localTheme === 'light' ? 'txt-light' : 'txt-dark'}
      >
        Some Text
      </p>
      <button
        id="local-theme-toggler"
        className={`btn ${localTheme === 'light' ? 'btn-light' : 'btn-dark'}`}
        onClick={toggleLocalTheme}
      >
        Toggle local theme to {localTheme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
};

export { LocalThemedBox };




