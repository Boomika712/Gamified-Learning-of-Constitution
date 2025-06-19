import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import LandingPage from './components/WordGames/LandingPage';

const App = () => {
  return (
    <>
      {/* Routing */}
      <Router>
        <Routes>
          {/* Default route to the Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Redirect any invalid routes to the Landing Page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
