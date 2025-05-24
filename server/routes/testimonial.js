const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

router.get("/", async (req, res) => {
  try {
    const testimonial = await Testimonial.findOne(); // Assuming only one document
    res.json(testimonial);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch testimonial info" });
  }
});

module.exports = router;
