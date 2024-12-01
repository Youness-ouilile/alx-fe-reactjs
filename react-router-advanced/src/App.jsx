import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulated login state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile/*"
          element={<ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}


export default App;
