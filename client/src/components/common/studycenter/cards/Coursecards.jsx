import React, { useState, useEffect } from 'react';
import './GlassContainer.css'; // Import the CSS file containing styles
import axios from 'axios'; // Import axios for fetching data
import Slider from 'react-slick';
import { client } from '../../../clientaxios/Client';
import { Link } from 'react-router-dom';
const Tabs = () => {
  const [courses, setCourses] = useState([]); // State to store course data

  useEffect(() => {
    // Fetch course data from the backend when component mounts
    client.get('/course')
      .then(response => {
        // Set the fetched course data to the state
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []); // Run this effect only once when the component mounts

  const containerStyle = {
    // backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/764/431/702/river-trees-forest-clouds-wallpaper-preview.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(255,253,253,1) 0%, rgba(147,121,182,1) 87%)'

};

  // Slick settings
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <>
     <h1 className="display-5 mb-4 mt-3">Courses Of Atama Study Center</h1>
    <Slider {...settings}>
      {courses.map(course => (
        <div key={course._id}>
          <div className="container-glass" style={containerStyle}>
            <img className="img" src={course.image} alt={course.courseName} />
            <p className="card-text ">{course.courseDescription}</p>
            <p className="card-text ">Duration: {course.courseDuration}</p>

         
            <Link  to='/description' className="btn">Read More</Link>

          </div>
        </div>
      ))}
    </Slider>
    </>
  );
};

export default Tabs;
