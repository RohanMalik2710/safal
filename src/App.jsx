import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import LabourDashboard from './components/LabourDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import FeedbackForm from './components/feedbackform'; // Correct the import
import DarkModeToggle from './components/DarkModeToggle';
import EmployerSkillPage from './components/EmployerSkillPage';
import Footer from './components/Footer';

import './index.css';

import companyLogo from './assets/safal-logo.png';

const App = () => {

  const [inputText, setInputText] = useState("");
  let inputHandler = (input) => {
    var lowerCase = input.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="header">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <div className="flex items-center justify-center -ml-20 mt-0.5">
                <div class="rounded-lg p-5">
                  <div class="flex">
                    <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                      <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-5 fill-gray-500 transition">
                        <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45l3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                      </svg>
                    </div>
                    <input type="text" class="w-[470px] bg-white pl-2 text-base font-semibold outline-0" placeholder="Search Jobs" 
                    onChange={inputHandler} id="outlined-basic"/>
                    <input type="button" value="Search" class="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"/>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/labour" className="nav-link">Labour</Link>
            </li>
            <li className="nav-item">
              <Link to="/employer" className="nav-link">Employer</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Signup</Link>
            </li>
            <li className="nav-item">
              <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
            </li>
          </ul>
        </nav>
      </div>
      
      <Routes>
        <Route path="/FeedbackForm" element={<FeedbackForm />} /> {/* Use FeedbackForm component */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/labour" element={<LabourDashboard />} />
        <Route path="/employer/*" element={<EmployerDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employer/:skill/*" element={<EmployerSkillPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;