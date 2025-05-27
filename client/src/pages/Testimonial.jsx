import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Replace '/api/testimonials' with your actual backend endpoint if different
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch(() => setTestimonials([]));
  }, []);

  return (
    <section style={{ background: "#18181b", color: "#fff", padding: "48px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: 32, color: "#ec4899" }}>Testimonials</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
        {testimonials.map((t, idx) => (
          <div key={idx} style={{
            background: "#23232a",
            borderRadius: 12,
            maxWidth: 320,
            padding: 24,
            margin: 12,
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            <img src={t.avatar} alt={t.name} style={{ width: 64, borderRadius: "50%", marginBottom: 16 }} />
            <p style={{ fontStyle: "italic", marginBottom: 16 }}>"{t.message}"</p>
            <div style={{ fontWeight: 600 }}>{t.name}</div>
            <div style={{ fontSize: 14, color: "#ec4899", marginTop: 4 }}>{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;