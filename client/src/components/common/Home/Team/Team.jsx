import React, { useState, useEffect } from 'react';
import { client } from '../../../clientaxios/Client';
import { Link } from 'react-router-dom';
export default function Team() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    client.get('/doctor')
      .then(response => setDoctors(response.data))
      .catch(error => console.error('Error fetching doctors:', error));
  };

  return (
    <div>
      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style">
              <h4 className="sub-title px-3 mb-0">Meet our Doctors</h4>
            </div>
            <h1 className="display-3 mb-4">Meet Our Acupuncture and Ayurvedic Specialists</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {doctors.map((doctor, index) => (
              <div key={index} className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={`${0.1 + (0.2 * index)}s`}>
                <div className="team-item rounded">
                  <div className="team-img rounded-top h-100">
                    <img src={doctor.image} className="img-fluid rounded-top w-100 " alt={`Image of ${doctor.name}`}  />
                    <div className="team-icon d-flex justify-content-center">
                    
                      <Link to="https://youtube.com/shorts/QnLPtqOEBwI?si=0QS5QBD1jGgLVvQc" className="btn btn-square btn-primary text-white rounded-circle mx-1">
                <i className="fab fa-youtube" />
              </Link>
                    </div>
                  </div>
                  <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                    <h5>{doctor.name}</h5>
                    <p className="mb-0">{doctor.specialist}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
