import React, { createContext, useContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // No implementation yet
  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
