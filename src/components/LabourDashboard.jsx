import React, { useState, useRef, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import LabourSlider from './LabourSlider';
import DarkModeToggle from './DarkModeToggle';
import '../styles/Labour.css';
import '../styles/Form.css';

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

const LabourDashboard = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [jobPostings, setJobPostings] = useState([]);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [highlightedJob, setHighlightedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [showCancelSearch, setShowCancelSearch] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const fetchJobs = async () => {
    const tempJobs = []
    const q = query(collection(db, "jobs"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tempJobs.push({
        ...doc.data(),
        id: doc.id,
        postedOn: doc.data().postedOn.toDate()
      })
    });
    setJobPostings(tempJobs);
  };

  useEffect(() => {
    fetchJobs()
  }, [count]);

  const timeAgo = (date) => {
    return formatDistanceToNow(date, { addSuffix: true });
  };

  const inputHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const jobPostingsRef = useRef(null);

  const scrollToJobPosting = (postId) => {
    const jobPostingElement = document.getElementById(`job-posting-${postId}`);

    if (jobPostingElement) {
      jobPostingElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setHighlightedJob(postId);
      setTimeout(() => {
        setHighlightedJob(null);
      }, 1500);
    }
  };

  const searchHandler = () => {
    setShowLoading(true);
    setShowCancelSearch(true);
    setTimeout(() => {
      const filteredJobs = jobPostings.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResult(filteredJobs);
      setShowLoading(false);
    }, 3000);
  };

  const handleApply = (postId) => {
    setShowApplyForm(postId);
    setSelectedJob(postId);
  };

  const handleFormClose = () => {
    setShowApplyForm(false);
    setSelectedJob(null);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchHandler();
    }
  };

  const handleCancelSearch = () => {
    setShowCancelSearch(false);
    window.location.reload();
  };

  return (
    <div className={`labour-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <p className="title-description">Jobs In Demand</p>
      <br />
      <LabourSlider onExploreClick={scrollToJobPosting} />
      <br />
      <p className="labour-description">Explore Jobs</p>
      <div className="search-bar">
        <FaSearch className="search-icon" /> {/* Search icon */}
        <input
          type="text"
          placeholder="Search Jobs"
          value={searchTerm}
          onChange={inputHandler}
          onKeyPress={handleKeyPress}
          className="search-input"
        />
        <button className="search-button" onClick={searchHandler}>Search</button>
        {showCancelSearch && (
          <button className="cancel-search-button" onClick={handleCancelSearch}>
            Cancel Search
          </button>
        )}
      </div>
      {showLoading && (
        <div className="loading-container">
          <div className="boxes">
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      {!showLoading && (
        <div className='job-postings-box' ref={jobPostingsRef}>
          {(searchResult.length > 0 ? searchResult : jobPostings).map((post) => (
            <div key={post.id} id={`job-posting-${post.id}`} className={`job-posting ${highlightedJob === post.id ? 'highlighted' : ''}`}>
              <h3>{post.title}</h3>
              <p>Company: {post.company}</p>
              <p>Location: {post.location}</p>
              <p>Posted : {timeAgo(post.postedOn)}</p>
              <button
                className="apply-button"
                onClick={() => handleApply(post.id)}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      )}
      {showApplyForm && (
        <div className="job-application-form-overlay">
          <div className="job-application-form">
            <span className="close-button" onClick={handleFormClose}>&times;</span>
            <div className='job-application-form-top-bar'>
              <img className='back-arrow-image' src="src/assets/back-arrow.png" alt="back" onClick={handleFormClose} />
              <h2 className='job-application-form-title'>Apply to {jobPostings.find(job => job.id === selectedJob)?.company}</h2>
            </div>
            <label>Email:</label>
            <input type="email" />
            <label>Phone Number:</label>
            <input type="tel" />
            <label>Password:</label>
            <input type="password" />
            <label>Aadhar Card Number:</label>
            <input type="text" />
            <label>Upload Aadhar Card Picture:</label>
            <input type="file" accept="image/*" />
            <button className="apply-button" onClick={() => {
              handleFormClose();
              setCount(count + 1);
            }}>Submit Application</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabourDashboard;
