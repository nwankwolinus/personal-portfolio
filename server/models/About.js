const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
  headline: String,
  intro: String,
  cta: {
    label: String,
    link: String,
  },
  gradient: String,
  background: String,
}, { _id: false });

const AboutSchema = new mongoose.Schema({
  image: String,          // Profile photo URL
  skills: [String],       // Array of skills
  interests: [String],    // Array of interests
  hero: HeroSchema,       // Hero section object
});

module.exports = mongoose.model("About", AboutSchema, "about");