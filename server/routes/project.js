const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.get("/", async (req, res) => {
  try {
    const project = await Project.findOne(); // Assuming only one document
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch project info" });
  }
});

module.exports = router;
