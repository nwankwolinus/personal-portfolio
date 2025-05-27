const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route (optional but helpful)
app.get("/api/health", (req, res) => {
  res.json({ status: "API is running" });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
})
  .then(() => {
    console.log("MongoDB connected");

    // Start the server only after DB is connected
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit if DB connection fails
  });

// Attach db instance to app.locals for access in routes if needed
mongoose.connection.once("open", () => {
  app.locals.db = mongoose.connection.db;
});

// API Routes
app.use("/api/about", require("./routes/about"));
app.use("/api/services", require("./routes/service"));
app.use("/api/projects", require("./routes/project"));
app.use("/api/contacts", require("./routes/contact")); // <-- This enables POST /api/contacts
app.use("/api/testimonials", require("./routes/testimonial"));

// Error handling middleware (for cleaner error messages)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server error. Please try again later." });
});

module.exports = app;