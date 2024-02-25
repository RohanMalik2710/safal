// Upskill.jsx
import React from 'react';

const Upskill = () => {
  return (
    <div className="upskill-container mx-auto my-8 p-8 bg-white rounded-lg shadow-md max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Upskill Yourself</h1>
      <p className="text-lg text-gray-600 mb-8">Explore curated videos to enhance your skills and knowledge about labor rights.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="video-card">
          <h2 className="text-xl font-semibold mb-4">Know Your Labour Rights in Hindi, Credits:-"Khan GS Research Centre"</h2>
          <iframe
            className="w-full h-48 rounded-md"
            src="https://www.youtube.com/embed/kePyliKqy0o"
            title="Video Title 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="text-gray-700 mt-4">
            <p>Points Covered:</p>
            <ul>
              <li>:)Introduction to labor rights in Hindi.</li>
              <li>:)Key legal aspects every worker should know.</li>
              <li>:)Discussion on workplace safety and regulations.</li>
            </ul>
          </div>
        </div>

        <div className="video-card">
          <h2 className="text-xl font-semibold mb-4">All about Skill-INDIA INITIATIVE , Credits:-"Ajay Creations"</h2>
          <iframe
            className="w-full h-48 rounded-md"
            src="https://www.youtube.com/embed/9x_XK8OAGL0"
            title="Video Title 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="text-gray-700 mt-4">
            <p>Points Covered:</p>
            <ul>
              <li>:)Overview of the Skill-India initiative.</li>
              <li>:)Importance of skill development in the current job market.</li>
              <li>:)Opportunities available through Skill-India programs.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Few Skill India Schemes</h2>

        <div className="scheme-card">
          <h3 className="text-xl font-semibold mb-2">Pradhan Mantri Kaushal Vikas Yojana (PMKVY)</h3>
          <p className="text-gray-700 mb-4">
            PMKVY is the flagship scheme of Skill India that aims to enable a large number of Indian youth to take up industry-relevant skill training.
          </p>
          <div className="points">
            <p>Key Features:</p>
            <ul>
              <li>Skill Training Across Sectors: PMKVY offers skill training in various sectors and job roles to make individuals job-ready.</li>
              <li>Recognition of Prior Learning (RPL): The scheme recognizes and certifies the skills acquired informally and provides a formal certification for the same.</li>
              <li>Financial Rewards: Successful candidates receive financial rewards, incentivizing them to complete the skill training and certification process.</li>
              <li>Placement Assistance: PMKVY aims to provide placement assistance to skilled individuals by connecting them with potential employers.</li>
              <li>Quality Assurance: Emphasis on high-quality training infrastructure and a standardized assessment and certification process.</li>
            </ul>
          </div>
          <div className="implementation">
            <p>Implementation:</p>
            <p>PMKVY is implemented through the National Skill Development Corporation (NSDC) and its training partners across the country.</p>
          </div>
          <div className="link">
            <p>For more information, visit the <a href="https://www.pmkvyofficial.org/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 mt-8 hover:underline">PMKVY official page</a>.</p>
          </div>
        </div>

        <div className="scheme-card mt-8">
          <h3 className="text-xl font-semibold mb-2">Koshal Yozgar Yojana</h3>
          <p className="text-gray-700 mb-4">
            Koshal Yozgar Yojana focuses on promoting entrepreneurship and providing financial assistance to individuals starting their own ventures after acquiring relevant skills.
          </p>
          <div className="points">
            <p>Key Features:</p>
            <ul>
              <li>Financial Support: The scheme provides financial assistance to skilled individuals to support them in establishing their own businesses or enterprises.</li>
              <li>Entrepreneurship Development: Kaushal Yozgar Yojana encourages and supports entrepreneurship by offering guidance, mentorship, and resources.</li>
              <li>Skill Development: Individuals are expected to have undergone skill development training, making them eligible for financial support.</li>
              <li>Subsidies and Incentives: The scheme may offer subsidies, incentives, or low-interest loans to promote self-employment.</li>
            </ul>
          </div>
          <div className="implementation">
            <p>Implementation:</p>
            <p>The implementation of Kaushal Yozgar Yojana involves collaboration between the Ministry of Skill Development and Entrepreneurship, financial institutions, and various stakeholders in the entrepreneurship ecosystem.</p>
          </div>
          <div className="link">
            <p>For more information, visit the <a className="text-lg text-blue-500 mt-8 hover:underline" href="https://hkrnl.itiharyana.gov.in/" target="_blank" rel="noopener noreferrer">Koshal Yozgar Yojana "HARYANA"official page</a>.</p>
          </div>
        </div>
        <div className="scheme-card mt-8">
          <h3 className="text-xl font-semibold mb-2">National Career Service</h3>
          <p className="text-gray-700 mb-4">
          The National Career Service (NCS) is a comprehensive online platform in India designed to connect job seekers with employers and provide a range of career-related services. 
          </p>
          <div className="points">
            <p>Key Features:</p>
            <ul>
              <li>NCS offers an advanced job search functionality that considers the skills, qualifications, and preferences of job seekers. It provides personalized job recommendations.</li>
              <li>The platform provides career counseling services, offering guidance on education, training, and career paths. This helps individuals make informed decisions about their professional lives.</li>
              <li>NCS provides information about various training programs and skill development initiatives. This empowers job seekers to enhance their skills and stay competitive in the job market.</li>
              <li>NCS facilitates apprenticeship programs, allowing individuals to gain practical experience and skills in different industries.</li>
            </ul>
          </div>
          <div className="implementation">
            <p>Implementation:</p>
            <p>the National Career Service acts as a bridge between job seekers and employers, leveraging technology to streamline the job search and recruitment process while offering valuable support in skill development and career planning.</p>
          </div>
          <div className="link">
            <p>For more information, visit the <a className="text-lg text-blue-500 mt-8 hover:underline" href="https://www.ncs.gov.in/" target="_blank" rel="noopener noreferrer">National Career Service official page</a>.</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Laborers' Positive Experiences</h2>
        <h3 className="text-xl font-semibold mb-2">Success Stories from Skill India Schemes </h3> 
        <h3 className="text-xl font-semibold mb-2">Credits:-"Ministry of Skill Developmentand Entrepreneurship"</h3>
        <div className="video-card">
          <h4 className="text-xl font-semibold mb-2">STORY#1</h4>
          <iframe
            className="w-full h-50 rounded-md"
            src="https://www.youtube.com/embed/6z4TkRLxEa4"
            title="Success Stories"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-card">
          <h4 className="text-xl font-semibold mb-2">STORY#2</h4>
          <iframe
            className="w-full h-50 rounded-md"
            src="https://www.youtube.com/embed/tkCubabAiqU"
            title="Success Stories"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <p className="text-lg text-blue-500 mt-8 hover:underline">
        <a href="https://www.msde.gov.in/" target="_blank" rel="noopener noreferrer">Visit Skill-India Official Website</a>
      </p>
    </div>
  );
};

export default Upskill;

