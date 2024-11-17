import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ margin: '0 15px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
            About
          </Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>
            Services
          </Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;