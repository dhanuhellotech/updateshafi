const express = require('express');
const router = express.Router();
const popupController = require('../controller/PopupController');

// Routes for popup CRUD operations
router.post('/popups', popupController.createPopup);
router.get('/popups/:token', popupController.getAllPopups);
router.get('/popups/:id', popupController.getPopupById);
router.put('/popups/:id', popupController.updatePopup);
router.delete('/popups/:id', popupController.deletePopup);

module.exports = router;
