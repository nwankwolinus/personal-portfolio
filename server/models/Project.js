const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String, // Optional: profile photo URL
  link: String
});

module.exports = mongoose.model("Project", ProjectSchema);
