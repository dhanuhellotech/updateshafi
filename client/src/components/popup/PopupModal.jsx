import React, { useState, useEffect } from 'react';
import './popup.css'; // Import your CSS file
import { Modal } from 'react-bootstrap'; // Import Bootstrap components
import { client } from '../clientaxios/Client';
import image  from "../../assets/caro/carmain/Shafi Accupunture and Ayurvedic - Web Login Page Design (1).png"

//new change
function PopupCard({ images, onSubmit, onClose }) {
  const [showPopup, setShowPopup] = useState(!sessionStorage.getItem('hasSubmittedForm'));

  const [imageUrl, setImageUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Handle form submission here
      await client.post('/popup/popups', formData);

      console.log('Form submitted successfully');
      onSubmit(); // Call onSubmit function to trigger image popup
      onClose(); // Close the form after successful submission
      setShowPopup(false); // Close the modal
      sessionStorage.setItem('hasSubmittedForm', 'true');
      console.log('Session storage item set:', sessionStorage.getItem('hasSubmittedForm'));
    
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name || !formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email || !formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phone || !formData.phone.trim()) {
      errors.phone = 'Phone Number is required';
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const isValidPhone = (phone) => {
    const re = /^\d{10}$/; // 10 digits regex
    return re.test(phone);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImageUrl(images[randomIndex]);
  }, [images]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <Modal show={showPopup} onHide={togglePopup} size="lg">
      {/* <Modal.Header style={{ backgroundColor: '#a879c2', color: '#fff'}} closeButton>

        </Modal.Header> */}
        <Modal.Body style={{ backgroundColor: '#a879c2' }} >
          <div className="row"       >
            <div className="col-md-6">
              <img src={image} style={{ width: '100%', height: '100%', backgroundSize:'contain' }} alt="Image" />
            </div>
            <div className="col-md-6 mt-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control new ${formErrors.name && 'is-invalid'}`}
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleChange}
                    style={{ backgroundColor: '#ffff' }}
                  />
                  {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className={`form-control new ${formErrors.email && 'is-invalid'}`}
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    style={{ backgroundColor: '#ffff' }}
                  />
                  {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className={`form-control new ${formErrors.phone && 'is-invalid'}`}
                    name="phone"
                    value={formData.phone}
                    placeholder="Phone"
                    onChange={handleChange}
                    style={{ backgroundColor: '#ffff' }}
                  />
                  {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                </div>
                <p className='text-light' style={{ fontSize: '20px', fontWeight: 'bold' }}>What Kind of Services Do You need ?</p>
                <div className="mb-3">
                  <select
                    className="form-select"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    style={{ backgroundColor: '#ffff', color: '#000' }}
                  >
                    <option value="" >Select a Service</option>
                    <option value="Accupunture and Ayurvedic Treatments">Accupunture and Ayurvedic Treatments</option>
                    <option value="Ayurvedic Products">Ayurvedic Products</option>
                    <option value="Atma Study Center">Atma Study Center</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-light">Submit</button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PopupCard;
