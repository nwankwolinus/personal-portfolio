import React, { useState } from "react";
import { motion } from "framer-motion";

const pageStyle = {
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  flexDirection: "column",
  paddingTop: "80px"
};

const cardStyle = {
  background: "rgba(36,38,56,0.97)",
  borderRadius: "18px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
  padding: "42px 38px 34px 38px",
  width: "400px",
  maxWidth: "95vw",
  color: "#e5e7eb",
  marginBottom: "28px"
};

const labelStyle = {
  color: "#ec4899",
  fontWeight: 600,
  marginBottom: "6px",
  display: "block",
  fontSize: "1.08rem"
};

const inputStyle = {
  width: "100%",
  borderRadius: "6px",
  border: "1px solid #9ca3af",
  padding: "9px 12px",
  marginBottom: "18px",
  background: "rgba(17,24,39,0.5)",
  color: "#fff",
  fontSize: "1rem"
};

const textareaStyle = {
  ...inputStyle,
  minHeight: "90px",
  resize: "vertical"
};

const buttonStyle = {
  background: "#ec4899",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  padding: "11px 28px",
  fontWeight: 600,
  fontSize: "1.1rem",
  cursor: "pointer",
  transition: "background 0.18s"
};

const errorStyle = {
  color: "#fb7185",
  marginBottom: "12px",
  fontWeight: 500
};

const successStyle = {
  color: "#22d3ee",
  marginBottom: "12px",
  fontWeight: 500
};

export default function Contact() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  }

  function validate() {
    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setError("Please fill out all fields.");
      return false;
    }
    // Simple email regex
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(fields.email)) {
      setError("Please enter a valid email.");
      return false;
    }
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields)
      });
      const result = await res.json();
      if (res.ok) {
        setSuccess("Message sent! Thank you.");
        setFields({ name: "", email: "", message: "" });
      } else {
        setError(result.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Unable to send. Please try again later.");
    }
    setSubmitting(false);
  }

  return (
    <motion.div
      style={pageStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={cardStyle}
        initial={{ scale: 0.92, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <h2 style={{ color: "#ec4899", marginBottom: 24, textAlign: "center", fontWeight: 700 }}>Contact Me</h2>
        {error && <div style={errorStyle}>{error}</div>}
        {success && <div style={successStyle}>{success}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input
              style={inputStyle}
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              value={fields.name}
              onChange={handleChange}
              disabled={submitting}
            />
          </div>
          <div>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              style={inputStyle}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              value={fields.email}
              onChange={handleChange}
              disabled={submitting}
            />
          </div>
          <div>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea
              style={textareaStyle}
              name="message"
              id="message"
              value={fields.message}
              onChange={handleChange}
              disabled={submitting}
            />
          </div>
          <div style={{ textAlign: "center", marginTop: "18px" }}>
            <button style={buttonStyle} type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        style={{ color: "#fff", fontSize: "1.1rem" }}
      >
        You can also reach me at <a href="mailto:your@email.com" style={{ color: "#ec4899" }}>your@email.com</a>
      </motion.div>
    </motion.div>
  );
}