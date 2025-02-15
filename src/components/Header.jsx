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

  return (
    <header className={`header ${visible ? 'header-visible' : 'header-hidden'}`}>
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Hamburger Menu (Only Visible on Mobile) */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navigation Menu */}
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/who-we-are">WHO ARE WE</Link>
          </li>
          <li>
            <Link to="/team">WORK WITH US</Link>
          </li>
          <li>
            <Link to="/news">NEWS</Link>
          </li>
        </ul>
      </nav>

      <Link to="/pre-register" className="pre-register">Pre-Register</Link>
    </header>
  );
};

export default Header;
