import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import LabourDashboard from './components/LabourDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import DarkModeToggle from './components/DarkModeToggle';
import EmployerSkillPage from './components/EmployerSkillPage';
import Footer from './components/Footer';
import companyLogo from './assets/safal-logo.png';
import Logout from './components/Logout';
import { onAuthStateChanged, signOut } from 'firebase/auth';  // Import onAuthStateChanged and signOut from Firebase

import { doc, getDoc } from 'firebase/firestore';

// Import Firebase database and auth functions
import { db,auth } from './firebase.config';

import profilePicture from './assets/profile-picture.png';

const App = () => {
  const [user, setUser] = useState(null);  
  const [userData, setUserData] = useState(null); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
          

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

    // Fetch additional user details from Firestore
    if (user) {
      const docRef = doc(db, 'users', user.uid);
      const fetchData = async () => {
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          }
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      };

      fetchData();
    }
  });
    return () => unsubscribe();
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [inputText, setInputText] = useState("");
  let inputHandler = (input) => {
    var lowerCase = input.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error logging out: ', error.message);
    }
  };

  return (
    <Router>
      <div className="header">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
        <nav className="navbar">
          <ul className="nav-list">
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
                <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/signup" className="nav-link">Signup</Link>
            </li>
            <li className="nav-item">
              <div id="google_translate_element"></div>
            </li>
            <div className="user-details">
            {user && userData && (
              <div className="user-info relative flex flex-row -ml-20" onClick={handleDropdownToggle}>
                {/* Initially display only profile picture username in the navbar */}
                <img src={profilePicture} alt="Profile" className="h-8 mt-1 mr-4 cursor-pointer" />
                {userData.name && <span className="text-white font-semibold mt-2 cursor-pointer">{userData.name}</span>}

                {/* Dropdown with additional user details */}
                {isDropdownOpen && (
                  <div className="dropdown absolute top-10 right-0 bg-white border rounded p-2">
                    {/* Display all user details in the dropdown */}
                    <div>
                      <strong>Name:</strong> {userData.name}
                    </div>
                    <div>
                      <strong>Email:</strong> {userData.email}
                    </div>
                    <div>
                      <strong>Phone:</strong> {userData.phone}
                    </div>
                    <div>
                      <strong>Aadhar:</strong> {userData.aadhar}
                    </div>
                    <div>
                      <strong>User Type:</strong> {userData.userType}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
            <li className="nav-item">
              <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/labour" element={<LabourDashboard />} />
        <Route path="/employer/*" element={<EmployerDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employer/:skill/*" element={<EmployerSkillPage />} />
      </Routes>

      <Footer></Footer>
    </Router>
  );
};

export default App;
