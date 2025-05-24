const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  icon: { type: String, required: true }, // Store the icon name as a string
  description: { type: String, required: true }
});

module.exports = mongoose.model("Service", ServiceSchema);