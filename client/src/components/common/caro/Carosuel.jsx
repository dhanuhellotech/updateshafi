import React from 'react';
import { Link } from 'react-router-dom';
import './caro.css'; // Import the CSS file for custom styles

export default function Carosuel() {
  return (
    <div style={{width:'100vw',overflowX:'hidden'}}>
      <div className="header-carousel owl-carousel" style={{width:"100vw"}}>
        <div className="header-carousel-item">
          <img src="assets/img/caro/caro6.jpg" className="img-fluid w-100" alt="Image" />
          <div className="carousel-caption">
            <div className="carousel-caption-content p-3 shadow-text"> {/* Added shadow class here */}
              <h5 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: 3 }}>Acupuncture and Ayurvedic Health  Center</h5>
              <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
              <p className="mb-5 fs-5"> Balance your body, mind, and spirit with the ancient wisdom of acupuncture and Ayurveda.
              </p>
              <Link to="/treatment" className="btn btn-primary rounded-pill text-white py-3 px-5">Book Appointment</Link>
            </div>
          </div>
        </div>
        <div className="header-carousel-item">
          <img src="assets/img/caro/carose.jpg" className="img-fluid w-100" alt="Image" />
          <div className="carousel-caption">
            <div className="carousel-caption-content p-3 shadow-text"> {/* Added shadow class here */}
              <h5 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: 3 }}>Atama StudyCenter</h5>
              <h1 className="display-1 text-capitalize text-white mb-4"> Welcome to Atama Study Center  </h1>
              <p className="mb-5 fs-5 animated slideInDown">Exploring the Art of Acupuncture
              </p>
              <Link to="/institution" className="btn btn-primary rounded-pill text-white py-3 px-5">Enquiry Now</Link>
            </div>
          </div>
        </div>
        <div className="header-carousel-item">
          <img src="assets/img/caro/caronew.jpg" className="img-fluid w-100" alt="Image" />
          <div className="carousel-caption">
            <div className="carousel-caption-content p-3 shadow-text"> {/* Added shadow class here */}
              <h5 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: 3 }}>SHAFI ACUPUNCTURE & AYURVEDIC Products </h5>
              <h1 className="display-1 text-capitalize text-white mb-4">  Shafi Acupuncture & Ayurvedic Products  </h1>
              <p className="mb-5 fs-5 animated slideInDown"> Transform your health with nature's remedies – Shafi products, your path to holistic healing.
              </p>
              <Link to="/products" className="btn btn-primary rounded-pill text-white py-3 px-5">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
