import React from 'react'
import { Link } from 'react-router-dom'
export default function Feature() {
  return (
    <div>
        <div className="container-fluid feature py-5" style={{backgroundColor:'#FFF9AF'}}>
    <div className="container py-5">
      <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="sub-style">
          <h4 className="sub-title px-3 mb-0" >Why Choose Us</h4>
        </div>
        <h1 className="display-3 mb-4">Why Choose Us?</h1>
        <p className="mb-0">Nourish Your Body, Mind & Spirit: <b>Shafi Acupuncture & Ayurvedic Health Center</b></p>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
          <div className="row-cols-1 feature-item p-4">
            <div className="col-12">
              <div className="feature-icon mb-4">
                <div className="p-3 d-inline-flex bg-white rounded">
                  <i className="fas fa-diagnoses fa-4x text-primary" />
                </div>
              </div>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-4">Licensed Therapist</h5>
                <p className="mb-0">Our licensed therapists are highly trained professionals with extensive experience in the field of mental health and counseling.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
          <div className="row-cols-1 feature-item p-4">
            <div className="col-12">
              <div className="feature-icon mb-4">
                <div className="p-3 d-inline-flex bg-white rounded">
                  <i className="fas fa-briefcase-medical fa-4x text-primary" />
                </div>
              </div>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-4">Personalized Treatment</h5>
                <p className="mb-0">We recognize that each individual responds differently to various healing modalities. we offer a range of therapeutic  techniques.  </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
          <div className="row-cols-1 feature-item p-4">
            <div className="col-12">
              <div className="feature-icon mb-4">
                <div className="p-3 d-inline-flex bg-white rounded">
                  <i className="fas fa-hospital-user fa-4x text-primary" />
                </div>
              </div>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-4">Therapy Goals</h5>
                <p className="mb-0">Therapy helps individuals develop more adaptive problem-solving skills to address life's challenges and make positive changes. </p>
              </div>
            </div>
          </div>
        </div> */}
      
        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
          <div className="row-cols-1 feature-item p-4">
            <div className="col-12">
              <div className="feature-icon mb-4">
                <div className="p-3 d-inline-flex bg-white rounded">
                  <i className="fas fa-spa fa-4x text-primary" />
                </div>
              </div>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-4">Comfortable Center</h5>
                <p className="mb-0">At Shafi Acupuncture & Ayurvedic Health Center, you'll receive personalized care tailored to your unique needs and preferences. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
          <div className="row-cols-1 feature-item p-4">
            <div className="col-12">
              <div className="feature-icon mb-4">
                <div className="p-3 d-inline-flex bg-white rounded">
                  <i className="fas fa-heart fa-4x text-primary" />
                </div>
              </div>
              <div className="feature-content d-flex flex-column">
                <h5 className="mb-4">Experienced Stuff</h5>
                <p className="mb-0"> Your comfort and relaxation are paramount to us.Our welcoming environment provides a peaceful oasis.</p>
              </div>
            </div>
          </div>
        </div>
   
        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
        <Link   to="/about" className="btn btn-primary rounded-pill text-white py-3 px-5">More Aboutus</Link>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
