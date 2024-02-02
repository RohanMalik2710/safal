import React from 'react';
import { Link } from 'react-router-dom';


const SkillBox = ({ skill, imageSrc, boxColor, boxMargin }) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg h-full ${boxColor} ${boxMargin}`}>
      <div className="text-center p-4">
        <h2 className="text-xl font-bold mb-2">{skill}</h2>
      </div>
      <img src={imageSrc} alt={skill} className="w-80 h-40 object-cover" />
    </div>
  );
};

const EmployerDashboard = () => {
  return (
    <div>
      <h1 >Employer Dashboard</h1>
      <p>Welcome to the portal to hire skilled and unskilled laborers.</p>
      {/* Add hiring portal components here */}
    </div>
  );
};
export default EmployerDashboard;