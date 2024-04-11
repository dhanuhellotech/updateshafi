import React, { useState, useEffect } from 'react';
import './testimon.css'
import { client } from '../../../clientaxios/Client';

export default function Testimonial() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    client.get('/video')
      .then(response => setReviews(response.data))
      .catch(error => console.error('Error fetching reviews:', error));
  };

  return (
    <div className="container-fluid testimonial py-5 wow zoomInDown" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title mb-5">
          <div className="sub-style">
            <h4 className="sub-title text-white px-3 mb-0">Testimonial</h4>
          </div>
          <h1 className="display-3 mb-4">Happy Clients</h1>
        </div>
        <div className="testimonial-carousel owl-carousel">
          {reviews.map(review => (
            <div className="testimonial-item" key={review._id}>
              <div className="testimonial-inner p-5">
                <p className="text-white fs-7">{review.description}</p>
                <div className="text-center">
                  <h5 className="mb-2 font-weight-bold">{review.name}</h5>
                  <p className="mb-2 text-white">{review.place}</p>
                  <div className="d-flex justify-content-center">
                    {[...Array(parseInt(review.stars))].map((star, index) => (
                      <i key={index} className="fas fa-star text-warning" />
                    ))}
                  </div>
                </div>
              </div>
              {review.videoUrl && (
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <video controls width="100%" height="auto">
                      <source src={review.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="custom-button">
          <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" className="sparkle">
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <span className="button-text"><a href='/contact'>Book Appointment</a></span>
          <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" className="sparkle">
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
