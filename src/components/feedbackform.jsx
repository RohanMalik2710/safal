import React, { useState } from 'react';
import '../styles/feedbackform.css';

const FeedbackForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [showResponseMessage, setShowResponseMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (!email.includes('@gmail.com')) {
      setEmailError(true);
      setTimeout(() => {
        setEmailError(false);
      }, 3000); // 3000 milliseconds = 3 seconds
      return;
    }
    setSubmitted(true);
    setShowResponseMessage(true);
    setTimeout(() => {
      setShowResponseMessage(false);
    }, 3000); // 3000 milliseconds = 3 seconds
  };
  

  return (
    <div className='box'>
      <div className="form-container">
        {submitted && showResponseMessage && (
          <div className="response-message">
            Your response has been recorded.
          </div>
        )}
        {emailError && (
          <div className="error-message">
            Please enter a valid Email.
          </div>
        )}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Be Better?</label>
            <textarea name="textarea" id="textarea" rows="10" cols="50" required></textarea>
          </div>
          <button className="form-submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;