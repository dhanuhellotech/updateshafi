import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './treatment.css';
import WhatsApp from '../../whatsapp/WhatsApp';
import FloatingMailIcon from '../../email floating icon/Floating'
import { client } from '../../clientaxios/Client';
export default function Treatment() {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    fetchTreatments();
  }, []);

  const fetchTreatments = async () => {
    try {
      const response = await client.get('/treatments'); // Replace '/treatments' with your actual backend endpoint
      setTreatments(response.data.map(treatment => ({ ...treatment, flipped: false })));
    } catch (error) {
      console.error('Error fetching treatments:', error);
    }
  };

  const flipCard = (index) => {
    const updatedTreatments = [...treatments];
    updatedTreatments[index].flipped = !updatedTreatments[index].flipped;
    setTreatments(updatedTreatments);
  };

  return (
    <div>
      <div className="container-fluid bg-breadcrumbs">
    <div className="container text-center py-5" style={{maxWidth: 900}}>
      <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Treatment</h3>

    </div>
  </div>
         <div className="container-fluid feature py-5">
    <div className="container py-5">
  <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="sub-style">
          <h4 className="sub-title px-3 mb-0">Why Choose Us</h4>
        </div>
        <h1 className="display-3 mb-4">
"Transformative Therapies at Shafi Ayurveda and Acupuncture Hospital"</h1>
        <p className="mb-0">
"Discover a realm of rejuvenation and healing at Shafi Ayurveda and Acupuncture Hospital. With a blend of ancient wisdom and modern techniques, our treatments offer holistic wellness for mind, body, and spirit."</p>
      </div>
          <div className="row g-4 justify-content-center">
            {treatments.map((treatment, index) => (
              <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" key={treatment._id}>
                <div className={`card text-dark card-has-bg ${treatment.flipped ? 'flipped' : ''}`} onClick={() => flipCard(index)}>
                <div className="card-front" style={{ backgroundImage: `url(${treatment.image})` }}>
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <small className="card-meta mb-2">Thought Leadership</small>
                      <h4 className="card-title mt-0">
                      <center> <a className="text-dark" >{treatment.title}</a></center> 
                      </h4>
                    </div>
                    <div className="card-description">
                      <p>{treatment.description}</p>
                    </div>
                  </div>
                  </div>
                </div>
                <Link
                  to="/"
                  className="btn btn-primary rounded-pill text-white py-2 px-4 mt-3"
                  style={{ transition: 'background-color 0.3s, color 0.3s', textDecoration: 'none' }}
                >
        Book Appointment
                </Link>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up" /></a>   
  <WhatsApp phoneNumber="9843542042" message="Hello! I'm interested in your services."/>
  <FloatingMailIcon emailAddress="Shafichannel123@gmail.com" /> 
    </div>
  );
}
