import React from 'react';
import Slider from 'react-slick';

const FeaturedOpportunitiesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  // Dummy data for slider (replace this with actual job opportunities data)
  const opportunities = [
    { id: 1, title: 'Job Opportunity 1', image: 'src/assets/slider1.png' },
    { id: 2, title: 'Job Opportunity 2', image: 'src/assets/slider2.png' },
    { id: 3, title: 'Job Opportunity 3', image: 'src/assets/slider3.png' },
  ];

  return (
    <Slider {...settings}>
      {opportunities.map(opportunity => (
        <div key={opportunity.id}>
          <img src={opportunity.image} alt={opportunity.title} />
          <h3>{opportunity.title}</h3>
        </div>
      ))}
    </Slider>
  );
};

export default FeaturedOpportunitiesSlider;
