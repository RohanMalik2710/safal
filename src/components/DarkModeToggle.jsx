// DarkModeToggle.jsx
import React, {useState} from 'react';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`dark-mode-toggle ${darkMode ? 'dark' : ''}`} onClick={toggleDarkMode}>
      <div className="slider"></div>
    </div>
  );
};

export default DarkModeToggle;
