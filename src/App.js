import React from 'react';
import AppRouter from "./AppRouter";
import { useTranslation } from 'react-i18next';

function App({ themeToggler }) {
  useTranslation();

  return (
    <AppRouter themeToggler={themeToggler} />
  );
}

export default App;
