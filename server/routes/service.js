const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Fetch all services from the "services" collection
    const services = await req.app.locals.db
      .collection("services")
      .find({})
      .toArray();

    res.json(services);
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;