import React, { useState } from 'react';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Service from './pages/Service';
import Project from './pages/Project';
import Testimonial from "./pages/Testimonial";
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Navbar />
        <div className="pt-20"> {/* Add top padding so content isn't hidden behind navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
