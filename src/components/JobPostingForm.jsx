//JobPostingForm.jsx
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

const JobPostingForm = ({ onClose, skill }) => {
  const [jobData, setJobData] = useState({
    title: '',
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

      // Close the form
      onClose();
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
    <div className="job-posting-form">
      <h2>Post a New Job for {skill}</h2>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for job details */}
        <label>Title:</label>
        <input type="text" name="title" value={jobData.title} onChange={handleChange} />

        <label>Company:</label>
        <input type="text" name="company" value={jobData.company} onChange={handleChange} />

        <label>Location:</label>
        <input type="text" name="location" value={jobData.location} onChange={handleChange} />

        {/* Add more input fields for other job details as needed */}

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default JobPostingForm;
