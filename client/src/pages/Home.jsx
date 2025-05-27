import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaReact, FaNodeJs, FaGithub, FaArrowRight, FaRobot } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiTensorflow, SiPytorch } from "react-icons/si";

const gradient =
  "linear-gradient(90deg, #ff57b2 20%, #a165f7 60%, #3ec6f6 100%)";

const skills = [
  { name: "React", icon: <FaReact color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3ecf8e" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "MongoDB", icon: <SiMongodb color="#10aa50" /> },
  { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
  { name: "TensorFlow", icon: <SiTensorflow color="#f9ab00" /> },
  { name: "PyTorch", icon: <SiPytorch color="#ee4c2c" /> },
];

const highlights = [
  {
    title: "Modern Web Apps",
    desc: "Lightning-fast, SEO-friendly React and Node.js applications.",
    icon: <FaReact color="#fff" size={28} />,
  },
  {
    title: "API & Backend",
    desc: "Robust, scalable REST APIs and backend solutions.",
    icon: <FaNodeJs color="#fff" size={28} />,
  },
  {
    title: "UI/UX & Design",
    desc: "Beautiful, mobile-first interfaces with Tailwind and Figma.",
    icon: <SiTailwindcss color="#fff" size={28} />,
  },
  {
    title: "AI Engineering",
    desc: "Passionate about Artificial Intelligence, building intelligent systems and deploying ML models.",
    icon: <FaRobot color="#fff" size={28} />,
  },
  {
    title: "Open Source",
    desc: "Active on GitHub, building and contributing to cool projects.",
    icon: <FaGithub color="#fff" size={28} />,
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background:
          "radial-gradient(circle at 70% 40%, #30235a 0%, #191b2a 70%)",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          top: "25%",
          left: "10%",
          width: "350px",
          height: "200px",
          background: "radial-gradient(circle, #ff57b2 0%, transparent 70%)",
          filter: "blur(70px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, type: "spring", stiffness: 60 }}
        style={{
          position: "relative",
          zIndex: 4,
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto",
          padding: "80px 8vw 32px 8vw",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(24, 20, 36, 0.44)",
          borderRadius: 26,
          boxShadow: "0 8px 48px #0007",
          backdropFilter: "blur(2.5px)",
          marginTop: "7vh",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          style={{
            fontSize: "clamp(2.1rem, 7vw, 4.3rem)",
            fontWeight: 800,
            letterSpacing: "-2px",
            marginBottom: 18,
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.08,
            textAlign: "center",
          }}
        >
          Build. Innovate. Inspire.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            fontSize: "clamp(1.07rem, 2.4vw, 1.5rem)",
            color: "#e3e3e9",
            marginBottom: 30,
            maxWidth: 600,
            lineHeight: 1.45,
            textAlign: "center",
          }}
        >
          <b>LINUXe native</b> delivers modern web solutions, creative user experiences, and robust backend APIs.<br/>
          <span style={{ color: "#ec4899" }}>
            Beautiful, responsive, and blazing-fast websites.
          </span>
          <br />
          <span style={{ display: "block", marginTop: 10, fontWeight: 500, color: "#a165f7" }}>
            <FaRobot style={{ marginBottom: "-4px", marginRight: "6px" }} />
            Also a passionate <span style={{ color: "#ff57b2" }}>AI Engineer</span> &mdash; I love building intelligent systems and deploying machine learning models!
          </span>
        </motion.p>
        <div style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 28,
          }}>
          {skills.map((s) => (
            <span key={s.name} style={{
              background: "#312e81",
              color: "#f3e8ff",
              borderRadius: "8px",
              padding: "7px 18px",
              fontSize: "1.05rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              {s.icon} {s.name}
            </span>
          ))}
        </div>
        <motion.button
          whileHover={{
            scale: 1.06,
            boxShadow: "0 4px 32px #ff57b2cc",
            filter: "brightness(1.18)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 210, damping: 16 }}
          style={{
            padding: "18px 48px",
            borderRadius: 32,
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "#fff",
            background: gradient,
            border: "none",
            boxShadow: "0 2px 24px #3ec6f633",
            textDecoration: "none",
            marginTop: 8,
            pointerEvents: "all",
            filter: "drop-shadow(0 2px 16px #3ec6f655)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
          onClick={() => navigate("/projects")}
        >
          View My Work <FaArrowRight />
        </motion.button>
      </motion.section>

      {/* Feature Highlights */}
      <section
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "46px auto 0 auto",
          display: "grid",
          gap: "28px",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          justifyContent: "center",
          alignItems: "stretch",
          padding: "0 5vw 60px 5vw",
        }}
      >
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={{
              background: "rgba(36, 38, 56, 0.98)",
              borderRadius: "18px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
              padding: "32px 22px 28px 22px",
              color: "#e5e7eb",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px",
              minHeight: 162,
            }}
          >
            <span>{h.icon}</span>
            <div style={{ fontWeight: 700, fontSize: "1.20rem", color: "#ec4899", marginBottom: 3 }}>{h.title}</div>
            <div style={{ textAlign: "center", fontSize: "1.05rem", color: "#d1d5db" }}>{h.desc}</div>
          </motion.div>
        ))}
      </section>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          section[style*="padding: 80px"] {
            padding: 46px 2vw 24px 2vw !important;
          }
          section[style*="maxWidth: 1100px"] {
            grid-template-columns: 1fr !important;
            padding: 0 2vw 32px 2vw !important;
          }
        }
        @media (max-width: 600px) {
          section[style*="padding: 80px"] h1 {
            font-size: 2.1rem !important;
          }
          section[style*="padding: 80px"] p {
            font-size: 1.01rem !important;
          }
          button[style] {
            font-size: 1rem !important;
            padding: 13px 18px !important;
          }
        }
      `}</style>
    </div>
  );
}