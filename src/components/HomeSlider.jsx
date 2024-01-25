// FeaturedOpportunitiesSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  const opportunities = [
    { id: 1, title: 'Job Opportunity 1', image: 'src/assets/slider1.png' },
    { id: 2, title: 'Job Opportunity 2', image: 'src/assets/slider2.png' },
    { id: 3, title: 'Job Opportunity 3', image: 'src/assets/slider3.png' },
    { id: 4, title: 'Job Opportunity 4', image: 'src/assets/slider4.png' },
  ];

  const containerStyle = {
    textAlign: 'center',
  };

  const titleStyle = {
    margin: '20px 0', // Adjust the margin as needed
  };

  const imageSizeStyle = {
    width: '80%',
    height: 'auto',
    margin: '0 auto',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      <Slider {...settings} className="custom-slider">
        {opportunities.map(opportunity => (
          <div key={opportunity.id} style={{ textAlign: 'center' }}>
            <img src={opportunity.image} alt={opportunity.title} style={imageSizeStyle} />
            <h3 style={{ textAlign: 'center' }}>{opportunity.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
