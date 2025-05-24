import React, { useEffect, useState } from "react";
import { MdDesignServices } from "react-icons/md";
import { FaReact, FaNodeJs, FaFileAlt, FaFileSignature, FaImage, FaSearch, FaRobot } from "react-icons/fa";

// Icon mapping
const iconMap = {
  MdDesignServices: <MdDesignServices size={38} color="#ff57b2" />,
  FaReact: <FaReact size={38} color="#61DBFB" />,
  FaNodeJs: <FaNodeJs size={38} color="#339933" />,
  FaFileAlt: <FaFileAlt size={38} color="#ffd43b" />,
  FaFileSignature: <FaFileSignature size={38} color="#7c3aed" />,
  FaImage: <FaImage size={38} color="#f472b6" />,
  FaSearch: <FaSearch size={38} color="#0ea5e9" />,
  FaRobot: <FaRobot size={38} color="#fbbf24" />,
};

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch(() => setServices([]));
  }, []);

  return (
    <section 
      id="services"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #191b2a 0%, #30235a 100%)",
        padding: "60px 0",
      }}
    >
      <h2 style={{
        color: "#fff",
        fontSize: "2.6rem",
        textAlign: "center",
        marginBottom: 32,
        scrollMarginTop: 80,
      }}>
        My Services
      </h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="service-card"
            style={{
              animationDelay: `${idx * 0.11}s`,
            }}
          >
            <div className="icon-holder">
              {iconMap[service.icon] || <MdDesignServices size={38} color="#a2b3e1" />}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
      {/* Inline styles for demo, move to CSS file in production */}
      <style>
        {`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.2rem;
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          .service-card {
            background: rgba(44, 39, 65, 0.94);
            border-radius: 18px;
            padding: 36px 28px;
            color: #fff;
            min-height: 220px;
            box-shadow: 0 4px 32px #0003;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: 
              transform 0.23s cubic-bezier(.2,.8,.2,1),
              box-shadow 0.22s cubic-bezier(.2,.8,.2,1),
              background 0.18s;
            cursor: pointer;
            opacity: 0;
            transform: translateY(30px) scale(0.97);
            animation: fadeInUp 0.6s forwards;
          }
          .service-card:hover {
            transform: scale(1.04) translateY(-7px);
            box-shadow: 0 14px 44px #0006;
            background: rgba(56, 45, 88, 0.98);
          }
          .icon-holder {
            margin-bottom: 18px;
          }
          .service-title {
            font-size: 1.33rem;
            margin-bottom: 10px;
            font-weight: 700;
            letter-spacing: -1px;
            text-align: center;
          }
          .service-desc {
            font-size: 1.09rem;
            color: #c7c7d9;
            text-align: center;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px) scale(0.97);}
            70% { opacity: 0.5; }
            100% { opacity: 1; transform: translateY(0) scale(1);}
          }
          @media (max-width: 800px) {
            .services-grid {
              grid-template-columns: 1fr;
            }
            section#services {
              padding: 36px 0;
            }
            .service-card {
              padding: 24px 16px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Service;