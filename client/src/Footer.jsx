import React, { useState } from "react";

// Animated SVG social icons
const socialIcons = [
  {
    href: "https://github.com/nwankwolinus",
    label: "GitHub",
    svg: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="footer-social-svg">
        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.2.8-.3.8-.6v-2c-3.3.7-4-1.5-4-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.8 2.7 1.3.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-5.7 0-1.2.4-2.2 1-3-.1-.3-.4-1.4.1-2.9 0 0 .8-.2 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.2 2.7-1 2.7-1 .5 1.5.2 2.6.1 2.9.7.8 1 1.8 1 3 0 4.4-2.8 5.4-5.5 5.7.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/>
      </svg>
    ),
    color: "#fff"
  },
  {
    href: "https://twitter.com/",
    label: "Twitter",
    svg: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="footer-social-svg">
        <path d="M24 4.6c-.9.4-1.7.6-2.7.8.9-.6 1.7-1.4 2-2.5-.9.6-1.8 1-2.8 1.3A4.5 4.5 0 0 0 16.6 3c-2.3 0-4.2 1.9-4.2 4.2 0 .3 0 .6.1.8C8.3 7.8 4.4 5.9 1.7 3.1c-.3.5-.5 1-.5 1.6 0 1.5.8 2.7 2 3.4-.7 0-1.3-.2-1.8-.5 0 2 1.4 3.7 3.3 4-.3.1-.7.2-1.1.2-.3 0-.5 0-.8-.1.5 1.6 2 2.7 3.7 2.8a9 9 0 0 1-5.6 1.9c-.4 0-.8 0-1.1-.1A12.7 12.7 0 0 0 7.1 21c8.3 0 12.8-6.9 12.8-12.8 0-.2 0-.3 0-.5A8.8 8.8 0 0 0 24 4.6z"/>
      </svg>
    ),
    color: "#1DA1F2"
  },
  {
    href: "https://linkedin.com/",
    label: "LinkedIn",
    svg: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="footer-social-svg">
        <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-11 19h-3v-10h3zm-1.5-11.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zm13.5 11.2h-3v-5.4c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.7 1.2-.1.2-.1.6-.1.9v5.5h-3v-10h3v1.3c.4-.6 1.1-1.6 2.7-1.6 2 0 3.6 1.3 3.6 4.1v6.2z"/>
      </svg>
    ),
    color: "#0A66C2"
  },
];

// Quick links (adjust to your routes/anchors)
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contacts", href: "/contacts" },
];

