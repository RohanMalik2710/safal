import React from 'react';

const Feedback = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-md p-8 bg-gray-300 shadow-md rounded border border-gray-400">
        <p className="text-2xl font-semibold text-center mb-6">Feedback Form</p>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
          <input id="name" type="text" placeholder="Enter your full name" className="input border border-gray-400"/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email<span>*</span></label>
          <input id="email" type="text" placeholder="Enter your email" className="input border border-gray-400"/>
        </div>
        <div className="mb-4">
          <label htmlFor="impression" className="block text-sm font-medium text-gray-600">What is your overall impression?<span>*</span></label>
          <table className="w-full border border-gray-400">
            <tbody>
              <tr>
                <th className="first-col border-b border-gray-400"></th>
                <th className="border-b border-gray-400">Very Satisfied</th>
                <th className="border-b border-gray-400">Satisfied</th>
                <th className="border-b border-gray-400">Unsatisfied</th>
                <th className="border-b border-gray-400">Very Unsatisfied</th>
              </tr>
              <tr>
                <td className="first-col border-b border-gray-400">Professional</td>
                <td className="border-b border-gray-400"><input name="point#2" value="none" type="radio"/></td>
                <td className="border-b border-gray-400"><input name="point#2" value="none" type="radio"/></td>
                <td className="border-b border-gray-400"><input name="point#2" value="none" type="radio"/></td>
                <td className="border-b border-gray-400"><input name="point#2" value="none" type="radio"/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-4">
          <label htmlFor="comments" className="block text-sm font-medium text-gray-600">Feel free to add any other comments or suggestions:</label>
          <textarea id="comments" rows="5" className="w-full bg-gray-200 rounded border border-gray-400"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn">Send Feedback</button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
