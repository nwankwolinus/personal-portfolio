const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String, // Optional: profile photo URL
  skills: [String],    // Array of skills
  interests: [String], // Array of interests
});

module.exports = mongoose.model("About", AboutSchema, "about");
