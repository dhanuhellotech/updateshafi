import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WhatsApp from '../../whatsapp/WhatsApp';
import FloatingMailIcon from '../../email floating icon/Floating';
import { client } from '../../clientaxios/Client';
import './contact.css';

const sendContactEmail = async (formData) => {
  try {
    // Send the email data to the backend endpoint
    const response = await client.post('/api/contact', formData);
    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
      phoneNumber: '',
    category: '',
    subject: '',
    comments: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',   
     phoneNumber: '',
    category: '',
    subject: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' }); // Reset error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    let errors = {};
    if (formData.name.trim() === '') {
      errors.name = 'Name is required';
    }
    if (formData.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = 'Email is invalid';
    }
    if (formData.phoneNumber.trim() === '') {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.trim())) {
      errors.phoneNumber = 'Phone number must be 10 digits';
    }
    if (formData.category === 'studyCenter') {
      if (formData.subject.trim() === '') {
        errors.subject = 'Subject is required for Study Center';
      }
    } else if (formData.category === 'hospital') {
      // Add additional validation specific to hospital category if needed
    }
    if (formData.subject.trim() === '') {
      errors.subject = 'Subject is required';
    }
    if (formData.comments.trim() === '') {
      errors.comments = 'Comments are required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      await client.post('/contact/create', formData);
      console.log('Form submitted successfully');
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        category: '',
        subject: '',
        comments: ''
      });
      alert('Form submitted successfully');
      await sendContactEmail(formData);
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

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    client.get('/user')
      .then(response => {
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else if (response.data && typeof response.data === 'object') {
          setUsers([response.data]);
        } else {
          console.error('Error fetching users: Response data is not in the expected format');
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  };

  return (
    <div>
      <div className="container-fluid bg-breadcrumb ">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h3>
        </div>
      </div>
      <div className="container-fluid contact py-5 mt-5 mb-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style mb-4">
              <h4 className="sub-title text-white px-3 mb-0">Contact Us</h4>
            </div>
            <p className="mb-0 text-white">Connect with Us for Holistic Healing: Acupuncture, Ayurveda, and Wellness Products</p>
          </div>
          <div className="container">
            {users.map(user => (
              <div className="row text-white" key={user._id}>
                <div className="col-lg-4">
                  <h5 className='fw-bold text-white'>Address</h5>
                  <p className='h4 text-white'>{user.address}</p>
                </div>
                <div className="col-lg-4">
                  <h5 className='fw-bold text-white'>Mobile</h5>
                  <p className='h4 text-white'>+91-{user.phoneNumber}</p>
                </div>
                <div className="col-lg-4">
                  <h5 className='fw-bold text-white'>Email</h5>
                  <p className='h4 text-white'>{user.email}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 contact-form wow" data-wow-delay="0.1s">
              <h2 className="display-5 text-white mb-2">Get in Touch</h2>
              <p className="mb-4 text-white">Feel free to reach out to us with any inquiries or questions you may have. Our team is here to assist you on your journey to holistic healing. Simply fill out the form below, and we'll get back to you as soon as possible.</p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-lg-12 col-xl-6">
                    <input autoFocus={true} type="text" name="name" onChange={handleChange} className="form-control text-white bg-transparent place border border-white" placeholder="Your Name" value={formData.name} />
                    {formErrors.name && <p className="text-danger">{formErrors.name}</p>}
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <input type="email" name="email" onChange={handleChange} className="form-control text-white bg-transparent place border border-white" placeholder="Your Email" value={formData.email} />
                    {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <input type="phone" name="phoneNumber" onChange={handleChange} className="form-control bg-transparent place border border-white" placeholder="Phone" value={formData.phoneNumber} />
                    {formErrors.phoneNumber && <p className="text-danger">{formErrors.phoneNumber}</p>}
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <select
                      name="category"
                      className="form-select  bg-transparent text-black"
                      value={formData.category}
                      onChange={handleChange}
                      style={{ color: '#000' }}
                    >
                      <option value="" style={{ color: '#000' }}>Select a category</option>
                      <option value="studyCenter" style={{ color: '#000' }}>Study Center</option>
                      <option value="hospital" style={{ color: '#000' }}>Hospital</option>
                      <option value="treatments" style={{ color: '#000' }}>Treatments</option>
                      <option value="products" style={{ color: '#000' }}>Products</option>
                    </select>
                  </div>
                  {(formData.category === 'studyCenter' || formData.category === 'hospital' || formData.category === 'treatments' || formData.category === 'products') && (
                    <>
                      <div className="col-lg-12 col-xl-6">
                        <input
                          type="text"
                          name="subject"
                          className="form-control place bg-transparent border border-white text-white"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                       {formErrors.subject && <p className="text-danger">{formErrors.subject}</p>}

                      </div>
                      <div className="col-12">
                        <textarea
                          name="comments"
                          className="form-control place bg-transparent border border-white text-white"
                          placeholder="Leave a message here"
                          style={{ height: 160 }}
                          value={formData.comments}
                          onChange={handleChange}
                        />
                     {formErrors.comments && <p className="text-danger">{formErrors.comments}</p>}

                      </div>
                    </>
                  )}
                  <div className="col-12">
                    <button type="submit" className="btn btn-light text-primary w-100 py-3">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-xl-6 wow " data-wow-delay="0.3s">
              <div className="rounded h-100">
                <iframe className="rounded w-100" style={{ height: 500 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0036895020194!2d78.13978661090948!3d9.933649974131274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c546839cf707%3A0xc1213d8cef09a807!2sSHAFI%20acu%20%26%20ayurvedic!5e0!3m2!1sen!2sin!4v1709960275634!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up" /></a>
      <WhatsApp phoneNumber="9843542042" message="Hello! I'm interested in your services." />
      <FloatingMailIcon emailAddress="Shafichannel123@gmail.com" />
    </div>
  );
}
