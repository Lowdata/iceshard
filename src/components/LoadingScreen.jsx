import "../css/LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="cyber-loader">
          {/* Company Logo with glowing pulse effect */}
          <img
            src="/img/logos/logo_1.png"
            alt="Company Logo"
            className="company-logo"
            loading="lazy"
          />
          <div className="loader-circle"></div>
        </div>
        <h2>Loading</h2>
        <div className="loading-text">
          <span>Initializing</span>
          <span className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
