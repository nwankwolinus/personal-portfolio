import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiOpensourceinitiative,
  SiPhotobucket,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

// Vite environment variable for API base URL, fallback to "/api"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

const skillIcons = {
  React: <FaReact color="#61DBFB" />,
  "Tailwind CSS": <SiTailwindcss color="#38BDF8" />,
  "Node.js": <FaNodeJs color="#339933" />,
  Express: <SiExpress color="#fff" />,
  JavaScript: <SiJavascript color="#f7df1e" />,
};

const interestIcons = {
  "UI/UX Design": <MdDesignServices color="#ff57b2" />,
  "Open Source": <SiOpensourceinitiative color="#3ec6f6" />,
  Photography: <SiPhotobucket color="#a165f7" />,
};

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/about`)
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch(() => setAboutData(null));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setParallax({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!aboutData)
    return (
      <div
        style={{
          minHeight: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading...
      </div>
    );

  const hero = aboutData.hero || {};
  const gradient = hero.gradient || "linear-gradient(90deg, #ff57b2 20%, #a165f7 60%, #3ec6f6 100%)";
  const background =
    hero.background ||
    "radial-gradient(circle at 70% 40%, #30235a 0%, #191b2a 70%)";

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        background,
        overflow: "hidden",
      }}
    >
      {/* Hero Image with blur/dark/animated parallax */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "900px",
          height: "550px",
          transform: `translate(-50%, -50%) translate(${parallax.x}px, ${parallax.y}px)`,
          zIndex: 1,
          overflow: "hidden",
          borderRadius: "32px",
          boxShadow: "0 8px 48px #0006",
          transition: "transform 0.6s cubic-bezier(.22,1,.36,1)",
          pointerEvents: "none",
        }}
      >
        <img
          src={aboutData.image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.62) blur(2.5px) grayscale(12%)",
            transition: "filter 0.3s",
            userSelect: "none",
            pointerEvents: "none",
          }}
          draggable="false"
        />
        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(108deg, rgba(24,20,36,0.90) 58%, rgba(24,20,36,0.16) 100%)",
            zIndex: 2,
          }}
        />
        {/* Animated blurred glow behind the text */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "10%",
            width: "300px",
            height: "160px",
            background: "radial-gradient(circle, #ff57b2 0%, transparent 70%)",
            filter: "blur(42px)",
            opacity: 0.4,
            zIndex: 3,
            pointerEvents: "none",
            animation: "glow 3.6s infinite alternate",
          }}
        />
      </div>

      {/* Main Content */}
      <section
        style={{
          position: "absolute",
          top: "54%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          width: "700px",
          maxWidth: "96vw",
          padding: "48px 36px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "rgba(24, 20, 36, 0.44)",
          borderRadius: 24,
          boxShadow: "0 8px 48px #0007",
          animation: "fadeInUp 1.2s cubic-bezier(.22,1,.36,1)",
          backdropFilter: "blur(2.5px)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.9rem, 7vw, 5rem)",
            fontWeight: 800,
            letterSpacing: "-2px",
            marginBottom: 10,
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.08,
          }}
        >
          {hero.headline || "FRONTEND DEVELOPER"}
        </h1>
        <p
          style={{
            fontSize: "clamp(1.1rem, 2.4vw, 1.7rem)",
            color: "#e3e3e9",
            marginBottom: 24,
            maxWidth: 540,
            lineHeight: 1.45,
          }}
        >
          {hero.intro ||
            "I am a web-developer with a passion for creating beautiful and responsive websites."}
        </p>

        {/* Skills with icons */}
        {aboutData.skills && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
            {aboutData.skills.map((skill) => (
              <span
                key={skill}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  background: "#232843",
                  color: "#a2b3e1",
                  borderRadius: 18,
                  padding: "7px 16px",
                  fontSize: "1.07rem",
                  fontWeight: 500,
                  boxShadow: "0 1px 8px #191b2a33",
                  transition: "background .17s",
                }}
              >
                {skillIcons[skill] || null}
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Interests with icons */}
        {aboutData.interests && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 38 }}>
            {aboutData.interests.map((interest) => (
              <span
                key={interest}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  background: "#23172b",
                  color: "#f7bff8",
                  borderRadius: 18,
                  padding: "7px 16px",
                  fontSize: "1.07rem",
                  fontWeight: 500,
                  boxShadow: "0 1px 8px #3ec6f655",
                }}
              >
                {interestIcons[interest] || null}
                {interest}
              </span>
            ))}
          </div>
        )}

        {hero.cta && (
          <button
            style={{
              display: "inline-block",
              padding: "18px 48px",
              borderRadius: 32,
              fontWeight: 700,
              fontSize: "1.18rem",
              color: "#fff",
              background: gradient,
              border: "none",
              boxShadow: "0 2px 24px #3ec6f633",
              textDecoration: "none",
              marginTop: 8,
              pointerEvents: "all",
              transition: "filter 0.18s, box-shadow .2s",
              filter: "drop-shadow(0 2px 16px #3ec6f655)",
              cursor: "pointer"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.filter = "brightness(1.15)";
              e.currentTarget.style.boxShadow = "0 4px 32px #ff57b2cc";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.filter = "none";
              e.currentTarget.style.boxShadow = "0 2px 24px #3ec6f633";
            }}
            onClick={() => navigate("/projects")}
          >
            {hero.cta.label || "VIEW MY WORK"}
          </button>
        )}
      </section>

      {/* Responsive and animated background CSS */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translate(-50%, 30%);}
          100% { opacity: 1; transform: translate(-50%, -50%);}
        }
        @keyframes glow {
          0% { opacity: 0.36; }
          100% { opacity: 0.7; }
        }
        @media (max-width: 900px) {
          div[style*="width: 900px"] {
            width: 100vw !important;
            height: 360px !important;
            border-radius: 0 !important;
          }
          section[style] {
            width: 98vw !important;
            max-width: 98vw !important;
            padding: 28px 6vw !important;
            border-radius: 0 !important;
          }
        }
        @media (max-width: 600px) {
          h1 { font-size: 2.2rem !important; }
          p { font-size: 1.08rem !important; }
          button[style] { font-size: 1rem !important; padding: 14px 22px !important; }
        }
      `}</style>
    </div>
  );
};

export default About;