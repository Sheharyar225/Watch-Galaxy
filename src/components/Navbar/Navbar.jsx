// src/components/Navbar/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaCrown, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ cartItemsCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={handleNavClick}>
          <FaCrown className="logo-icon" />
          <span>WatchGalaxy</span>
        </Link>
        
        {/* Hamburger Menu Button */}
        <button 
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div className={`nav-links-container ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={handleNavClick}>Home</Link>
            </li>
            <li>
              <Link to="/collections" onClick={handleNavClick}>Collections</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleNavClick}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavClick}>Contact</Link>
            </li>
          </ul>
          
          {/* Cart Button for Mobile */}
          <div className="nav-actions-mobile">
            <button className="cart-btn mobile-cart-btn" onClick={() => { onCartClick(); handleNavClick(); }}>
              <FaShoppingBag />
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
              <span>Cart ({cartItemsCount})</span>
            </button>
          </div>
        </div>

        {/* Desktop Cart Button */}
        <div className="nav-actions">
          <button className="cart-btn" onClick={onCartClick}>
            <FaShoppingBag />
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </button>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div 
            className="nav-overlay"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;