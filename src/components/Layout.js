import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";

export default function Layout({ children, themeToggler, isErrorPage }) {
  return (
    <div className="fullContainer">
      {!isErrorPage && <Header themeToggler={themeToggler} />}
      <main>{children}</main>
      {!isErrorPage && <Footer />}
    </div>
  );
}
