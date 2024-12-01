import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost';  // Import the BlogPost component
import NotFound from './pages/NotFound';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulated login state

  const login = () => {
    // Simulate user login
    setIsAuthenticated(true); // Mark as authenticated
  };

  return (
    <Router>
      <div>
        <h1>Welcome to React Router Advanced Example</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/blog/1">Blog Post 1</a>
            </li>
            <li>
              <a href="/blog/2">Blog Post 2</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home login={login} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile/*"
            element={<ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />}
          />
          <Route path="/blog/:postId" element={<BlogPost />} /> {/* Dynamic route for BlogPost */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
