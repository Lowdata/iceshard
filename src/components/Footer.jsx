import "../css/logo.css"
import { Link } from "react-router-dom"

const Footer = () => (
  <footer className="footer_part">
    <div className="footer_content">
      <div className="footer_main">
        {/* Logo Section */}
        <div className="footer_logo_section">
          <Link to="/" className="footer_logo">
            <img src="/img/logos/default.jpg" alt="IceShard" loading="lazy" className="glow-effect" />

          </Link>
        </div>

        {/* Quick Links */}
        <div className="footer_links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/who-we-are">About Us</Link></li>
            <li><Link to="/team">Careers</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer_contact">
          <h4>Contact Us</h4>
          <div className="contact_info">
            <p>
              <i className="fas fa-map-marker-alt"></i>
              73, Central School Scheme, Airforce Colony,
              Jodhpur, 342011
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              contact@iceshardgames.com
            </p>
          </div>
        </div>

        {/* Social Links */}
        {/* <div className="footer_social">
          <h4>Follow Us</h4>
          <div className="social_links">
            <a href="#" className="social_icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social_icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social_icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social_icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div> */}
      </div>

      {/* Copyright Section */}
      <div className="footer_bottom">
        <p>
          © {new Date().getFullYear()} IceShard Games. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
