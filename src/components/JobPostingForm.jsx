// JobPostingForm.jsx
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

const JobPostingForm = ({ onClose, skill }) => {
  const [jobData, setJobData] = useState({
    title: `${skill}`,
    company: '',
    location: '',
    // Add more fields as needed
  });
  const [isJobPosted, setIsJobPosted] = useState(false);

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
        title: `${skill}`,
        company: '',
        location: '',
        // Reset other fields as needed
      });

      // Set job posted state to true for celebration message
      setIsJobPosted(true);

      // Close the form after a delay
      setTimeout(() => {
        onClose();
        setIsJobPosted(false);
      }, 3000); // 3000 milliseconds (3 seconds)
    } catch (error) {
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
    <div className="job-posting-form fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Post a New Job for {skill}</h2>

      {isJobPosted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 my-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Job posted successfully</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Add input fields for job details */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Title:</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Company:</label>
          <input
            type="text"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
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
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobPostingForm;
