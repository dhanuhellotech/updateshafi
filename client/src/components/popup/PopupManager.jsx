import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './popup.css';
import { client } from '../clientaxios/Client';


function ImagePopup({ imageUrl, onClose, autoCloseDelay }) {
    useEffect(() => {
        if (autoCloseDelay) {
            const timer = setTimeout(() => {
                onClose();
            }, autoCloseDelay);

            return () => clearTimeout(timer);
        }
    }, [autoCloseDelay, onClose]);


    
    const handleClose = () => {
        onClose();
    };
    return (
        <div className="popup">
            <div className="popup-contents">
                <span className="close-icon" onClick={handleClose}>&times;</span>
                <img src={imageUrl} style={{ width: '25%' }} alt="Image" />
            </div>
        </div>
    );
}

function FormPopup({ onSubmit, onClose }) {
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
            try {
                await client.post('/popup/popups', formData);
                console.log('Form submitted successfully');
                onSubmit(); // Call onSubmit function to trigger image popup
                onClose(); // Close the form after successful submission
            } catch (error) {
                console.error('Error submitting form:', error);
            }
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
        }
        return errors;
    };

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <div className="popup">
        <div className="popup-content">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className={`form-control news ${formErrors.name && 'is-invalid'}`}
                        name="name"
                        value={formData.name}
                        placeholder="Name"
                        onChange={handleChange}
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
                    />
                    {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                </div>
                <p className='text-dark' style={{ fontSize: '20px', fontWeight: 'bold' }}>What Kind of Services Do You need ?</p>
                <div className="mb-3">
                    <select
                        className="form-select"
                        name="services"
                        value={formData.services}
                        onChange={handleChange}
                    >
                        <option value="">Select a Service</option>
                        <option value="Accupunture and Ayurvedic Treatments">Accupunture and Ayurvedic Treatments</option>
                        <option value="Ayurvedic Products">Ayurvedic Products</option>
                        <option value="Atma Study Center">Atma Study Center</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    );
}

function PopupManager({ images }) {
    const [showImagePopup, setShowImagePopup] = useState(false);
    const [showFormPopup, setShowFormPopup] = useState(true);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setImageUrl(images[randomIndex]);
    }, [images]);

    const handleFormSubmit = () => {
        setShowFormPopup(false);
        setShowImagePopup(true);
    };

    const handleCloseImagePopup = () => {
        setShowImagePopup(false);
    };

    const handleCloseFormPopup = () => {
        setShowFormPopup(false);
    };

    return (
        <div>
            {showImagePopup && <ImagePopup onClose={handleCloseImagePopup} imageUrl={imageUrl}  autoCloseDelay={5000} />}
            {showFormPopup && <FormPopup onSubmit={handleFormSubmit} onClose={handleCloseFormPopup} />}
        </div>
    );
}

export default PopupManager;
