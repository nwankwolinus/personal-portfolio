const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// Get all testimonials (sorted by most recent first)
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch testimonials', details: err.message });
  }
});

// Get a single testimonial by ID (optional)
router.get('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    res.json(testimonial);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch testimonial', details: err.message });
  }
});

// Add a new testimonial
router.post('/', async (req, res) => {
  try {
    const { name, role, message, avatar } = req.body;
    if (!name || !role || !message || !avatar) {
      return res.status(400).json({ error: 'All fields (name, role, message, avatar) are required' });
    }
    const testimonial = new Testimonial({ name, role, message, avatar });
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save testimonial', details: err.message });
  }
});

module.exports = router;