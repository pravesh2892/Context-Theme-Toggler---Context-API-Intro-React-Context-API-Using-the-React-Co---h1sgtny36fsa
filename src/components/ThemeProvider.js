import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light'); // Initial theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
