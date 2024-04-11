import React, { useState, useEffect } from "react";
import axios from "axios";
import { client } from "../../../clientaxios/Client";
import { Link } from "react-router-dom";
import "./BookApp.css";
import * as Yup from 'yup';
import { Formik } from 'formik';

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required('Name is required'),
  email: Yup.string().trim().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().trim().required('Phone number is required'),
  subject: Yup.string().trim().required('Subject is required'),
  address: Yup.string().trim().required('Address is required'),
  preferredDays: Yup.string().trim().required('Preferred days are required'),
  bestTimeToCall: Yup.string().trim().required('Best time to call is required'),
  appointmentType: Yup.string().trim().required('Appointment type is required'),
  dateOfBirth: Yup.date().required('Date of birth is required'),
  preferredAppointmentDateTime: Yup.date().required('Preferred appointment date and time are required'),
  message: Yup.string().trim().required('Message is required'),
});


const sendAppointEmail = async (formData) => {
  try {
    const preferredDaysMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    formData.preferredDays = preferredDaysMap[parseInt(formData.preferredDays)];

    // Send the email data to the backend endpoint
    const response = await client.post("/api/appointment", formData);
    console.log("Email sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export default function BookApp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
    dateOfBirth: "",
    address: "",
    preferredAppointmentDateTime: "",
    preferredDays: "",
    bestTimeToCall: "",
    appointmentType: "",
  });

  const handleFieldChange = (e, setFieldValue) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };

  useEffect(() => {
    const input = document.getElementById("preferredAppointmentDateTime");
    const now = new Date().toISOString().slice(0, 16);
    input.min = now;

    const handlePreferredDays = () => {
      const select = document.getElementById("preferredDays");
      if (select) {
        const selectedDateTime = new Date(input.value);
        const selectedDay = selectedDateTime.getDay();
        const days = Array.from({ length: 7 }, (_, i) => i);
        const preferredDaysOptions = days.map(day => {
          const option = document.createElement("option");
          option.value = day.toString();
          option.textContent = dayToString(day);
          return option;
        });

        select.innerHTML = "";
        preferredDaysOptions.forEach(option => select.appendChild(option));

        select.querySelectorAll("option").forEach(option => {
          const day = parseInt(option.value);
          option.disabled = day !== selectedDay;
        });
      }
    };

    input.addEventListener("input", handlePreferredDays);

    return () => {
      input.removeEventListener("input", handlePreferredDays);
    };
  }, []);

  const dayToString = (day) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[day];
  };
  
  return (
    <div>
      <div className="container-fluid appointment py-5">
        <div className="container py-5">
          <div className="row g-3 align-items-center align-items-center justify-content-center">
            <div className="col-lg-6 ">
              {/* Place your image here */}
              {/* <img src="path_to_your_image" alt="Image" /> */}
              <div className="section-title text-start">
                {/* <h4 className="sub-title pe-3 mb-0 mt-10">Solutions To Your Pain</h4> */}
                <h1 className="display-5 mb-4">
                  Book Your Appointment at Shafi Hospital Ayurvedic and
                  Acupuncture Health Center
                </h1>
                <p className="mb-4 new fw-bold ">
                  Experience the transformative power of holistic healing at
                  Shafi Hospital Ayurvedic and Acupuncture Health Center. Our
                  renowned facility combines the ancient wisdom of Ayurveda with
                  the modern techniques of acupuncture to provide comprehensive
                  healthcare solutions tailored to your individual needs.
                  Whether you're seeking relief from chronic pain, managing
                  stress, or enhancing your overall well-being, our team of
                  experienced practitioners is here to guide you on your journey
                  to optimal health. From personalized treatment plans to
                  therapeutic consultations, we offer a range of services
                  designed to address the root causes of your ailments and
                  restore balance to your body, mind, and spirit. Take control
                  of your health and vitality today by scheduling an appointment
                  with us. Together, we'll embark on a path towards lasting
                  wellness and vitality.
                </p>

                <div className="mb-4"></div>
              </div>
            
                <div
                  className="embed-responsive embed-responsive-16by9" style={{display:'inline-block',height:'400px',width:'100%'}}>
                  <iframe
              width='100%' height='100%'
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/_lpaJtYQT38?si=KjPye-tFAW1HfweR"
                    title="Embedded YouTube Video"
                    allowFullScreen
                  ></iframe>
                 
                </div>
              
            </div>

            <div className="col-lg-6 wow " data-wow-delay="0.4s">
              <div className="appointment-form rounded p-5">
                <p className="fs-4 text-uppercase text-dark">Get In Touch</p>
                <h1 className="display-5 mb-4">Get Appointment</h1>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    phoneNumber: '',
                    subject: '',
                    message: '',
                    dateOfBirth: '',
                    address: '',
                    preferredAppointmentDateTime: '',
                    preferredDays: '',
                    bestTimeToCall: '',
                    appointmentType: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                      await client.post("/enquiry/enquiries", values);
                      console.log("Enquiry submitted successfully");
                      // Optionally, you can reset the form fields after submission
                      resetForm();
                      alert("Enquiry submitted successfully");
                      await sendAppointEmail(values);
                    } catch (error) {
                      console.error("Error submitting enquiry:", error);

                      if (error.response && error.response.data && error.response.data.error) {
                        // Display specific error message from the server
                        alert(`Error: ${error.response.data.error}`);
                      } else {
                        // Generic error message if no specific error message is available
                        alert("Error submitting the form. Please try again.");
                      }
                    }
                    setSubmitting(false);
                  }}
                >
                   {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 gx-4">
                    <div className="col-xl-12">
                      <input
                       autoFocus={true}
                        type="text"
                        className="form-control py-3 border-primary bg-transparent text-black"
                        placeholder="Name"
                        name="name"
                        value={values.name}
                        onChange={(e) => handleFieldChange(e, setFieldValue)}
                      />
                      {errors.name && touched.name && (
                        <div className="text-danger">{errors.name}</div>
                      )}
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="email"
                        className={`form-control py-3 border-primary bg-transparent text-black ${errors.email && touched.email && 'is-invalid'}`}
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={(e) => handleFieldChange(e, setFieldValue)}
                      />
                      {errors.email && touched.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="text"
                        className={`form-control py-3 border-primary bg-transparent text-black ${errors.phoneNumber && touched.phoneNumber && 'is-invalid'}`}
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={(e) => {
                          const phoneNumber = e.target.value.replace(/\D/, ''); // Remove non-numeric characters
                          setFieldValue('phoneNumber', phoneNumber);
                          handleFieldChange(e, setFieldValue);
                        }}


                      />
                      {errors.phoneNumber && touched.phoneNumber && (
                        <div className="text-danger">{errors.phoneNumber}</div>
                      )}


                    </div>
                    <div className="col-xl-6">
                      <input
                        type="text"
                        className={`form-control py-3 border-primary bg-transparent text-black ${errors.subject && touched.subject && 'is-invalid'}`}
                        placeholder="Subject"
                        name="subject"
                        value={values.subject}
                        onChange={(e) => handleFieldChange(e, setFieldValue)}
                      />
                      {errors.subject && touched.subject && (
                        <div className="text-danger">{errors.subject}</div>
                      )}
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="text"
                        className={`form-control py-3 border-primary bg-transparent text-black ${errors.address && touched.address && 'is-invalid'}`}
                        placeholder="Address"
                        name="address"
                        value={values.address}
                        onChange={(e) => handleFieldChange(e, setFieldValue)}
                      />
                      {errors.address && touched.address && (
                        <div className="text-danger">{errors.address}</div>
                      )}
                    </div>

                    <div className="col-xl-6">
        <select
          className="form-control py-3 border-primary bg-transparent text-black"
          name="preferredDays"
          value={values.preferredDays}
          disabled // Disable the field
        >
          <option value="">Preferred Days</option>
          <option value="1" disabled={values.preferredDays !== '1'}>Monday</option>
          <option value="2" disabled={values.preferredDays !== '2'}>Tuesday</option>
          <option value="3" disabled={values.preferredDays !== '3'}>Wednesday</option>
          <option value="4" disabled={values.preferredDays !== '4'}>Thursday</option>
          <option value="5" disabled={values.preferredDays !== '5'}>Friday</option>
          <option value="6" disabled={values.preferredDays !== '6'}>Saturday</option>
          <option value="0" disabled={values.preferredDays !== '0'}>Sunday</option>
        </select>
        {errors.preferredDays && touched.preferredDays && (
          <div className="text-danger">{errors.preferredDays}</div>
        )}
      </div>

                    <div className="col-xl-6">
                      <div className=" mr-4">
                        <select
                          className={`form-control py-3 border-primary bg-transparent text-black ${errors.bestTimeToCall && touched.bestTimeToCall && 'is-invalid'}`}
                          aria-label="Best Time To Call"
                          name="bestTimeToCall"
                          value={values.bestTimeToCall}
                          onChange={(e) => handleFieldChange(e, setFieldValue)}
                        >
                          <option value="">Best Time To Call</option>
                          <option value="Morning">Morning</option>
                          <option value="Afternoon">Afternoon</option>
                          <option value="Evening">Evening</option>
                        </select>
                        {errors.bestTimeToCall && touched.bestTimeToCall && (
                          <div className="text-danger">{errors.bestTimeToCall}</div>
                        )}
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <select
                        className={`form-control py-3 border-primary bg-transparent text-black ${errors.appointmentType && touched.appointmentType && 'is-invalid'}`}
                        name="appointmentType"
                        value={values.appointmentType}
                        onChange={(e) => handleFieldChange(e, setFieldValue)}
                      >
                        <option value="">Select Appointment Type</option>
                        <option value="New Patient">New Patient</option>
                        <option value="Routine Checkup">Routine Checkup</option>
                      </select>
                      {errors.appointmentType && touched.appointmentType && (
                        <div className="text-danger">{errors.appointmentType}</div>
                      )}
                    </div>
                    <div
                      className="col-xl-6 "
                      style={{
                        height: "55px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <label>Date of birth</label>
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="date"
                        className={`form-control py-3 border-primary bg-transparent text-black ${errors.dateOfBirth && touched.dateOfBirth && 'is-invalid'}`}
                        placeholder="Date of Birth"
                        name="dateOfBirth"
                        value={values.dateOfBirth}
                        onChange={(e) => handleFieldChange(e, setFieldValue)}
                      />
                      {errors.dateOfBirth && touched.dateOfBirth && (
                        <div className="text-danger">{errors.dateOfBirth}</div>
                      )}
                    </div>
                    <div
                      className="col-xl-6 "
                      style={{
                        height: "55px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <label>Appointment Date & Time</label>
                    </div>
                    <div className="col-xl-6">
                    <input
  type="datetime-local"
  id="preferredAppointmentDateTime"
  className={`form-control py-3 border-primary bg-transparent text-black ${errors.preferredAppointmentDateTime && touched.preferredAppointmentDateTime && 'is-invalid'}`}
  name="preferredAppointmentDateTime"
  value={values.preferredAppointmentDateTime}
  onChange={(e) => {
    // Call handleChange to update the formik state
    handleChange(e);
    
    // Extract day of the week from selected date
    const selectedDate = new Date(e.target.value);
    const selectedDay = selectedDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    
    // Update preferredDays only if it hasn't been manually selected
    setFieldValue("preferredDays", selectedDay.toString());
  }}
  onBlur={handleBlur}
/>

        {errors.preferredAppointmentDateTime && touched.preferredAppointmentDateTime && (
          <div className="text-danger">{errors.preferredAppointmentDateTime}</div>
        )}
      </div>

                    <div className="col-xl-12">
                      <textarea
                        className={`form-control py-3 border-primary bg-transparent text-black ${errors.message && touched.message && 'is-invalid'}`}
                        placeholder="Message"
                        name="message"
                        value={values.message}
                        onChange={(e) => handleFieldChange(e, setFieldValue)}
                        rows={3}
                      />
                      {errors.message && touched.message && (
                        <div className="text-danger">{errors.message}</div>
                      )}
                    </div>
                    <div className="col-12 text-center" >
                      <button className="btn btn-primary rounded-pill text-white py-3" type="submit" disabled={isSubmitting}>
                        Submit Now
                      </button>
                    </div>
                  </div>
                </form>
              )}
              </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}