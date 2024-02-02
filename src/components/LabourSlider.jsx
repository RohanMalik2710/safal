import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Labour.css';

const LabourSlider = ({ onExploreClick }) => {
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

  const top5Opportunities = allOpportunities.slice(0, 5);
  const containerStyle = {
    textAlign: 'center',
    margin: '-40px',
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    border: '2px solid #4682b4', /* Blue border color */
    margin: '10px',
    padding: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    backgroundColor: '#f0f9ff', /* Very light blue background */
    boxShadow: '0 0 10px rgba(36, 139, 223, 0.3)',
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
    padding: '100px',
  };

  return (
    <div style={containerStyle}>
      <Slider {...settings} className="custom-slider">
        {top5Opportunities.map(opportunity => (
          <div key={opportunity.id} style={{ textAlign: 'center' }}>
            <div style={contentContainerStyle}>
              <img src={opportunity.image} alt={opportunity.title} style={imageSizeStyle} />
              <div style={infoStyle}>
                <h3 style={titleStyle}>{opportunity.title}</h3>
                <p>{opportunity.description}</p>
                <button
                  className="apply-button"
                  onClick={() => onExploreClick(opportunity.id)}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LabourSlider;
