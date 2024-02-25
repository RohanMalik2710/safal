// interactions.jsx

import React from 'react';

const Interactions = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Chatting Interactions</h1>
      </header>

      <section className="flex justify-between">
        <div className="w-1/2 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Labor 1</h2>
          <div className="message-container">
            {/* Dummy labor-labor conversation */}
            <div className="message mb-2">Labor 1: Hey, anyone looking for construction jobs?</div>
            <div className="message">Labor 2: Yes, I heard there's a project coming up. Let's connect!</div>
          </div>
        </div>

        <div className="w-1/2 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Labor 2</h2>
          <div className="message-container">
            {/* Dummy labor-labor conversation */}
            <div className="message mb-2">Labor 2: Yes, I heard there's a construction project. Anyone interested?</div>
            <div className="message">Labor 1: Absolutely! Let's discuss the details.</div>
          </div>
        </div>
      </section>

      <section className="flex justify-between mt-8">
        <div className="w-1/2 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Employer 1</h2>
          <div className="message-container">
            {/* Dummy employer-employer conversation */}
            <div className="message mb-2">Employer 1: We have openings for skilled workers.</div>
            <div className="message">Employer 2: Great! Do you need carpenters or electricians?</div>
          </div>
        </div>

        <div className="w-1/2 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Employer 2</h2>
          <div className="message-container">
            {/* Dummy employer-employer conversation */}
            <div className="message mb-2">Employer 2: Looking for experienced labor for a new project.</div>
            <div className="message">Employer 1: We have skilled workers available. Let's collaborate.</div>
          </div>
        </div>
      </section>

      <footer className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">In Progress</h2>
        <p className="text-gray-600">We are actively working on enhancing this page. Stay tuned for updates!</p>
      </footer>
    </div>
  );
};

export default Interactions;
