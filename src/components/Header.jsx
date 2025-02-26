import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      const isScrolledPastThreshold = currentScrollPos > 100;

      setVisible(!isScrollingDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.nav-menu') && !e.target.closest('.menu-button')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <header className={`header ${visible ? "header-visible" : "header-hidden"}`}>
      <div className="logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src="/img/logos/default_logo.png" alt="Logo" />
        </Link>
      </div>

      <button 
        className="menu-button" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          </li>
          <li>
            <Link to="/who-we-are" onClick={() => setMenuOpen(false)}>WHO WE ARE</Link>
          </li>
          <li>
            <Link to="/team" onClick={() => setMenuOpen(false)}>WORK WITH US</Link>
          </li>
          <li>
            <Link to="/news" onClick={() => setMenuOpen(false)}>NEWS</Link>
          </li>
          <li>
            <Link 
              to="/pre-register" 
              className="pre-register"
              onClick={() => setMenuOpen(false)}
            >
              Pre-Register
            </Link>
          </li>
        </ul>
      </nav>

      {/* Pre-register button for desktop */}
      <Link 
        to="/pre-register" 
        className="pre-register"
        onClick={() => setMenuOpen(false)}
      >
        Pre-Register
      </Link>
    </header>
  );
};

export default Header;
