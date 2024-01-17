// contexts/LanguageContext.js
'use client'
import React, { createContext, useState,useContext} from 'react';

const LanguageContext = createContext();
export function useLanguage(){
  return useContext(LanguageContext); 
}
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // default to English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
