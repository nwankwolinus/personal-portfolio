const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    message: { type: String, required: true },
    avatar: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: 'testimonials' // Explicitly set collection name
  }
);

module.exports = mongoose.model('Testimonial', testimonialSchema);