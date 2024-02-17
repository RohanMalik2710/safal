// EmployerSkillPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JobPostingForm from './JobPostingForm';

const EmployerSkillPage = ({ skill }) => {
  const [showJobForm, setShowJobForm] = useState(false);

  const handlePostJobClick = () => {
    setShowJobForm(true);
  };

  const handleJobFormClose = () => {
    setShowJobForm(false);
  };

  return (
    <div>
      <h2>{skill} Jobs</h2>

      {/* Add more content or components related to the specific skill */}

      {/* "Post a Job" button */}
      <button onClick={handlePostJobClick}>Post a Job</button>

      {/* Display Job Posting Form when showJobForm is true */}
      {showJobForm && <JobPostingForm onClose={handleJobFormClose} skill={skill} />}
    </div>
  );
};

export default EmployerSkillPage;
