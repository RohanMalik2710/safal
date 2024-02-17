//LabourDashboard.jsx
import React, { useState, useRef, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import LabourSlider from './LabourSlider';
import DarkModeToggle from './DarkModeToggle';
import '../styles/Labour.css';
import '../styles/Form.css';

import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../firebase.config"

const LabourDashboard = () => {

  const [hoverStyle, setHoverStyle] = useState({});

  const handleHover = (e) => {
    const { clientX, clientY } = e;
    const box = e.currentTarget.getBoundingClientRect();
    const offsetX = clientX - box.left - box.width / 2;
    const offsetY = clientY - box.top - box.height / 2;

    const rotateX = -offsetY / 15; // Adjust the rotation sensitivity
    const rotateY = offsetX / 15;

    setHoverStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)`,
    });
  };

  const[count,setCount] = useState(0);
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [jobPostings, setJobPostings] = useState([]);

  const fetchJobs = async() => {
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
  }

  useEffect(() => {
    fetchJobs()
  },[count])

  const timeAgo = (date) => {
    return formatDistanceToNow(date, { addSuffix: true });
  };

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
      <p className="title-description">Jobs In Demand</p>
      <br />
      <LabourSlider onExploreClick={scrollToJobPosting} />
      <br />
      <p className="labour-description">Explore Jobs</p>
      
      <div className='job-postings-box' ref={jobPostingsRef}>
        {jobPostings.map((post) => (
          <div key={post.id} id={`job-posting-${post.id}`} className={`job-posting ${highlightedJob === post.id ? 'highlighted' : ''}`}
          onMouseMove={handleHover}
          onMouseLeave={() => setHoverStyle({})}
          style={hoverStyle}>
            <h3>{post.title}</h3>
            <p>Company: {post.company}</p>
            <p>Location: {post.location}</p>
            <p>Posted : {timeAgo(post.postedOn)}</p>
            <button
            className="apply-button"
            onClick={() => handleApply(post.id)}>
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
            <button className="apply-button" onClick={() => {
              handleFormClose();
              setCount(count+1);
            }}>Submit Application</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabourDashboard;
