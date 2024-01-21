// LabourDashboard.jsx
import React, { useState } from 'react';
import FeaturedOpportunitiesSlider from './FeaturedOpportunitiesSlider';
import '../styles/Labour.css';

const LabourDashboard = () => {
  // Simulated job postings data
  const [jobPostings, setJobPostings] = useState([
    { id: 1, title: 'Construction Worker', company: 'ABC Construction', location: 'City A' },
    { id: 2, title: 'Warehouse Associate', company: 'XYZ Warehousing', location: 'City B' },
    // Add more job postings as needed
  ]);

  const handleApply = (postId) => {
    // Simulate applying for a job by updating state
    setJobPostings((prevPostings) =>
      prevPostings.map((post) =>
        post.id === postId ? { ...post, applied: true } : post
      )
    );
  };

  return (
    <div className="labour-container">
      <h1 className="labour-header">Labour Dashboard</h1>
      <p className="labour-description">Explore featured job opportunities:</p>
      <FeaturedOpportunitiesSlider />

      <div>
        <h2>Job Postings</h2>
        {jobPostings.map((post) => (
          <div key={post.id} className="job-posting">
            <h3>{post.title}</h3>
            <p>Company: {post.company}</p>
            <p>Location: {post.location}</p>
            {!post.applied && (
              <button
                className="apply-button"
                onClick={() => handleApply(post.id)}
              >
                Apply
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabourDashboard;
