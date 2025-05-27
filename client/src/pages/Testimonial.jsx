import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.14,
      duration: 0.5,
      type: "spring",
      stiffness: 70,
      damping: 14,
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 24px rgba(236,72,153,0.18)", // soft pink glow
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 18,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch(() => setTestimonials([]));
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      style={{
        background: "#18181b",
        color: "#fff",
        padding: "48px 0",
        paddingTop: "100px",
        minHeight: "100vh",
      }}
      id="testimonials"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        style={{
          textAlign: "center",
          marginBottom: 32,
          color: "#ec4899",
          fontSize: "2.2rem",
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        Testimonials
      </motion.h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <AnimatePresence>
          {testimonials.map((t, idx) => (
            <motion.div
              key={t._id || idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              whileHover="hover"
              style={{
                background: "#23232a",
                borderRadius: 12,
                maxWidth: 320,
                padding: 24,
                margin: 12,
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                textAlign: "center",
                cursor: "pointer",
                transition: "box-shadow 0.2s",
              }}
            >
              <motion.img
                src={t.avatar}
                alt={t.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                style={{
                  width: 64,
                  borderRadius: "50%",
                  marginBottom: 16,
                  objectFit: "cover",
                }}
              />
              <p style={{ fontStyle: "italic", marginBottom: 16 }}>
                "{t.message}"
              </p>
              <div style={{ fontWeight: 600 }}>{t.name}</div>
              <div style={{ fontSize: 14, color: "#ec4899", marginTop: 4 }}>
                {t.role}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Testimonial;