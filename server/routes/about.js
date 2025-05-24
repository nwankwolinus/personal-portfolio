const express = require('express');
const router = express.Router();

const aboutData = {
  image: "https://images.unsplash.com/photo-1713816302861-1ff8d4b09fad?q=80&w=2926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Your Name",
  description: "Short bio/summary...",
  skills: ["React", "Tailwind CSS", "Node.js", "Express", "JavaScript"],
  interests: ["UI/UX Design", "Open Source", "Photography"],
  hero: {
    headline: "FRONTEND DEVELOPER",
    intro: "I am Your Name – web-developer with a passion for creating beautiful and responsive websites.",
    cta: {
      label: "VIEW MY WORK",
      link: "#contact"
    },
    gradient: "linear-gradient(90deg, #ff57b2 20%, #a165f7 60%, #3ec6f6 100%)",
    background: "radial-gradient(circle at 70% 40%, #30235a 0%, #191b2a 70%)"
  }
};

router.get('/', (req, res) => {
  res.json(aboutData);
});

module.exports = router;