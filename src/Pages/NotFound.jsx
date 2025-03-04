import "../css/NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-screen">
      <div className="not-found-content">
        
        <img src="/img/logos/logo_1.png" alt="Company Logo" className="not-found-logo" loading="lazy" />
        
        {/* Error Message */}
        <h1 className="glow-text">404</h1>
        <p className="glow-subtext">Oops! Page Not Found</p>

        {/* Back Home Button */}
        <Link to="/" className="back-home-btn">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
