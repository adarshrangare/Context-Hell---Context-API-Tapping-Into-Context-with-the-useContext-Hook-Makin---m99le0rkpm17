// contexts/ConfigContext.js
'use client'
import React, { createContext, useContext, useState } from 'react';

const ConfigContext = createContext();

export function useConfig(){
  return useContext(ConfigContext); 
}

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({ debugMode: false });

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigContext;
