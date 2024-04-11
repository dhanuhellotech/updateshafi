// models/Course.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
   name: { type: String, required: true },
 description: { type: String, required: true },
specialist: { type: String, required: true },
 degree: { type: String, required: true },
  image: { type: String, required: true }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
