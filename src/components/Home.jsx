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
            <h1 id="title">One stop portal for Labours and Employers</h1>
          </div>
          <p id="description">An easy platform to Hire</p>
          <p id="description">And get Hired</p>
        </div>
      </div>
      {/* New div outside home-container */}
      <div className="new-div">
      <h2 id="content-title">WHAT WE SERVE</h2>
        
        <div class="serve-sections">
          <div class="serve-section1">
            <img src="src/assets/labour.png" alt="Labor Finding Image" />
            <h3>Labors</h3>
            <p>We help the individuals to connect with job opportunities.</p>
          </div>

          <div class="serve-section2">
            <img src="src/assets/employers.png" alt="Employer Finding Image" />
            <h3>Employers</h3>
            <p>We assist employers in finding suitable labor for their needs.</p>
          </div>
        </div>


        <div className="our-mission" id="mission">
        <h2 id="content-title">OUR MISSION</h2>
          <div className="mission-content">
            <img src="./src/assets/safal-logo.png" alt="Company Image" />
            <div className="mission-text">
            <p>At SAFAL, our mission is to bridge the gap between laborers and employers by providing a dedicated platform for both parties.</p>
            <p>We aim to empower laborers by connecting them with job opportunities that match their skills and expertise.</p>
            <p>Through our platform, laborers can access a wide range of job listings and apply to positions that suit their preferences.</p>
            <p>Additionally, we provide tools and resources to help laborers enhance their skills and improve their employability.</p>
            <p>On the other hand, we assist employers in finding reliable and skilled workers efficiently.</p>
            <p>Employers can post job listings, search for laborers, and manage the hiring process seamlessly through our platform.</p>
            </div>
          </div>
        </div>


        {/* Our Team Section */}
        <div className="our-team"  id="team">
          <h2 id="content-title">OUR TEAM</h2>
          <div class="team-member">
            <a target='_blank' href="https://www.linkedin.com/in/abhishek-sood-200722260/">
              <img src="src/assets/slider4.jpg" alt="Abhishek Sood" />
            </a>
            <p>Abhishek Sood</p>
          </div>
          <div class="team-member">
            <a target='_blank' href="https://www.linkedin.com/in/rohan-malik-977330269">
              <img src="src/assets/slider4.jpg" alt="Rohan Malik" />
            </a>
            <p>Rohan Malik</p>
          </div>
          <div class="team-member">
            <a target='_blank' href="https://www.linkedin.com/in/varun-pratap-singh-1aa3732b6/">
              <img src="src/assets/slider4.jpg" alt="Varun Pratap" />
            </a>
            <p>Varun Pratap</p>
          </div>
          <div class="team-member">
            <a target='_blank' href="https://www.linkedin.com/in/varun-pratap-singh-1aa3732b6/">
              <img src="src/assets/slider4.jpg" alt="Arshia Gupta" />
            </a>
            <p>Arshia Gupta</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;