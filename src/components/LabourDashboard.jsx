// LabourDashboard.jsx
import React, { useState } from 'react';
import LabourSlider from './LabourSlider';
import '../styles/Labour.css';
import '../styles/Form.css'; // Import Form.css for styling the form

const LabourDashboard = () => {
  const [jobPostings, setJobPostings] = useState(Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Job Posting ${i + 1}`,
    company: `Company ${i + 1}`,
    location: `City ${i + 1}`,
  })));

  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (postId) => {
    setShowApplyForm(true);
    setSelectedJob(postId);
  };

  const handleFormClose = () => {
    setShowApplyForm(false);
    setSelectedJob(null);
  };

  return (
    <div className="labour-container">
      <p className="labour-description">Explore Jobs</p>
      <LabourSlider />

      <div className='job-postings-box'>
        <h2>Job Postings</h2>
        {jobPostings.map((post) => (
          <div key={post.id} className="job-posting">
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
            <h2>Job Application Form</h2>
            {/* Add your form fields here */}
            <button className="apply-button" onClick={handleFormClose}>Submit Application</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabourDashboard;
