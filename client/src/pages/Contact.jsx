import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // Clear error on user change
    setSuccess(""); // Clear success on typing again
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess("Thank you! Your message has been sent.");
        setForm(initialState);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="contact-container"
      style={{
        maxWidth: 480,
        margin: "3rem auto",
        background: "#18181b",
        borderRadius: 12,
        padding: "2rem 2.5rem",
        boxShadow: "0 4px 32px rgba(0,0,0,0.18)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "1rem",
          color: "#fff",
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "0.01em",
        }}
      >
        Contact Me
      </h2>

      <form onSubmit={handleSubmit} autoComplete="off" aria-label="Contact form">
        {/* Name */}
        <div style={{ marginBottom: 18 }}>
          <label htmlFor="name" style={{ color: "#fff", fontWeight: 500 }}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 6,
              border: "1px solid #52525b",
              marginTop: 6,
              background: "#232336",
              color: "#fff",
              fontSize: "1rem",
            }}
            aria-required="true"
            aria-label="Your name"
          />
        </div>
        {/* Email */}
        <div style={{ marginBottom: 18 }}>
          <label htmlFor="email" style={{ color: "#fff", fontWeight: 500 }}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 6,
              border: "1px solid #52525b",
              marginTop: 6,
              background: "#232336",
              color: "#fff",
              fontSize: "1rem",
            }}
            aria-required="true"
            aria-label="Your email address"
          />
        </div>
        {/* Message */}
        <div style={{ marginBottom: 18 }}>
          <label htmlFor="message" style={{ color: "#fff", fontWeight: 500 }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 6,
              border: "1px solid #52525b",
              marginTop: 6,
              background: "#232336",
              color: "#fff",
              fontSize: "1rem",
              resize: "vertical",
            }}
            aria-required="true"
            aria-label="Your message"
          />
        </div>

        {/* Error message */}
        {error && (
          <div
            style={{
              color: "#fb7185",
              marginBottom: "12px",
              fontWeight: 500,
            }}
            role="alert"
            aria-live="assertive"
          >
            {error}
          </div>
        )}
        {/* Success message */}
        {success && (
          <div
            style={{
              color: "#22d3ee",
              marginBottom: "12px",
              fontWeight: 500,
            }}
            role="status"
            aria-live="polite"
          >
            {success}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "#ec4899",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
            marginBottom: 12,
            transition: "background 0.2s",
          }}
          aria-label={loading ? "Sending..." : "Send message"}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Social/contact icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        style={{ color: "#fff", fontSize: "1.1rem", textAlign: "center" }}
      >
        <div style={{ margin: "18px 0 8px 0" }}>
          <a
            href="mailto:nwankwolinus9@gmail.com"
            aria-label="Email"
            style={{ color: "#ec4899", margin: "0 12px", fontSize: "2rem" }}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/linus-nwankwo-049942b5"
            aria-label="LinkedIn"
            style={{ color: "#ec4899", margin: "0 12px", fontSize: "2rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nwankwolinus"
            aria-label="GitHub"
            style={{ color: "#ec4899", margin: "0 12px", fontSize: "2rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div>
          Or email:{" "}
          <a
            href="mailto:nwankwolinus9@gmail.com"
            style={{ color: "#ec4899" }}
          >
            nwankwolinus9@gmail.com
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}