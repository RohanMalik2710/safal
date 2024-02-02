import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PlumbingJobPost = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    budget: '',
    location: ''
  });
  const [availableLaborers, setAvailableLaborers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate posting job to server
      const response = await postJobToServer(jobDetails);
      if (response.ok) {
        // Job posted successfully, now fetch available laborers
        const laborersData = await fetchAvailableLaborers();
        setAvailableLaborers(laborersData);
      } else {
        console.error('Failed to post job');
      }
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  const fetchAvailableLaborers = async () => {
    // Simulate fetching available laborers from server
    return mockLaborers;
  };

  const postJobToServer = async (jobDetails) => {
    // Simulate posting job to server
    return { ok: true }; // Mock response
  };

  useEffect(() => {
    // Fetch available laborers when component mounts
    const fetchLaborers = async () => {
      const laborersData = await fetchAvailableLaborers();
      setAvailableLaborers(laborersData);
    };
    fetchLaborers();
  }, []);

  // Mock data for demonstration
  const mockLaborers = [
    { id: 1, name: 'John Doe', expertise: 'Plumbing', rating: 4.5 },
    { id: 2, name: 'Jane Smith', expertise: 'Plumbing', rating: 4.2 },
    // Other mock laborer data
  ];

  return (
    <div className="container mx-auto px-4 py-8 min-w-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Post a Plumbing Job</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Job posting form fields */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Title:</label>
          <input type="text" id="title" name="title" value={jobDetails.title} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        {/* Other form fields (description, budget, location) */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Post Job</button>
      </form>

      {/* Link to PlumbingLaborers component */}
      <div className="mt-4 text-center">
        <Link to="/plumbing/laborers" className="text-blue-500 hover:underline">View Available Laborers</Link>
      </div>
    </div>
  );
};

export default PlumbingJobPost;