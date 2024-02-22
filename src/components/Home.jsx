import React from 'react';
import '../styles/Home.css'; 

const Home = () => {
  return (
    <div id="home-container">
      <div className="home-container" >
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
      <div className="new-div" id="serve-sections">
      <h2 id="content-title">WHAT WE SERVE</h2>
        
        <div class="serve-sections" >
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
        <div className="about-us" id="about-us">
        <h2 id="content-title">ABOUT US</h2>
        <div className="about-us-image">
            <img src="src/assets/aboutus.png" alt="About Us" />
          </div>
          <div className="about-us-content">
            <p>We are students of PEC (Punjab Engineering College), Chandigarh, passionate about creating a common platform for both employers and laborers to connect effectively.</p>
            <p>Our aim is to bridge the gap between job seekers and employers by providing a user-friendly and efficient platform that caters to the needs of both parties.</p>
            <p>Through our platform, we envision empowering laborers by providing them access to a wide range of job opportunities and resources to enhance their skills and employability.</p>
            <p>At the same time, we aim to assist employers in finding reliable and skilled workers seamlessly, thereby facilitating the hiring process and contributing to their business growth.</p>
          </div>
          
        </div>

      </div>

    </div>
  );
};

export default Home;
