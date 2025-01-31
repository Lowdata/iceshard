import React, { useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Hamburger Menu (Only Visible on Mobile) */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navigation Menu */}
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">WHO ARE WE</a>
          </li>
          <li>
            <a href="#">WORK WITH US</a>
          </li>
          <li>
            <a href="#">NEWS</a>
          </li>
        </ul>
      </nav>

      <button className="pre-register">Pre-Register</button>
    </header>
  );
};

export default Header;
