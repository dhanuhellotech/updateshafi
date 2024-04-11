const mongoose = require('mongoose');

const popupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone:{type :String},
  email: { type: String ,required:true},

services: { type: String, enum: ['Accupunture and Ayurvedic Treatments','Ayurvedic Products', 'Atma Study Center'], required: true }
});

const Popup = mongoose.model('Popup', popupSchema);

module.exports = Popup;


