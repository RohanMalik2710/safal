import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SkillBox = ({ skill, imageSrc, boxColor, boxMargin }) => {
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

  return (
    <div
      className={`rounded-lg overflow-hidden shadow-lg h-full ${boxColor} ${boxMargin}`}
      onMouseMove={handleHover}
      onMouseLeave={() => setHoverStyle({})}
      style={hoverStyle}
    >
      <div className="text-center p-4">
        <h2 className="text-xl font-bold mb-2">{skill}</h2>
      </div>
      <img src={imageSrc} alt={skill} className="w-80 h-40 object-cover" />
    </div>
  );
};
const EmployerDashboard = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-4 py-8 min-w-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Employer Dashboard</h1>
        <p className="text-gray-600 mb-6 text-center">Welcome to the portal to hire skilled and unskilled laborers.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/carpentry" className="group">
            <SkillBox
              skill="Carpentry"
              imageSrc="src/assets/carpentry.jpg" 
              boxColor="bg-blue-50"
              boxMargin="mx-3 my-3"
            />
          </Link>
          <Link to="/plumbing" className="group">
            <SkillBox
              skill="Plumbing"
              imageSrc="src/assets/plumber.jpg" 
              boxColor="bg-blue-50"
              boxMargin="mx-3 my-3"
            />
          </Link>
          <Link to="/welding" className="group">
            <SkillBox
              skill="Welding"
              imageSrc="src/assets/welding.jpg" 
              boxColor="bg-blue-50"
              boxMargin="mx-3 my-3"
            />
          </Link>
          <Link to="/general-labour" className="group">
            <SkillBox
              skill="General Labour"
              imageSrc="src/assets/general-labour.jpg" 
              boxColor="bg-blue-50"
              boxMargin="mx-3 my-3"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <Link to="/cleaning" className="group">
            <SkillBox
              skill="Cleaning"
              imageSrc="src/assets/cleaner.jpg" 
              boxColor="bg-blue-50"
              boxMargin="mx-3 my-3"
            />
          </Link>
          <Link to="/general-labour" className="group">
            <SkillBox
              skill="General Labour"
              imageSrc="src/assets/general-labour.jpg" 
              boxColor="bg-blue-50"
              boxMargin="mx-3 my-3"
            />
          </Link>
          <Link to="/general-labour" className="group">
            <SkillBox
              skill="General Labour"
              imageSrc="src/assets/general-labour.jpg" 
              boxColor="bg-blue-50"
              boxMargin="mx-3 my-3"
            />
          </Link>
          <Link to="/general-labour" className="group">
            <SkillBox
              skill="General Labour"
              imageSrc="src/assets/general-labour.jpg" 
              boxColor="bg-blue-50"
              boxMargin="mx-3 my-3"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
