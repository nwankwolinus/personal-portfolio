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
  padding: "22px 48px",
};

const brandStyle = {
  fontSize: "2.6rem",
  fontWeight: "bold",
  color: "#ec4899",
  textDecoration: "none",
  letterSpacing: "1px",
};

const navLinksStyle = {
  display: "flex",
  gap: "34px",
};

const linkBase = {
  padding: "10px 28px",
  borderRadius: "10px",
  fontWeight: 500,
  textDecoration: "none",
  color: "#e5e7eb",
  fontSize: "1.11rem",
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

const hamburgerStyle = {
  display: "none",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: 36,
  height: 36,
  cursor: "pointer",
  background: "none",
  border: "none",
  zIndex: 70,
};

const barStyle = {
  width: 26,
  height: 3,
  background: "#ec4899",
  margin: "4px 0",
  borderRadius: 2,
  transition: "all 0.3s",
};

// --- Responsive and Animation styles ---
const getResponsiveStyles = (menuOpen) => {
  const baseMobileMenu = {
    position: "fixed",
    top: 0,
    right: 0,
    minWidth: 210,
    borderRadius: "0 0 0 18px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.22)",
    background: "rgba(25,27,42,0.98)",
    padding: "32px 32px 32px 28px",
    gap: "22px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    zIndex: 80,
    transform: menuOpen ? "translateY(0%)" : "translateY(-24px)",
    opacity: menuOpen ? 1 : 0,
    pointerEvents: menuOpen ? "auto" : "none",
    transition: "opacity 0.32s cubic-bezier(.4,2,.6,1), transform 0.32s cubic-bezier(.4,2,.6,1)",
  };

  // Hamburger shows, nav links hide on mobile
  if (window.innerWidth < 820) {
    return {
      navLinks: { display: "none" },
      hamburger: { display: "flex" },
      mobileMenu: baseMobileMenu,
      overlay: {
        display: menuOpen ? "block" : "none",
        position: "fixed",
        inset: 0,
        background: "rgba(30,25,40,0.53)",
        zIndex: 70,
        opacity: menuOpen ? 1 : 0,
        transition: "opacity 0.3s",
        pointerEvents: menuOpen ? "auto" : "none",
      },
      closeIcon: {
        display: "block",
        position: "absolute",
        top: 18,
        right: 18,
        width: 32,
        height: 32,
        cursor: "pointer",
        background: "none",
        border: "none",
        zIndex: 100,
        padding: 0,
        outline: "none",
      },
      closeLine1: {
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 28,
        height: 4,
        background: "#ec4899",
        borderRadius: 2,
        transform: "translate(-50%, -50%) rotate(45deg)",
        transition: "all 0.3s",
      },
      closeLine2: {
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 28,
        height: 4,
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

  // Handle responsiveness and menu animation state on window resize
  useEffect(() => {
    function handleResize() {
      setResponsive(getResponsiveStyles(menuOpen));
      if (window.innerWidth >= 820) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Animate overlay and menu on open
  useEffect(() => {
    setResponsive(getResponsiveStyles(menuOpen));
    // Prevent body scroll when menu open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; }
  }, [menuOpen]);

  // Helper for NavLink
  const handleMouseOver = (e) => Object.assign(e.target.style, hoverLink);
  const handleMouseOut = (e) => {
    if (e.target.classList.contains("active")) {
      Object.assign(e.target.style, { ...linkBase, ...activeLink });
    } else {
      Object.assign(e.target.style, linkBase);
    }
  };

  // Links array for easy mapping
  const links = [
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contacts", label: "Contacts" },
  ];

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link to="/" style={brandStyle} tabIndex={0}>
          MyBrand
        </Link>
        {/* Desktop links */}
        <div style={responsive.navLinks}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
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
    </nav>
  );
}