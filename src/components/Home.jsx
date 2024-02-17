//Home.jsx

import React from 'react';
import '../styles/Home.css'; 

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="image-container">
          <video autoPlay loop muted>
            <source src="src/assets/home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="content-container">
          <div className="title">
            <h1 id="title">Be The Fastest In Getting Mazdoor at <span id="doorStep">DoorStep</span></h1>
          </div>
          <p id="description">To provide an easy platform for builders to hire the laborers</p>
          <div id="button">Find Mazdoor</div>
        </div>
      </div>
      {/* New div outside home-container */}
      <div className="new-div">
        <h2 id="serve-title">WHAT WE SERVE</h2>
        <p id="serve-info">Your Favorite Labor Finding Partner</p>
        {/* Images column */}
        <div className="image-column">
          <img src="src/assets/slider4.jpg" alt="First Image" />
          <img src="src/assets/slider4.jpg" alt="Second Image" />
          <img src="src/assets/slider4.jpg" alt="Third Image" />
        </div>

        <div className="our-mission">
          <div className="mission-content">
            <img src="src/assets/images.png" alt="Company Image" />
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>At LaborConnect, our mission is to bridge the gap between laborers and employers by providing a dedicated platform for both parties.</p>
              <p>We aim to empower laborers by connecting them with job opportunities that match their skills and expertise, while also assisting employers in finding reliable and skilled workers efficiently.</p>
            </div>
          </div>
        </div>


        {/* Our Team Section */}
        <div className="our-team">
          <h2>Our Team</h2>
          <div class="team-member">
            <a href="https://www.linkedin.com/in/john-doe">
              <img src="src/assets/slider4.jpg" alt="John Doe" />
            </a>
            <p>John Doe</p>
          </div>
          <div class="team-member">
            <a href="https://www.linkedin.com/in/jane-smith">
              <img src="src/assets/slider4.jpg" alt="Jane Smith" />
            </a>
            <p>Jane Smith</p>
          </div>
          <div class="team-member">
            <a href="https://www.linkedin.com/in/tom-brown">
              <img src="src/assets/slider4.jpg" alt="Tom Brown" />
            </a>
            <p>Tom Brown</p>
          </div>
          <div class="team-member">
            <a href="https://www.linkedin.com/in/tom-brown">
              <img src="src/assets/slider4.jpg" alt="Tom Brown" />
            </a>
            <p>Tom Brown</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;