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
              <div className="flex items-center justify-center -ml-20 mt-0.5">
                <div className="rounded-lg p-5">
                  <div className="flex">
                    <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                      <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                        <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                      </svg>
                    </div>
                    <input type="text" className="w-[470px] bg-white pl-2 text-base font-semibold outline-0" placeholder="Search Jobs"
                      onChange={inputHandler} id="outlined-basic" />
                    <input type="button" value="Search" className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" />
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
                <div className="user-info flex flex-row" onClick={handleDropdownToggle}>
                  {/* Display user details in the navbar */}
                  {userData.name && <span className="text-white mr-4">{userData.name}</span>}
                  {/* Display anonymous user profile pic */}
                  <img src={profilePicture} alt="Profile" className="h-5" />
                </div>
              )}

              {/* Dropdown with additional user details */}
            {isDropdownOpen && userData && (
              <div className="dropdown">
                {/* Display other user details in the dropdown */}
                <div>
                  <strong>Email:</strong> {userData.email}
                </div>
                <div>
                  <strong>Phone:</strong> {userData.phone}
                </div>
                <div>
                  <strong>Aadhar:</strong> {userData.aadhar}
                </div>
                {/* Add other user details as needed */}
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
