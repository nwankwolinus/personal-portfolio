const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
  name: String,
  role: String,
  quote: String, // Optional: profile photo URL
  image: String
});

module.exports = mongoose.model("Testimonial", TestimonialSchema);
