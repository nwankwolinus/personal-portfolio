import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

// --- Styles ---
const navStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 60,
  background: "rgba(25, 27, 42, 0.92)",
  boxShadow: "0 6px 24px rgba(0,0,0,0.18)",
  backdropFilter: "blur(8px)",
};

const containerStyle = {
  maxWidth: "1280px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 20px",
};

const logoColumnStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textDecoration: "none",
  userSelect: "none",
  lineHeight: 1,
  position: "relative"
};

const logoImageStyle = {
  height: 60,
  width: 60,
  objectFit: "contain",
  background: "transparent",
  borderRadius: 0,
  boxShadow: "none",
  display: "block",
  zIndex: 1,
  position: "relative"
};

const brandBarStyle = {
  fontFamily: "'Orbitron', 'Inter', sans-serif",
  fontWeight: 600,
  fontSize: "12px",
  letterSpacing: "1px",
  background: "linear-gradient(90deg, #ff57b2 20%, #a165f7 60%, #3ec6f6 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "#ec4899",
  margin: 0,
  textAlign: "center",
  textShadow: "0 2px 8px #23243d33",
  lineHeight: "1.12",
  padding: 0,
  border: "none",
  display: "inline-block",
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, 0)",
  zIndex: 2,
  pointerEvents: "none",
  whiteSpace: "nowrap",
};

const navLinksStyle = {
  display: "flex",
  gap: "22px",
};

const linkBase = {
  padding: "8px 14px",
  borderRadius: "10px",
  fontWeight: 500,
  textDecoration: "none",
  color: "#e5e7eb",
  fontSize: "1rem",
  transition: "all 0.15s",
  outline: "none",
  border: "none",
  background: "transparent",
  display: "block",
  margin: 0,
};

const activeLink = {
  background: "#ec4899",
  color: "#fff",
};

const hoverLink = {
  background: "rgba(236, 72, 153, 0.11)",
  color: "#ec4899",
};

// Hamburger menu styles
const hamburgerStyle = {
  display: "none",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: 40,
  height: 40,
  cursor: "pointer",
  background: "none",
  border: "none",
  zIndex: 90,
  marginLeft: 8,
};

const barStyle = {
  width: 26,
  height: 3,
  background: "#ec4899",
  margin: "4px 0",
  borderRadius: 2,
  transition: "all 0.3s",
  display: "block",
};

const getResponsiveStyles = (menuOpen) => {
  const MOBILE_BREAKPOINT = 760;
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

  const baseMobileMenu = {
    position: "fixed",
    top: 0,
    right: 0,
    minWidth: 190,
    maxWidth: "75vw",
    borderRadius: "0 0 0 14px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.22)",
    background: "rgba(25,27,42,0.98)",
    padding: "24px 18px 24px 16px",
    gap: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    zIndex: 120,
    transform: menuOpen ? "translateY(0%)" : "translateY(-24px)",
    opacity: menuOpen ? 1 : 0,
    pointerEvents: menuOpen ? "auto" : "none",
    transition: "opacity 0.32s cubic-bezier(.4,2,.6,1), transform 0.32s cubic-bezier(.4,2,.6,1)",
    minHeight: "140px"
  };

  if (windowWidth < MOBILE_BREAKPOINT) {
    return {
      navLinks: { display: "none" },
      hamburger: { display: "flex" },
      mobileMenu: baseMobileMenu,
      overlay: {
        display: menuOpen ? "block" : "none",
        position: "fixed",
        inset: 0,
        background: "rgba(30,25,40,0.53)",
        zIndex: 110,
        opacity: menuOpen ? 1 : 0,
        transition: "opacity 0.3s",
        pointerEvents: menuOpen ? "auto" : "none",
      },
      closeIcon: {
        display: "block",
        position: "absolute",
        top: 10,
        right: 7,
        width: 18,
        height: 18,
        cursor: "pointer",
        background: "none",
        border: "none",
        zIndex: 130,
        padding: 0,
        outline: "none",
      },
      closeLine1: {
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 14,
        height: 2,
        background: "#ec4899",
        borderRadius: 2,
        transform: "translate(-50%, -50%) rotate(45deg)",
        transition: "all 0.3s",
      },
      closeLine2: {
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 14,
        height: 2,
        background: "#ec4899",
        borderRadius: 2,
        transform: "translate(-50%, -50%) rotate(-45deg)",
        transition: "all 0.3s",
      }
    };
  }
  return {
    navLinks: navLinksStyle,
    hamburger: { display: "none" },
    mobileMenu: { display: "none" },
    overlay: { display: "none" },
    closeIcon: { display: "none" },
    closeLine1: {},
    closeLine2: {},
  };
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [responsive, setResponsive] = useState(getResponsiveStyles(false));

  useEffect(() => {
    function handleResize() {
      setResponsive(getResponsiveStyles(menuOpen));
      if (window.innerWidth >= 760) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    setResponsive(getResponsiveStyles(menuOpen));
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleMouseOver = (e) => Object.assign(e.target.style, hoverLink);
  const handleMouseOut = (e) => {
    if (e.target.classList.contains("active")) {
      Object.assign(e.target.style, { ...linkBase, ...activeLink });
    } else {
      Object.assign(e.target.style, linkBase);
    }
  };

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contacts", label: "Contacts" },
  ];

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link
          to="/"
          style={logoColumnStyle}
          tabIndex={0}
          aria-label="LINUXe native Home"
        >
          <img
            src="https://res.cloudinary.com/dqv8rh26a/image/upload/v1748384102/LinuxeLogo_bxu0fk.png"
            alt="LINUXe native Logo"
            style={logoImageStyle}
          />
          <span style={brandBarStyle}>LINUXe native</span>
        </Link>
        {/* Desktop links */}
        <div style={responsive.navLinks}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              style={({ isActive }) =>
                isActive ? { ...linkBase, ...activeLink } : linkBase
              }
              className={({ isActive }) => (isActive ? "active" : "")}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        {/* Hamburger icon */}
        <button
          style={{ ...hamburgerStyle, ...responsive.hamburger }}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span style={barStyle}></span>
          <span style={barStyle}></span>
          <span style={barStyle}></span>
        </button>
        {/* Overlay */}
        {responsive.overlay && responsive.overlay.display === "block" && (
          <div
            style={responsive.overlay}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          />
        )}
        {/* Mobile menu */}
        <div style={responsive.mobileMenu}>
          {/* X Close Icon */}
          {responsive.closeIcon && responsive.closeIcon.display === "block" && (
            <button
              style={responsive.closeIcon}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span style={responsive.closeLine1}></span>
              <span style={responsive.closeLine2}></span>
            </button>
          )}
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              style={({ isActive }) =>
                isActive ? { ...linkBase, ...activeLink } : linkBase
              }
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMenuOpen(false)}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
      {/* Orbitron font for branding */}
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap"
        rel="stylesheet"
      />
    </nav>
  );
}