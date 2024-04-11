
const Popup = require('../model/Popup');

// Controller methods for popup CRUD operations

exports.createPopup = async (req, res) => {
  try {
    const popup = new Popup(req.body);
    await popup.save();
    res.status(201).json({ message: 'Popup created successfully', popup });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPopups = async (req, res) => {
  if(req.params.token != "@w7!zQ2&iP" ){
    return res.status(404).json('Authentication failed');
  }
  try {
    const popups = await Popup.find();
    res.status(200).json(popups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPopupById = async (req, res) => {
  try {
    const popup = await Popup.findById(req.params.id);
    if (!popup) {
      return res.status(404).json({ message: 'Popup not found' });
    }
    res.status(200).json(popup);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePopup = async (req, res) => {
  try {
    const popup = await Popup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!popup) {
      return res.status(404).json({ message: 'Popup not found' });
    }
    res.status(200).json({ message: 'Popup updated successfully', popup });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePopup = async (req, res) => {
  try {
    const popup = await Popup.findByIdAndDelete(req.params.id);
    if (!popup) {
      return res.status(404).json({ message: 'Popup not found' });
    }
    res.status(200).json({ message: 'Popup deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
