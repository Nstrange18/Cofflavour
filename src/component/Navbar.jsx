import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiCoffee } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        <Link to="/" className="brand-logo">
          <div className="brand-icon-wrapper">
            <FiCoffee className="brand-icon" />
          </div>
          <span className="brand-text">Cofflavour</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/products" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Products</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="btn-outline nav-login-btn">Login</Link>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" className="mobile-link">Home</NavLink>
        <NavLink to="/products" className="mobile-link">Products</NavLink>
        <NavLink to="/about" className="mobile-link">About</NavLink>
        <NavLink to="/contact" className="mobile-link">Contact</NavLink>
        <Link to="/login" className="btn-primary mobile-login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
