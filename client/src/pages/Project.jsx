import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sectionStyle = {
  maxWidth: "1200px",
  margin: "120px auto 48px auto",
  padding: "0 20px",
};

const titleStyle = {
  fontSize: "2.7rem",
  fontWeight: 700,
  color: "#fff",
  letterSpacing: "1px",
  marginBottom: "32px",
  textAlign: "center"
};

const gridStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "32px",
  justifyContent: "center"
};

const cardStyle = {
  background: "rgba(36, 38, 56, 0.97)",
  borderRadius: "18px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
  padding: "32px 28px 28px 28px",
  width: "340px",
  maxWidth: "100%",
  color: "#e5e7eb",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  position: "relative"
};

const projectTitleStyle = {
  fontSize: "1.45rem",
  color: "#ec4899",
  fontWeight: 700,
  marginBottom: "5px"
};

const techListStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  margin: "10px 0"
};

const techStyle = {
  background: "#312e81",
  color: "#f3e8ff",
  borderRadius: "6px",
  padding: "2px 11px",
  fontSize: "0.95rem",
  fontWeight: 500
};

const linkBarStyle = {
  display: "flex",
  gap: "15px",
  marginTop: "12px"
};

const linkBtnStyle = {
  color: "#fff",
  background: "#ec4899",
  border: "none",
  borderRadius: "6px",
  padding: "7px 15px",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "1.01rem",
  transition: "background 0.18s",
  cursor: "pointer"
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>My Projects</h1>
      {loading && (
        <div style={{ color: "#fff", textAlign: "center", margin: "40px 0" }}>
          Loading projects...
        </div>
      )}
      {!loading && (
        <motion.div
          style={gridStyle}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.16
              }
            }
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              style={cardStyle}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px rgba(236, 72, 153, 0.18)"
              }}
            >
              <div style={projectTitleStyle}>{project.title}</div>
              <div style={{fontSize: "1.09rem", color: "#e5e7eb"}}>{project.description}</div>
              <div style={techListStyle}>
                {project.tech && project.tech.map((t, i) => (
                  <span style={techStyle} key={i}>{t}</span>
                ))}
              </div>
              <div style={linkBarStyle}>
                {project.live && (
                  <a href={project.live} style={linkBtnStyle} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} style={linkBtnStyle} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      {!loading && projects.length === 0 && (
        <div style={{ color: "#fff", textAlign: "center", margin: "40px 0" }}>
          No projects found.
        </div>
      )}
    </section>
  );
}