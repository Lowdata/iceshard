import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
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
