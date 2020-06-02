import React, { useState, createContext, useEffect } from 'react';
export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [userId, setUserId] = useState(undefined);

  const login = () => {
    const userId = Math.floor(Math.random() * 9999);
    setUserId(userId);
  };

  return <AppContext.Provider value={{ state, userId, login }}>{children}</AppContext.Provider>;
};
