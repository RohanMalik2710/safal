// EmployerDashboard.jsx
import React, { useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import EmployerSkillPage from './EmployerSkillPage';
import '../styles/Employer.css';

const SkillBox = ({ skill, imageSrc, boxColor }) => {
  const navigate = useNavigate();

  const handleSkillBoxClick = () => {
    navigate(`/skills/${skill.toLowerCase()}`);
  };

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${boxColor} cursor-pointer mb-8`} onClick={handleSkillBoxClick}>
      <div className="text-center p-4">
        <h2 className="text-xl font-bold text-white">{skill}</h2>
      </div>
      <img src={imageSrc} alt={skill} className="w-full h-40 object-cover" />
    </div>
  );
};
const EmployerDashboard = () => {
  return (
    <div className="layout">
      <Routes>
        <Route path="/skills/:skill" element={<EmployerSkillPage />} />
      </Routes>

      <div className="column">
        <SkillBox skill="Carpentry" imageSrc="src/assets/carpentry.jpg" boxColor="bg-blue-600" />
        <SkillBox skill="Plumber" imageSrc="src/assets/plumber.jpg" boxColor="bg-blue-600" />
      </div>

      <div className="column">
        <SkillBox skill="Cleaner" imageSrc="src/assets/cleaner.jpg" boxColor="bg-blue-600" />
        <SkillBox skill="General Labour" imageSrc="src/assets/general-labour.jpg" boxColor="bg-blue-600" />
        {/* Add more SkillBoxes as needed */}
      </div>

     <div className="column">
       <SkillBox skill="Welding" imageSrc="src/assets/welding.jpg" boxColor="bg-blue-600" />
       <SkillBox skill="General Labour" imageSrc="src/assets/general-labour.jpg" boxColor="bg-blue-600" />
       {/* Add more SkillBoxes as needed */}
     </div>
    </div>
  );
};

export default EmployerDashboard;
