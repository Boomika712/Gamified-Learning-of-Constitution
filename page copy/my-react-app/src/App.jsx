import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import Part5 from './components/Part5';
import Part6 from './components/Part6';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/part5" element={<Part5 />} />
        <Route path="/part6" element={<Part6 />} />
      </Routes>
    </Router>
  );
}

export default App;


