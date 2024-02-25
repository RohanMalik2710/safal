// ApplyDialog.jsx
import React from 'react';

const ApplyDialog = ({ onClose, jobDetails, onApply, user }) => {
    const userName = user.name;
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <span className="absolute top-2 right-2 text-gray-600 cursor-pointer" onClick={onClose}>&times;</span>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Apply to {jobDetails.company}</h2>
          <div className="grid grid-cols-2 gap-4">
            {user && Object.keys(user).map((key) => (
              <div key={key}>
                <p className="font-semibold">{key}:</p>
                <p>{user[key]}</p>
              </div>
            ))}
          </div>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none" onClick={onApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyDialog;
