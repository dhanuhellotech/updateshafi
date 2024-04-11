const express = require('express');
const router = express.Router();
const doctorController = require('../controller/doctorController');

// Middleware for uploading image and resizing

// Routes for doctors
router.get('/', doctorController.getAllDoctors);
router.post('/', doctorController.uploadImage, doctorController.resizeImage, doctorController.addImagetoCloud, doctorController.createDoctor);
router.put('/:id',doctorController.uploadImage, doctorController.resizeImage, doctorController.addImagetoCloud, doctorController.updateDoctor);
router.delete('/:id', doctorController.deleteDoctor);
router.post("/resize", doctorController.uploadImage, doctorController.resizeImage, doctorController.addImagetoCloud, doctorController.createDoctor);

module.exports = router;
