// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import LabourDashboard from './components/LabourDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import DarkModeToggle from './components/DarkModeToggle'; // Import the DarkModeToggle component
import './index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/labours" className="nav-link">Labours</Link>
          </li>
          <li className="nav-item">
            <Link to="/employers" className="nav-link">Employers</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/labours" element={<LabourDashboard />} />
        <Route path="/employers" element={<EmployerDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
