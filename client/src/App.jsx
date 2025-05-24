import React, { useState } from 'react';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Service from './pages/Service';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Navbar />
        <div className="pt-20"> {/* Add top padding so content isn't hidden behind navbar */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
