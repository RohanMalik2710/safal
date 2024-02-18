// EmployerSkillPage.jsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import JobPostingForm from './JobPostingForm';

const EmployerSkillPage = () => {
  const {skill} =useParams();

  const [showJobForm, setShowJobForm] = useState(false);

  const handlePostJobClick = () => {
    setShowJobForm(true);
  };

  const handleJobFormClose = () => {
    setShowJobForm(false);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">{`${skill} Jobs`}</h2>

      {/* Add more content or components related to the specific skill */}

      {/* "Post a Job" button */}
      <button
        onClick={handlePostJobClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Post a Job
      </button>

      {/* Display Job Posting Form when showJobForm is true */}
      {showJobForm && <JobPostingForm onClose={handleJobFormClose} skill={skill} />}
    </div>
  );
};

export default EmployerSkillPage;
