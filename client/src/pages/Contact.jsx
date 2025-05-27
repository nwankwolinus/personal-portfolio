import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "success", "error", or ""

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); // Reset before new attempt
    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        background: "#18181b",
        borderRadius: 16,
        padding: 32,
        boxShadow: "0 10px 26px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#fff", marginBottom: 24 }}>
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div style={{ marginBottom: 16 }}>
          <label style={{ color: "#fff" }}>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 6,
              border: "none",
              marginTop: 6,
              fontSize: 16,
              background: "#23232a",
              color: "#fff",
            }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ color: "#fff" }}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 6,
              border: "none",
              marginTop: 6,
              fontSize: 16,
              background: "#23232a",
              color: "#fff",
            }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ color: "#fff" }}>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 6,
              border: "none",
              marginTop: 6,
              fontSize: 16,
              background: "#23232a",
              color: "#fff",
              resize: "vertical",
            }}
          />
        </div>
        {status === "success" && (
          <div style={{ color: "#10b981", marginBottom: 10 }}>
            Thank you! Your message has been sent.
          </div>
        )}
        {status === "error" && (
          <div style={{ color: "#ef4444", marginBottom: 10 }}>
            Server error. Please try again.
          </div>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            background: "#ec4899",
            color: "#fff",
            fontWeight: 600,
            fontSize: 18,
            border: "none",
            borderRadius: 8,
            padding: "12px 0",
            marginTop: 10,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          Send Message
        </button>
      </form>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        style={{ color: "#fff", fontSize: "1.1rem", textAlign: "center" }}
      >
        <div style={{ margin: "18px 0 8px 0" }}>
          <a
            href="tel:+2348037482059"
            aria-label="Phone"
            style={{ color: "#ec4899", margin: "0 12px", fontSize: "2rem" }}
          >
            <FaPhone />
          </a>
          <a
            href="mailto:nwankwolinus9@gmail.com"
            aria-label="Email"
            style={{ color: "#ec4899", margin: "0 12px", fontSize: "2rem" }}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ec4899", margin: "0 12px", fontSize: "2rem" }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nwankwolinus"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ec4899", margin: "0 12px", fontSize: "2rem" }}
          >
            <FaGithub />
          </a>
        </div>
        <div style={{ margin: "10px 0 0 0", fontSize: "1rem" }}>
          Or call:{" "}
          <a
            href="tel:+2348037482059"
            style={{ color: "#ec4899", textDecoration: "underline" }}
          >
            +2348037482059
          </a>
        </div>
        <div style={{ margin: "10px 0 0 0", fontSize: "1rem" }}>
          Or email:{" "}
          <a
            href="mailto:nwankwolinus9@gmail.com"
            style={{ color: "#ec4899", textDecoration: "underline" }}
          >
            nwankwolinus9@gmail.com
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;