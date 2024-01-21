// Home.jsx
import React from 'react';
import HomeSlider from './HomeSlider';

const Home = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h2>Featured Opportunities</h2>
      </div>
      <HomeSlider />
      <h1>Welcome to Safal!</h1>
      <p>Empowering skilled and unskilled laborers with quality employment opportunities.</p>
      <h2>Our Mission</h2>
      <p>
        At Safal, we are committed to bridging the gap between employers and skilled/unskilled laborers.
        Our mission is to provide a user-friendly platform that facilitates quick and quality employment opportunities,
        creating a caring and humane society.
      </p>
    </div>
  );
};

export default Home;
