import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkmode');
      document.body.classList.remove('lightmode');
    } else {
      document.body.classList.add('lightmode');
      document.body.classList.remove('darkmode');
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
