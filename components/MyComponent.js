// MyComponent.js
'use client'
// import { useTheme } from '@/contexts/ThemeContext';
import React, { useContext } from 'react';

import  {ThemeContext, useTheme } from '../contexts/ThemeContext';
import LanguageContext, { useLanguage } from '../contexts/LanguageContext';
import UserContext, { useUser } from '../contexts/UserContext';
import ConfigContext, { useConfig } from '../contexts/ConfigContext';


const MyComponent = () => {

  const {user} = useUser();
  const {language} = useLanguage();
  const {theme} = useTheme();
  console.log(useTheme())
  const {config} = useConfig();

 

  // const {user} = useContext(UserContext);
  // const {language} = useContext(LanguageContext);
  // const {theme} = useContext(ThemeContext);
  // const {config} = useContext(ConfigContext);



  return (
    <div>


      <h1>My Component</h1>
      <p>Current Theme: {theme}</p>
      <p>Current Language: {language}</p>
      <p>User: {user ? user.name : 'Not logged in'}</p>
      <p>Debug Mode: {config.debugMode ? 'Enabled' : 'Disabled'}</p>
    </div>
  );
};

export default MyComponent;
