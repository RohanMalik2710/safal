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
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from './firebase.config';
import profilePicture from './assets/profile-picture.png';
import Interactions from './components/Interactions';
import Upskill from './components/Upskill';

const App = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userType, setUserType] = useState(null);

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

  const handleDropdownToggle = (option) => {
    // If the selected option is already open, close it
    if (isDropdownOpen && selectedOption === option) {
      setIsDropdownOpen(false);
      setSelectedOption(null);
    } else {
      // Otherwise, open the dropdown for the selected option
      setIsDropdownOpen(true);
      setSelectedOption(option);
    }
  };

  const [inputText, setInputText] = useState("");
  const inputHandler = (input) => {
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
              <Link to="/interactions" className="nav-link">Interactions</Link>
            </li>
            <li className="nav-item">
              <Link to="/upskill" className="nav-link">Upskill</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <div id="google_translate_element"></div>
            </li>
            <div className="user-details">
              {user && userData && (
                <div className="user-info relative flex flex-row -mr-0" onClick={() => handleDropdownToggle('')}>
                  <img src={profilePicture} alt="Profile" className="h-8 mt-1 mr-4 cursor-pointer" />
                  {userData.name && <span className="text-white font-semibold mt-2 cursor-pointer">{userData.name}</span>}

                  {isDropdownOpen && (
                    <div className="dropdown absolute top-10 right-0 bg-white border rounded p-2 z-20">
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

                      {user && userData && userData.userType === 'Employer' && (
                        <button onClick={() => handleDropdownToggle('createdPostings')} className="my-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                          Created Postings
                        </button>
                      )}

                      {user && userData && userData.userType === 'Labour' && (
                        <button onClick={() => handleDropdownToggle('appliedPostings')} className="my-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
                          Applied Postings
                        </button>
                      )}

                      <button onClick={handleLogout} className="my-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300">
                        Logout
                      </button>
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
        <Route path="/upskill" element={<Upskill/>} />
        <Route path="/interactions" element={<Interactions/>} />
      </Routes>

      <Footer></Footer>
    </Router>
  );
};

export default App;
