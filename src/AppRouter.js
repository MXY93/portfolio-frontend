import React, { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function AppRouter({ themeToggler }) {
  return (
    <BrowserRouter basename='/'>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout themeToggler={themeToggler}><Home /></Layout>} />
          <Route path="*" element={<Layout themeToggler={themeToggler} isErrorPage={true}><NotFound /></Layout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
