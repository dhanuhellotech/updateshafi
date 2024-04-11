import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { client } from '../../../clientaxios/Client';
import Swal from 'sweetalert2';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './course.css'
import { Link } from 'react-router-dom';
import Description from './Description';

export default function CourseList() {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [courseBriefDescription, setCourseBriefDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [courses, setCourses] = useState([]);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [isVertical, setIsVertical] = useState(window.innerWidth < 1000);

  useEffect(() => {
    fetchCourses();
    const handleResize = () => setIsVertical(window.innerWidth < 1000);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchCourses = () => {
    client.get('/course')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  };

  const clearForm = () => {
    setCourseName('');
    setCourseDescription('');
    setCourseDuration('');
    setCourseBriefDescription('');
    setImageFile(null);
    setEditingCourseId(null);
  };

  return (
    <div className="container-fluid" style={{ marginBottom: '40px', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)' }}>
       <h5 style={{ marginTop: '20px',fontFamily:"serif",fontSize:'200%' }}>Existing Courses</h5>
      <div className="container">
       
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          vertical={isVertical}
          style={{ margin: '0 auto', marginBottom: '20px' }} // Apply margin to the Slider
        >
          {courses.map(course => (
            <div key={course._id} >
              <div className="card mb-5 me-2">
                <div className="card-body me-2">
                                    <img src={course.image} alt={course.courseName} className="card-img-top rounded mx-auto d-block" style={{ width: '60%', height: 'auto', marginTop: '10px' }} />

                  <h5 className="card-title">Course Name: {course.courseName}</h5>
                  <p className="card-text">Description: {course.courseDescription}</p>
                  <p className="card-text">Duration: {course.courseDuration}</p>
                  <button className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2 me-2">BUY NOW</button>
                  <Link  to='/description' className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</Link>
                  {/* <p className="card-text">Brief Description: {course.courseBriefDescription}</p> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
}
