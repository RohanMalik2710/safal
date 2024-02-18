// EmployerDashboard.jsx
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import EmployerSkillPage from './EmployerSkillPage';
import '../styles/Employer.css';

const SkillBox = ({ skill, imageSrc, boxColor }) => {

  const [hoverStyle, setHoverStyle] = useState({});

  const handleHover = (e) => {
    const { clientX, clientY } = e;
    const box = e.currentTarget.getBoundingClientRect();
    const offsetX = clientX - box.left - box.width / 2;
    const offsetY = clientY - box.top - box.height / 2;

    const rotateX = -offsetY / 15; // Adjust the rotation sensitivity
    const rotateY = offsetX / 15;

    setHoverStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)`,
    });
  };
  
  const navigate = useNavigate();

  const handleSkillBoxClick = () => {
    navigate(`/employer/${skill}`);
  };

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${boxColor} cursor-pointer mb-8`} onClick={handleSkillBoxClick}
    onMouseMove={handleHover}
    onMouseLeave={() => setHoverStyle({})}
    style={hoverStyle}>
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
        <Route path="/employer/:skill" element={<EmployerSkillPage />} />
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
