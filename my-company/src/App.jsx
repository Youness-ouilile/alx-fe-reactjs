import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import HomePage from './components/Home';
import AboutPage from './components/About';
import ServicesPage from './components/Services';
import ContactPage from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />  {}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
