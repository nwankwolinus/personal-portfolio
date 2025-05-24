const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

router.get("/", async (req, res) => {
  try {
    const service = await Service.findOne(); // Assuming only one document
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch service info" });
  }
});

module.exports = router;
