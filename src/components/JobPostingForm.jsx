// JobPostingForm.jsx
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

const JobPostingForm = ({ onClose, skill }) => {

  // Animation spring for the happy animation
  const happyAnimation = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.8)' },
    reset: true,
  });
  
  const [jobData, setJobData] = useState({
    title: `${skill}`,
    company: '',
    location: '',
    // Add more fields as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the job data to the "jobs" collection
      const docRef = await addDoc(collection(db, 'jobs'), {
        ...jobData,
        skill,
        postedOn: new Date(),
      });

      console.log('Job posted with ID: ', docRef.id);

      // Reset form data
      setJobData({
        title: '',
        company: '',
        location: '',
        // Reset other fields as needed
      });

      happyAnimation.reset();

      // Close the form
      onClose();
    } 
    catch (error) {
      console.error('Error posting job: ', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <animated.div className="job-posting-form" style={happyAnimation}>
    <div className="job-posting-form bg-white p-8 rounded-md shadow-md mt-4">
      <h2 className="text-2xl font-bold text-blue-500 mb-4">Post a New Job for {skill}</h2>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for job details */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Title:</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Company:</label>
          <input
            type="text"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Location:</label>
          <input
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Add more input fields for other job details as needed */}
        <button
          type="submit"
          className="mt-4 px-4 py-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Post Job
        </button>
      </form>
      </div>
    </animated.div>
  );
};

export default JobPostingForm;
