// contexts/UserContext.js
'use client'
import React, { createContext, useState,useContext } from 'react';

const UserContext = createContext();
export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // default to no user

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
