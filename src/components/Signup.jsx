// Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Signup = () => {
  const [userData, setUserData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    aadhar: '',
    password: '',
    accountType: '', // To store whether it's a Labour or Employer account
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    // Implement signup functionality
    // You can access the selected account type using userData.accountType
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">Sign Up</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          {/* ... Other fields ... */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="aadhar" className="block text-sm font-medium text-gray-600">
              Aadhar
            </label>
            <input
              id="aadhar"
              name="aadhar"
              type="text"
              autoComplete="aadhar"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Account Type</label>
            <select
              name="accountType"
              id="accountType"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleInputChange}
            >
              <option value="">Select Account Type</option>
              <option value="labour">Labour</option>
              <option value="employer">Employer</option>
            </select>
          </div>
          {/* ... Other fields ... */}
          <div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p>
        Don't have an account? <Link to="/Login" className="signup-link">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
