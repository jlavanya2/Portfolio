import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Projects from './components/Projects';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </>
  );
}
