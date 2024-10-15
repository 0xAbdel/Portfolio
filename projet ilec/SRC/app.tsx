import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Company from './pages/Company';
import TechNews from './pages/TechNews';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/company" element={<Company />} />
            <Route path="/tech-news" element={<TechNews />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;