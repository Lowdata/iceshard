import "../css/LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="cyber-loader">
          <div className="loader-circle"></div>
          <div className="loader-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
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