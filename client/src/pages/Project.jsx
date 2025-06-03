import React, { useEffect, useState } from "react";

const ProjectCard = ({ title, description, tech, live, github }) => (
  <div className="project-card">
    <h3 className="project-title">{title}</h3>
    <p className="project-description">{description}</p>
    <div className="project-tech">
      {Array.isArray(tech) &&
        tech.map((item) => (
          <span className="tech-badge" key={item}>{item}</span>
        ))}
    </div>
    <div className="project-links">
      {live &&
        <a href={live} target="_blank" rel="noopener noreferrer" className="project-link">
          Live Demo
        </a>
      }
      {github &&
        <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">
          GitHub
        </a>
      }
    </div>
  </div>
);

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setFetchError(err.message || "Unknown error");
        setProjects([]);
        setLoading(false);
      });
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {loading && <p>Loading...</p>}
        {fetchError && <p style={{ color: "#ff5c8a" }}>Error: {fetchError}</p>}
        {!loading && !fetchError && projects.length === 0 && (
          <p>No projects to display.</p>
        )}
        {!loading && !fetchError && projects.map((project) => (
          <ProjectCard
            key={project._id || project.title}
            {...project}
          />
        ))}
      </div>
      <style>{`
        .projects-section {
          padding: 48px 0;
          background: #18192b;
          color: #fff;
        }
        .section-title {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 32px;
          letter-spacing: 2px;
        }
        .projects-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .project-card {
          background: #22223b;
          border-radius: 18px;
          padding: 30px 24px 20px 24px;
          box-shadow: 0 2px 32px #a165f72b;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform .18s, box-shadow .18s;
        }
        .project-card:hover {
          transform: translateY(-7px) scale(1.04);
          box-shadow: 0 10px 40px #ec489933;
        }
        .project-title {
          font-size: 1.3rem;
          margin-bottom: 12px;
          font-weight: 600;
          color: #ec4899;
          letter-spacing: 1.2px;
        }
        .project-description {
          font-size: 1rem;
          margin-bottom: 16px;
          color: #d1d5db;
        }
        .project-tech {
          margin-bottom: 12px;
        }
        .tech-badge {
          display: inline-block;
          background: #312e81;
          color: #7dd3fc;
          border-radius: 8px;
          padding: 5px 12px;
          font-size: .92rem;
          margin-right: 7px;
          margin-bottom: 5px;
        }
        .project-links {
          margin-top: auto;
          display: flex;
          gap: 18px;
        }
        .project-link {
          color: #fff;
          background: linear-gradient(90deg, #ec4899 60%, #a165f7 100%);
          padding: 7px 16px;
          border-radius: 7px;
          font-weight: 500;
          text-decoration: none;
          transition: background .18s, color .18s;
        }
        .project-link:hover {
          background: linear-gradient(90deg, #a165f7 10%, #3ec6f6 90%);
          color: #fff;
        }
        @media (max-width: 700px) {
          .projects-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Project;