export default function Footer() {
  // Shared message/email logic (sync with Contact.jsx)
  const [form, setForm] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    // For just newsletter, you can omit "message" or send a default one
    const payload = { name: "Newsletter Signup", ...form, message: form.message || "Newsletter subscription" };
    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setStatus("success");
        setForm({ email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <footer style={{
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(90deg, #23243D 50%, #1a1b2a 100%)",
      color: "#e5e7eb",
      padding: "64px 0 0 0",
      marginTop: "48px",
      fontFamily: "'Inter', sans-serif",
      borderTop: "4px solid #ec4899",
      boxShadow: "0 -8px 32px rgba(80, 0, 80, 0.08)",
      letterSpacing: "0.02em"
    }}>
      {/* Parallax SVG background */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "220px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <svg width="100%" height="220" viewBox="0 0 1440 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: "absolute", left: 0, top: 0}}>
          <defs>
            <linearGradient id="footer-wave1" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(25)">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.22"/>
              <stop offset="100%" stopColor="#262949" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="footer-wave2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3ec6f6" stopOpacity="0.18"/>
              <stop offset="100%" stopColor="#a165f7" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0 90 C 360 190 1080 0 1440 120 L 1440 0 L 0 0 Z" fill="url(#footer-wave1)">
              <animate attributeName="d" dur="10s" repeatCount="indefinite"
                values="
                  M0 90 C 360 190 1080 0 1440 120 L 1440 0 L 0 0 Z;
                  M0 100 C 400 150 1100 80 1440 100 L 1440 0 L 0 0 Z;
                  M0 90 C 360 190 1080 0 1440 120 L 1440 0 L 0 0 Z
                "
              />
          </path>
          <path d="M0 150 Q 720 210 1440 110 L 1440 0 L 0 0 Z" fill="url(#footer-wave2)">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="
                M0 150 Q 720 210 1440 110 L 1440 0 L 0 0 Z;
                M0 160 Q 800 170 1440 130 L 1440 0 L 0 0 Z;
                M0 150 Q 720 210 1440 110 L 1440 0 L 0 0 Z
              "
            />
          </path>
        </svg>
      </div>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        flexWrap: "wrap",
        gap: "40px 32px",
        justifyContent: "space-between",
        position: "relative",
        zIndex: 1
      }}>
        {/* Brand & Mission */}
        <div style={{flex: 2, minWidth: 260}}>
          <div style={{display: "flex", alignItems: "center", gap: 14, marginBottom: 16}}>
            <img
              src="https://res.cloudinary.com/dqv8rh26a/image/upload/v1748384102/LinuxeLogo_bxu0fk.png"
              alt="LINUXe native Logo"
              width={56}
              height={56}
              style={{
                borderRadius: "50%",
                background: "transparent",
                padding: 2,
                boxShadow: "0 2px 14px #ec489933",
                filter: "drop-shadow(0 4px 16px #ec489983)"
              }}
            />
            <span style={{
              fontFamily: "'Orbitron', 'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 26,
              letterSpacing: 2,
              background: "linear-gradient(90deg, #ff57b2 20%, #a165f7 60%, #3ec6f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "#ec4899"
            }}>
              LINUXe native
            </span>
          </div>
          <p style={{color: "#b7b7c9", fontSize: 17, lineHeight: 1.7, marginBottom: 18, maxWidth: 420}}>
            <strong>LINUXe native</strong> delivers modern web solutions, creative user experiences, and robust backend APIs.<br />
            <span style={{color:"#ec4899"}}>
              Beautiful, responsive, and blazing-fast websites.
            </span><br />
            <span style={{color:"#a165f7"}}>
              Also a passionate <strong>AI Engineer</strong>: I love building intelligent systems and deploying machine learning models!
            </span>
            <br />
            <span style={{color:"#ec4899", fontWeight:600}}>Let's build the future together.</span>
          </p>
          <div style={{display: "flex", gap: 18, alignItems: "center", marginBottom: 8}}>
            {socialIcons.map(icon => (
              <a
                key={icon.label}
                href={icon.href}
                aria-label={icon.label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#262949",
                  color: icon.color,
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 1px 6px #23243d66",
                  transition: "background 0.2s, color 0.2s, transform 0.3s"
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = "#ec4899";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "scale(1.17) rotate(-7deg)";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = "#262949";
                  e.currentTarget.style.color = icon.color;
                  e.currentTarget.style.transform = "scale(1) rotate(0)";
                }}
              >
                {icon.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div style={{flex: 1, minWidth: 160}}>
          <h4 style={{color: "#fff", fontSize: 17, marginBottom: 14, letterSpacing:1}}>Quick Links</h4>
          <ul style={{listStyle: "none", margin: 0, padding: 0, lineHeight: 2.1}}>
            {quickLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    color: "#b7b7c9",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: 15,
                    transition: "color 0.18s"
                  }}
                  onMouseOver={e => { e.currentTarget.style.color = "#ec4899"; }}
                  onMouseOut={e => { e.currentTarget.style.color = "#b7b7c9"; }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact/Newsletter */}
        <div style={{flex: 2, minWidth: 250, maxWidth: 340}}>
          <h4 style={{color: "#fff", fontSize: 17, marginBottom: 14, letterSpacing:1}}>Stay in Touch</h4>
          <form onSubmit={handleSubmit} style={{marginBottom: 18}} autoComplete="on">
            <label htmlFor="footer-email" style={{display: "block", color: "#b7b7c9", marginBottom: 4, fontSize: 14}}>Subscribe or message me:</label>
            <div style={{display:"flex", gap: 0}}>
              <input
                type="email"
                name="email"
                id="footer-email"
                required
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                style={{
                  padding: "8px 12px",
                  border: "none",
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                  outline: "none",
                  fontSize: 15,
                  width: "70%",
                  background: "#23243D",
                  color: "#fff",
                  borderRight: "1px solid #333"
                }}
              />
              <button
                type="submit"
                style={{
                  background: "#ec4899",
                  color: "#fff",
                  fontWeight: 600,
                  padding: "8px 18px",
                  border: "none",
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  cursor: "pointer",
                  fontSize: 15,
                  transition: "background 0.2s"
                }}
                onMouseOver={e => e.currentTarget.style.background = "#a165f7"}
                onMouseOut={e => e.currentTarget.style.background = "#ec4899"}
              >
                Subscribe
              </button>
            </div>
            <textarea
              name="message"
              placeholder="Write a quick message (optional)"
              value={form.message}
              onChange={handleChange}
              rows={2}
              autoComplete="off"
              style={{
                width: "100%",
                marginTop: 8,
                padding: "8px",
                borderRadius: 8,
                background: "#23243D",
                color: "#fff",
                border: "none",
                fontSize: 15,
                resize: "vertical"
              }}
            />
            {status === "success" && (
              <div style={{ color: "#10b981", marginTop: 8 }}>
                Thank you! Your message has been sent.
              </div>
            )}
            {status === "error" && (
              <div style={{ color: "#ef4444", marginTop: 8 }}>
                Server error. Please try again.
              </div>
            )}
          </form>
          <div style={{color:"#b7b7c9", fontSize:15, lineHeight:1.7}}>
            <div>
              <span style={{color:"#ec4899", fontWeight:600}}>Email:</span> <a href="mailto:nwankwolinus9@gmail.com" style={{color:"#b7b7c9"}}>nwankwolinus9@gmail.com</a>
            </div>
            <div>
              <span style={{color:"#ec4899", fontWeight:600}}>Phone:</span> <a href="tel:+2348037482059" style={{color:"#b7b7c9"}}>+2348037482059</a>
            </div>
            <div>
              <span style={{color:"#ec4899", fontWeight:600}}>Location:</span> 123 Open Source Ave, Tech City, World
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div style={{
        marginTop: "48px",
        background: "#191b2a",
        color: "#b7b7c9",
        fontSize: 14,
        padding: "18px 0",
        textAlign: "center",
        borderTop: "1px solid #262949",
        letterSpacing: ".02em"
      }}>
        <span>
          &copy; {new Date().getFullYear()} <span style={{color:"#ec4899", fontWeight:700}}>LINUXe native</span>. All rights reserved. &nbsp;|&nbsp;
          <a href="/privacy" style={{color: "#a165f7", textDecoration:"none"}}>Privacy Policy</a>
        </span>
      </div>
      {/* Parallax effect via CSS */}
      <style>{`
        .footer-social-svg {
          transition: filter 0.45s cubic-bezier(.4,2,.6,1), transform 0.6s cubic-bezier(.4,2,.6,1);
          filter: drop-shadow(0 0 4px #ec489955);
        }
        .footer-social-svg:hover {
          filter: drop-shadow(0 0 14px #ec4899bb) brightness(1.25);
          animation: swing 0.7s 1;
        }
        @keyframes swing {
          15% { transform: rotate(-13deg); }
          30% { transform: rotate(10deg);}
          45% { transform: rotate(-8deg);}
          60% { transform: rotate(6deg);}
          75% { transform: rotate(-4deg);}
          100% { transform: rotate(0deg);}
        }
        @media (max-width: 900px) {
          footer > div[style] {
            flex-direction: column !important;
            gap: 22px 0 !important;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}