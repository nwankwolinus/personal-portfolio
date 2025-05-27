const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a new testimonial
router.post('/', async (req, res) => {
  try {
    const { name, role, message, avatar } = req.body;
    if (!name || !role || !message || !avatar) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const testimonial = new Testimonial({ name, role, message, avatar });
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;