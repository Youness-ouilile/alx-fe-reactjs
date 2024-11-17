

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './Components/Navbar'; 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';  

function App() {
  return (
    <Router>
      <div>
       
        <Navbar />
        
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;