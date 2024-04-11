const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const cors = require('cors');
const productRoutes= require('./Router/productRoutes')
const studyCenterRoutes = require('./Router/studyCenterRoutes');
const contactRoutes = require('./Router/contactRoutes');
const enquiryRoutes = require( './Router/enquiryRouter' )
const treatmentRouter = require('./Router/treatmentRouter');
const courseRoutes = require('./Router/courseRouter');
const tobbarRoutes =require('./Router/tobabar')
const userRoutes =require('./Router/TopcontactRouter');
const reviewRoutes =require('./Router/reviewRoutes');
const blogRoutes =require('./Router/blogRoutes');
const doctorRoutes =require('./Router/doctorRoutes');
const videoRoutes = require('./Router/videoRouter')
const popupRoutes = require('./Router/popupRoutes')
const username = 'shafichannel123@gmail.com'; 
const password = 'shafi123';
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000; // Set the port number

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming request bodies in a middleware
app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});


// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://dhanalakshmihellotech:GppWgtpvyNsu2A6Z@cluster0.qzu8ito.mongodb.net/shafi",
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(() => {
    console.log('Connected to MongoDB');
  });


  
  const transporter = nodemailer.createTransport({ 
    service: 'gmail',
    auth: {
      user: 'hrhellowtec@gmail.com', // Replace with your Gmail email address
      pass: 'hgvg nmis mcnf egxq' // Replace with your Gmail password
    }
  });

  app.post('/api/send-reset-email', async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: 'Email address is required' });
    }
  
    const mailOptions = {
      from: 'hrhellowtec@gmail.com',
      to: email,
      subject: 'Hello',
      text: `Mailid: ${username}\nPassword: ${password}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending reset email:', error);
        res.status(500).json({ error: 'Failed to send reset password email' });
      } else {
        console.log('Reset email sent:', info.response);
        res.status(200).json({ message: 'Reset password email sent successfully' });
      }
    }); 
  });
  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Perform authentication logic here
    const validUsername = 'shafichannel123@gmail.com'; // Use the username defined at the top
    const validPassword = 'shafi123'; // Use the password defined at the top
  
    if (email === validUsername && password === validPassword) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });
  
  //contact
  app.post('/api/contact', async (req, res) => {
    console.log('Contact form submitted');
    try {
      const formData = req.body;
      console.log('Form data:', formData); // Log the form data to check if it's received correctly
  
      // Save the form data to the database
  
  
      // Send email with form details
      await sendContactEmail(formData);
  
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error submitting Franschise form:', error);
      res.status(500).json({ error: 'Failed to submit franschise form' });
    }
  }); 
  async function sendContactEmail(formData) {
    try {
      const mailOptions = {
        from: 'hrhellowtec@gmail.com',
        to: 'Shafichannel123@gmail.com', // Replace with recipient email address
        subject: 'New Contact Form Submission',
        text: `Form Details:\nUsername: ${formData.name}\nEmail: ${formData.email}\nLocation: ${formData.phoneNumber}\nMobile: ${formData.category}\nCity: ${formData.subject}\nComments: ${formData.comments}`
      };
  
      await transporter.sendMail(mailOptions);
      console.log('Contact email sent successfully');
    } catch (error) {
      console.error('Error sending contact email:', error);
      throw new Error('Failed to send contact email');
    }
  }

//studycenter
  app.post('/api/study', async (req, res) => {
    console.log('study center form submitted');
    try {
      const formData = req.body;
      console.log('Form data:', formData); // Log the form data to check if it's received correctly
      await sendStudyEmail(formData);
  
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error submitting study center form:', error);
      res.status(500).json({ error: 'Failed to submit study centerform' });
    }
  }); 
  async function sendStudyEmail(formData) {
    try {
      const mailOptions = {
        from: '',
        to: 'Shafichannel123@gmail.com', // Replace with recipient email address
        subject: 'New Study Center Form Submission',
        text: 
        `Form Details:
Full Name: ${formData.fullName}
Father's Name: ${formData.fatherName}
Father's Occupation: ${formData.fatherOccupation}
Email: ${formData.email}
Date of Birth: ${formData.dateOfBirth}
Gender: ${formData.gender}
Marital Status: ${formData.maritalStatus}
Nationality: ${formData.nationality}
Religion: ${formData.religion}
Mother Tongue: ${formData.motherTongue}
Educational Qualification: ${formData.educationalQualification}
Phone Number: ${formData.phoneNumber}
Address: ${formData.address}
Courses: ${formData.courses}`

      };
  
      await transporter.sendMail(mailOptions);
      console.log('Study email sent successfully');
    } catch (error) {
      console.error('Error sending studycenter email:', error);
      throw new Error('Failed to send studycenter email');
    }
  }
  //appointment 
  app.post('/api/appointment', async (req, res) => {
    console.log('Hospital Appointment form submitted');
    try {
      const formData = req.body;
      console.log('Form data:', formData); // Log the form data to check if it's received correctly
      await sendAppointEmail(formData);
  
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error submitting study center form:', error);
      res.status(500).json({ error: 'Failed to submit study centerform' });
    }
  }); 
  async function sendAppointEmail(formData) {
    try {
      const mailOptions = {
        from: 'hrhellowtec@gmail.com',
        to: ' Shafichannel123@gmail.com', // Replace with recipient email address
        subject: 'New Appointment  Form Submission',
        text:`Form Details:
        Name: ${formData.name}
        Email: ${formData.email}
        Phone Number: ${formData.phoneNumber}
        Subject: ${formData.subject}
        Message: ${formData.message}
        Date of Birth: ${formData.dateOfBirth}
        Address: ${formData.address}
        Preferred Appointment Date & Time: ${formData.preferredAppointmentDateTime}
        Preferred Days: ${formData.preferredDays}
        Best Time to Call: ${formData.bestTimeToCall}
        Appointment Type: ${formData.appointmentType}
        `

      };
  
      await transporter.sendMail(mailOptions);
      console.log('Appointment  email sent successfully');
    } catch (error) {
      console.error('Error sending Appointment  email:', error);
      throw new Error('Failed to send Appointment  email');
    }
  }
// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!'); // Example route
});
app.use('/products', productRoutes);
app.use('/study', studyCenterRoutes);
app.use('/contact', contactRoutes);
app.use('/enquiry', enquiryRoutes);
app.use('/treatments', treatmentRouter);
app.use('/course',courseRoutes);
app.use('/tobbar',tobbarRoutes);
app.use('/user',userRoutes)
app.use('/review',reviewRoutes)
app.use('/blog',blogRoutes)
app.use('/doctor',doctorRoutes)
app.use('/video',videoRoutes)
app.use('/popup',popupRoutes)
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

