import React, { useState, createContext } from 'react';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({});

  const login = () => {
    const userId = Math.floor(Math.random() * 9999);
    setState({ ...state, userId: userId });
  };

  return <AppContext.Provider value={{ state, login }}>{children}</AppContext.Provider>;
};
