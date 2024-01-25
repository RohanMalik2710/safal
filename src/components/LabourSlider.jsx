// FeaturedOpportunitiesSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LabourSlider = () => {
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
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #4682b4', /* Blue border color */
    alignItems: 'center',
    justifyContent: 'center',
  };

  const titleStyle = {
    margin: '10px 0', // Adjust the margin as needed
  };

  const imageSizeStyle = {
    width: 'auto',
    height: '500px',
    margin: '10px',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      <Slider {...settings} className="custom-slider">
        {top5Opportunities.map(opportunity => (
          <div key={opportunity.id} style={{ textAlign: 'center' }}>
            <div style={contentContainerStyle}>
              <img src={opportunity.image} alt={opportunity.title} style={imageSizeStyle} />
              <h3 style={titleStyle}>{opportunity.title}</h3>
              <p>{opportunity.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LabourSlider;
