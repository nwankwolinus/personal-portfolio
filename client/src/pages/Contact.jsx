import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 90 },
  },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04, backgroundColor: "#db2777", transition: { duration: 0.2 } },
  tap: { scale: 0.97 },
};

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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        minHeight: "100vh",
        background: "transparent",
        paddingTop: "100px",
        boxSizing: "border-box",
      }}
    >
      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: 400,
          margin: "0 auto",
          background: "#18181b",
          borderRadius: 16,
          padding: 32,
          boxShadow: "0 10px 26px rgba(0,0,0,0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", color: "#fff", marginBottom: 24 }}
        >
          Contact Me
        </motion.h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{ marginBottom: 16 }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
            style={{ marginBottom: 16 }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.29, duration: 0.5 }}
            style={{ marginBottom: 16 }}
          >
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
          </motion.div>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: "#10b981", marginBottom: 10 }}
            >
              Thank you! Your message has been sent.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: "#ef4444", marginBottom: 10 }}
            >
              Server error. Please try again.
            </motion.div>
          )}
          <motion.button
            type="submit"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
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
          </motion.button>
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
      </motion.div>
    </motion.div>
  );
};

export default Contact;