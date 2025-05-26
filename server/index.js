const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Retry after 5s if offline
})
  .then(() => {
    console.log("MongoDB connected");

    // Attach Mongoose's default connection's db instance to app.locals
    app.locals.db = mongoose.connection.db;

    // Start the server after DB is attached
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));

// Routes (these will use req.app.locals.db)
app.use("/api/about", require("./routes/about"));
app.use("/api/services", require("./routes/service"));
app.use("/api/projects", require("./routes/project"));
app.use("/api/testimonials", require("./routes/testimonial"));
