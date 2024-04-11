import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './test.css';
import { client } from '../../../clientaxios/Client';

export default function Testimonialnew() {
  const [isVertical, setIsVertical] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsVertical(screenWidth < 800);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isVertical ? 1 : 2, // Adjust number of slides shown based on orientation
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    vertical: isVertical, // Set to true if orientation is vertical
    verticalSwiping: isVertical, // Set to true if orientation is vertical
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    client.get('/review')
      .then(response => {
        if (response.status === 200) {
          setReviews(response.data);
        } else {
          throw new Error('Failed to fetch reviews');
        }
      })
      .catch(error => console.error('Error fetching reviews:', error));
  };

  return (
    <div className='container' >
   <h1 className="display-3 mb-4">Our Happy Clients</h1>
      <Slider className="testimonial-slider" {...sliderSettings}>
        {reviews.map(review => (
          <div key={review._id}>
            <div className="testimonial-container" style={{margin:'10px'}}>
              <section className="testimonials">
                <h2>What Our Clients say </h2>
                <div className="testimonial-item">
                  <img src={review.image} alt="Client" className="testimonial-img rounded-circle" style={{ width: '100px', height: '100px', justifyContent: 'center' }} />
                  <h3 className="testimonial-title">&#8220;{review.content}&#8221;</h3>
                  <p className="testimonial-content">{review.description}</p>
                  <div className="testimonial-rating">
                    {[...Array(review.stars)].map((_, i) => (
                      <i key={i} className="fas fa-star text-secondary"></i>
                    ))}
                  </div>
                  <p className="testimonial-author">{review.name} - {review.place}</p>
                </div>
              </section>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
