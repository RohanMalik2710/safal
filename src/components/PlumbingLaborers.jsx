import React from 'react';

// Sample data for demonstration
const laborersData = [
  { name: 'John Doe', rating: 4.9, expertise: 'Plumbing' },
  { name: 'Jane Smith', rating: 4.3, expertise: 'Plumbing' },
  { name: 'Michael Johnson', rating: 4.7, expertise: 'Plumbing' },
  { name: 'Emily Davis', rating: 4.8, expertise: 'Plumbing' }
];

const PlumbingLaborers = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-w-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Plumbing Laborers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {laborersData.map((laborer, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={`https://via.placeholder.com/300x200?text=${laborer.name}`} alt={laborer.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{laborer.name}</h3>
              <p className="text-gray-600 mb-2">Expertise: {laborer.expertise}</p>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.798 2.46a1 1 0 011.404 0l2.193 2.192a1 1 0 01.086 1.32l-1.625 2.69 2.294 2.293a1 1 0 010 1.414l-2.192 2.192a1 1 0 01-1.32.087l-2.69-1.626L7.81 15.49a1 1 0 01-.31.2l-2.693 1.077a1 1 0 01-1.32-.86l-.86-2.692a1 1 0 01.198-.745l1.624-2.69L.464 8.105a1 1 0 010-1.415l2.193-2.192a1 1 0 011.32-.086l2.69 1.625L9.5.5a1 1 0 01.298-.04z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">{laborer.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlumbingLaborers;
