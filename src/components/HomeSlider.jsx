// HomeSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Home.css';

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const allOpportunities = [
    { id: 1, title: 'Job Opportunity 1', description: 'Description 1', image: 'src/assets/slider1.jpg' },
    { id: 2, title: 'Job Opportunity 2', description: 'Description 2', image: 'src/assets/slider2.jpg' },
    { id: 3, title: 'Job Opportunity 3', description: 'Description 3', image: 'src/assets/slider3.jpg' },
    { id: 4, title: 'Job Opportunity 4', description: 'Description 4', image: 'src/assets/slider4.jpg' },
    // Add more opportunities as needed
  ];

  const containerStyle = {
    textAlign: 'center',
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #4682b4', /* Blue border color */
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#f0f9ff', /* Very light blue background */
    boxShadow: '0 0 10px rgba(36, 139, 223, 0.3)', /* Blue theme shadow */
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  };

  const imageSizeStyle = {
    width: 'auto',
    height: '300px',
    margin: '10px',
    display: 'block',
  };

  const infoStyle = {
    padding: '100px'
  }

  return (
    <div style={containerStyle}>
      <Slider {...settings} className="custom-slider">
        {allOpportunities.map((opportunity) => (
          <div key={opportunity.id} style={{ textAlign: 'center' }}>
            <div style={contentContainerStyle}>
              <img src={opportunity.image} alt={opportunity.title} style={imageSizeStyle} />
              <div style={infoStyle}>
                <h3 style={titleStyle}>{opportunity.title}</h3>
                <p>{opportunity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
