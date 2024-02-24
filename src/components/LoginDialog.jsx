// LoginDialog.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LoginDialog = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 w-96 rounded-md">
        <span className="text-2xl font-bold text-gray-800 mb-4">Login Required</span>
        <p className="text-gray-600 mb-4">Please log in to perform this action.</p>
        <Link
          to="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={onClose}
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default LoginDialog;
