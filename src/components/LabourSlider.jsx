//LabourSlider.jsx
import React,{useState,useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Labour.css';

import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../firebase.config"

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

  const [jobPostings, setJobPostings] = useState([]);

  const fetchJobs = async() => {
    const tempJobs = []
    const q = query(collection(db, "jobs"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      //console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...doc.data(),
        id: doc.id,
        postedOn: doc.data().postedOn.toDate()
      })
    });
    setJobPostings(tempJobs);
  }

  useEffect(() => {
    fetchJobs()
  },[])

  const top5opportunities = jobPostings.slice(0, 5);
  const containerStyle = {
    textAlign: 'center',
    margin: '-40px',
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    border: '2px solid #4682b4', /* Blue border color */
    margin: '10px',
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

  const infoStyle = {
    paddingTop: '32px',
    paddingBottom: '15px',
  };

  return (
    <div style={containerStyle}>
      <Slider {...settings} className="custom-slider">
        {top5opportunities.map(opportunity => (
          <div key={opportunity.id} style={{ textAlign: 'center' }}>
            <div style={contentContainerStyle}>
              <div style={infoStyle}>
                <h3 style={titleStyle}>{opportunity.title}</h3>
                <p>{opportunity.company}</p>
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
