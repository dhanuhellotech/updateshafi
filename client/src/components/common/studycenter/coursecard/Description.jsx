import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './descroption.css';
import { client } from '../../../clientaxios/Client';
import { Link } from 'react-router-dom';
export default function Description() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await client.get('/course'); // Adjust the endpoint based on your backend setup
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  return (
    <div>
   <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{maxWidth: 900}}>
      <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Course Description</h3>
      {/* <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Pages</a></li>
        <li className="breadcrumb-item active text-primary">Course</li>
      </ol>     */}
    </div>
  </div>
  <p style={{fontFamily:'monospace',margin:'20px',fontSize:'50px',fontWeight:'bolder'}}>Course Description</p>
  
      <div className=''>
      
        {/* Display fetched course data */}
        {courses.map((course, index) => (
          <article className={`postcard ${course.theme}`} key={index}>
            <a className="postcard__img_link" href="#">
              <img className="postcard__img" src={course.image} alt={course.courseName} />
            </a>
            <div className="postcard__text">
              <h1 className={`postcard__title ${course.theme}`}><a href="#">{course.courseDescription}</a></h1>
              {/* <div className="postcard__subtitle small">
                <time dateTime={course.date}><i className="fas fa-calendar-alt mr-2" />{course.date}</time>
              </div> */}
              <div className="postcard__bar" />
              
              <div className="postcard__preview-txt">{course.courseBriefDescription}</div>
              <ul className="postcard__tagbox">
                {/* <li className="tag__item"><i className="fas fa-tag mr-2" />{course.category}</li> */}
                <li className="tag__item"><i className="fas fa-clock mr-2" /> &nbsp;{course.courseDuration}</li>
                <Link to="/institution" className="btn btn-primary rounded text-white py-2 px-4 flex-wrap flex-sm-shrink-0">Enquire Now</Link>

                {/* <li className={`tag__item play ${course.theme}`}> */}
                  {/* <a href="#"><i className="fas fa-play mr-2" />Play Episode</a> */}
                {/* </li> */}
              </ul>

            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
