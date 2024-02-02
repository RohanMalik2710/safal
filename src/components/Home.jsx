import React from 'react';
import '../styles/Home.css'; 

const Home = () => {
  return (
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
  );
};

export default Home;
