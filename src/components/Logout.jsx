// Logout.jsx
import React from 'react';
import { auth } from '../firebase.config';
import { signOut } from 'firebase/auth';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Successfully logged out, you can redirect or perform other actions here
    } catch (error) {
      console.error('Logout failed:', error.message);
      // Handle logout error
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default Logout;
