// EmployerSkillPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import JobPostingForm from './JobPostingForm';
import LoginDialog from './LoginDialog'; // Import the LoginDialog component
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';

const EmployerSkillPage = () => {
  const { skill } = useParams();

  const [showJobForm, setShowJobForm] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false); // State to control the visibility of the login dialog
  const [user, setUser] = useState(null); // Local state to store user information

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handlePostJobClick = () => {
    // Check if the user is logged in
    if (!user) {
      setShowLoginDialog(true);
    } else {
      setShowJobForm(true);
    }
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

      {/* Display LoginDialog when showLoginDialog is true */}
      {showLoginDialog && <LoginDialog onClose={() => setShowLoginDialog(false)} />}
    </div>
  );
};

export default EmployerSkillPage;
