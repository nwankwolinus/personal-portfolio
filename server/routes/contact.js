const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

// Configure your email transporter (use environment variables for security)
const transporter = nodemailer.createTransport({
  service: "gmail", // Or your email provider
  auth: {
    user: process.env.SMTP_USER,   // Your email
    pass: process.env.SMTP_PASS,   // App password or email password
  },
});

// POST /api/contacts
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required." });
  }
  try {
    // Save to MongoDB
    const newContact = await Contact.create({ name, email, message });

    // Send an email notification
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER, // Your receiving email
      subject: "New Contact Message",
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
      html: `<p>You have a new message from <b>${name}</b> (<a href="mailto:${email}">${email}</a>):</p><p>${message}</p>`,
    });

    res.json({ success: true, message: "Message received and email sent.", data: newContact });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

module.exports = router;