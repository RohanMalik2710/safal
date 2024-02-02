//LabourDashboard.jsx
import React, { useState, useRef, useEffect } from 'react';
import LabourSlider from './LabourSlider';
import DarkModeToggle from './DarkModeToggle';
import '../styles/Labour.css';
import '../styles/Form.css'; // Import Form.css for styling the form

const LabourDashboard = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [jobPostings, setJobPostings] = useState(Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Job Posting ${i + 1}`,
    company: `Company ${i + 1}`,
    location: `City ${i + 1}`,
  })));

  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [highlightedJob, setHighlightedJob] = useState(null);


  const handleApply = (postId) => {
    setShowApplyForm(postId);
    setSelectedJob(postId);
  };

  const handleFormClose = () => {
    setShowApplyForm(false);
    setSelectedJob(null);
  };

  const jobPostingsRef = useRef(null);

  const scrollToJobPosting = (postId) => {
    // Use the postId to identify the job posting in the list
    // Here, I'm assuming postId corresponds to the job posting's id
    const jobPostingElement = document.getElementById(`job-posting-${postId}`);

    if (jobPostingElement) {
      jobPostingElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setHighlightedJob(postId);
      // Reset highlighted job after a short duration (e.g., 1000 milliseconds)
      setTimeout(() => {
        setHighlightedJob(null);
        }, 1500);
    }
  };

  return (
    <div className={`labour-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
      <LabourSlider onExploreClick={scrollToJobPosting} />
      <br />
      <p className="labour-description">Explore Jobs</p>

      <div className='job-postings-box' ref={jobPostingsRef}>
        {jobPostings.map((post) => (
          <div key={post.id} id={`job-posting-${post.id}`} className={`job-posting ${highlightedJob === post.id ? 'highlighted' : ''}`}>
            <h3>{post.title}</h3>
            <p>Company: {post.company}</p>
            <p>Location: {post.location}</p>
            <button
              className="apply-button"
              onClick={() => handleApply(post.id)}
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {showApplyForm && (
        <div className="job-application-form-overlay">
          <div className="job-application-form">
            <span className="close-button" onClick={handleFormClose}>&times;</span>
            <div className='job-application-form-top-bar'>
            <img className='back-arrow-image' src="src/assets/back-arrow.png" alt="back" onClick={handleFormClose}/>
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
            <button className="apply-button" onClick={handleFormClose}>Submit Application</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabourDashboard;
