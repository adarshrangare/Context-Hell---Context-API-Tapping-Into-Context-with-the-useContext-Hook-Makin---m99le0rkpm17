// contexts/ThemeContext.js
'use client'
import React, { createContext, useState,useContext} from 'react';

export const ThemeContext = createContext();

export function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // default to light theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
