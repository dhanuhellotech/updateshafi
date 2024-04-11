  import React, { useState } from 'react';
  import axios from 'axios';
  import { client } from '../../../clientaxios/Client';
  import './bookapp.css'
  import Swal from 'sweetalert2';

  const sendStudyEmail = async (formData) => {
    try {
      // Send the email data to the backend endpoint
      const response = await client.post('/api/study', formData);
      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  };
  export default function BookApp() {
    const [formData, setFormData] = useState({
      fullName: '',
      fatherName: '',
      fatherOccupation: '',
      email: '',
      dateOfBirth: '',
      gender: '',
      maritalStatus: '',
      nationality: '',
      religion: '',
      motherTongue: '',
      educationalQualification: '',
      phoneNumber: '',
      address: '',
      courses: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value.trim() });
    };

    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission
      for (const key in formData) {
        if (formData[key] === '') {
          Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: `please fill the field ${key}`,
          });
          return;
        }
      }
    
      const phoneNumberRegex = /^[0-9]{10}$/;
      if (!phoneNumberRegex.test(formData.phoneNumber)) {
        alert('Please enter a valid phone number (10 digits)');
        return;
      }
  
      // Validation for email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address');
        return;
      }
      try {
        // Submit form data
        await client.post('/study', formData);
        console.log('Form submitted successfully');
        // Reset form after successful submission
        setFormData({ 
          fullName: '',
          fatherName: '',
          fatherOccupation: '',
          email: '',
          dateOfBirth: '',
          gender: '',
          maritalStatus: '',
          nationality: '',
          religion: '',
          motherTongue: '',
          educationalQualification: '',
          phoneNumber: '',
          address: '',
          courses: ''
        });
    
        // Display success message
        alert('Form submitted successfully');
    
        // Send email
await sendStudyEmail(formData);
      } catch (error) {
        console.error('Error submitting form:', error);
        if (error.response && error.response.data && error.response.data.error) {
          // Display specific error message from the server
          alert(`Error: ${error.response.data.error}`);
        } else {
          // Generic error message if no specific error message is available
          alert('Error submitting the form. Please try again.');
        }
      }
    };
    

    return (
      <div className="container-fluid study py-5">
        <div className="container py-7">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2">
            <div className="section-title text-start">
                {/* <h4 className="sub-title pe-3 mb-0 mt-10">Solutions To Your Pain</h4> */}
                <h1 className="display-4 mb-4">Atama Study Center of Shafi Acupuncture and Ayurvedic Healing</h1>
                <p className="mb-4 new fw-bold ">Acupuncture is a medical protocol for correcting imbalances of energy in the body. There is a growing demand in the medical field for acupuncture as people are displeased of taking several medicines for various diseases. The main aim is to provide a drugless society. If you want to pursue a brand new career then a degree in Acupuncture will be the right choice. Due to the growing demand for holistic health care, it is good to be an acupuncturist. The All Tamilnadu Acupuncture and Alternative Medical Association (ATAMA) offers Diploma courses at various study centers in Tamilnadu. The study of Acupuncture provides a flexible job opportunity and an accessible career path. The entrepreneurial spirit and the tendency to help people to lead a drugless and a disease free healthy life, then start your career at our doorstep without hesitation. Personal conduct programmes are conducted at all centers for your convenience. Let’s start a career that saves lives and creates a disease-free society in the coming years.

</p>
<div className="mb-4">
                        <h5 className="mb-3">Administrative Office of ATAMA</h5>
                        <p className="mb-0 newp"><i className="fas fa-map-marker-alt text-primary me-2" />
188, South Veli Street, Mina Noordeen Complex, MADURAI – 625 001.

Cell: 98432 76306</p>
                      </div>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="d-flex flex-column h-100">
                      <div className="mb-4">
                        <h5 className="mb-3"><i className="fa fa-check text-primary me-2" />Our Vission</h5>
                        <p className="mb-0 newp">Vision
Our Vision is to create a drug-less society by 2030 and a Disease-free society by 2020.</p>
                      </div>
                      <div className="mb-4">
                        <h5 className="mb-3"><i className="fa fa-check text-primary me-2" /> Mission</h5>
                        <p className="mb-0 newp"> Our Mission is to establish alternative therapies in the field of acupuncture that is of general public utility.</p>
                      </div>
   
                      <div className="text-start mb-4">
                        <a href="#" className="btn btn-primary rounded-pill text-white py-3 px-5">More Details</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 stu">
                  <iframe width="300" height="215" src="https://www.youtube.com/embed/_lpaJtYQT38?si=KjPye-tFAW1HfweR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
              <div className="study-form rounded p-5">
                <p className="fs-4 text-uppercase text-dark">Atama Course Registration</p>
                <h1 className="display-5 mb-4">Admission Form</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 gx-4">
                    <div className="col-xl-6">
                      <input
                        type="text"
                        className="form-control py-3 border-primary bg-transparent text-black"
                        placeholder="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />

                    </div>
                    <div className="col-xl-6">
                      <input
                        type="text"
                        className="form-control py-3 border-primary bg-transparent text-black"
                        placeholder="Father's Name"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="text"
                        className="form-control py-3 border-primary bg-transparent text-black"
                        placeholder="Father's Occupation"
                        name="fatherOccupation"
                        value={formData.fatherOccupation}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="email"
                        className="form-control py-3 border-primary bg-transparent text-black"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="date"
                        className="form-control py-3 border-primary bg-transparent"
                        placeholder="Date of Birth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6">
                      <select
                        className="form-select py-3 border-primary bg-transparent"
                        aria-label="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option selected>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-xl-6">
                      <select
                        className="form-select py-3 border-primary bg-transparent"
                        aria-label="Marital Status"
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleChange}
                      >
                        <option selected>Marital Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                      </select>
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="text"
                        className="form-control py-3 border-primary bg-transparent text-black"
                        placeholder="Nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="text"
                        className="form-control py-3 border-primary bg-transparent text-black"
                        placeholder="Religion"
                        name="religion"
                        value={formData.religion}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="text"
                        className="form-control py-3 border-primary bg-transparent text-black"
                        placeholder="Mother Tongue"
                        name="motherTongue"
                        value={formData.motherTongue}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="text"
                        className="form-control py-3 border-primary bg-transparent text-black"
                        placeholder="Educational Qualification"
                        name="educationalQualification"
                        value={formData.educationalQualification}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="text"
                        className="form-control py-3 border-primary bg-transparent"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-6">
                      <select
                        className="form-select py-3 border-primary bg-transparent"
                        aria-label="courses"
                        name="courses"
                        value={formData.courses}
                        onChange={handleChange}
                      >
                        <option selected>courses</option>
                        <option value="Diploma In Acupuncture Therapy - D.A.T.">Diploma In Acupuncture Therapy - D.A.T., </option>
                        <option value="One Year,diploma inhijama & cupping with accupunture 2 years ">One Year,diploma inhijama & cupping with accupunture 2 years </option>
                        <option value="Diploma In Reflexology with accupunture 2 years ">Diploma In Reflexology with accupunture 2 years </option>
                        <option value="master Diploma in accupunture 2 year">master Diploma in accupunture 2 year</option>
                        <option value="diploma in spine theraphy with acupunture 2 years">diploma in spine theraphy with acupunture 2 years</option>
                        <option value="diploma in chiropractic with acupunture- 2yrs">diploma in chiropractic with acupunture- 2yrs</option>
                        <option value="diploma in cosmetic acupunture in 2years ">diploma in cosmetic acupunture in 2years </option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-primary bg-transparent text-black"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={5}
                      />
                    </div>
           
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary text-white w-100 py-3 px-5">
                        SUBMIT NOW
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
