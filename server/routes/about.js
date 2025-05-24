const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');

// Example: Assumes MongoDB connection is set on app.locals.db

router.get('/', async (req, res) => {
  try {
    const aboutDoc = await req.app.locals.db
      .collection('about')
      .findOne({ _id: new ObjectId("683133114f63dc36c819e83a") });

    if (!aboutDoc) {
      return res.status(404).json({ error: "About data not found." });
    }

    // Only pick the fields you want to expose
    const { image, skills, interests, hero } = aboutDoc;
    res.json({ image, skills, interests, hero });
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;