import React from "react";
import "../css/Home.css"; // Import styles

const Home = () => {
  return (
    <div className="home-container">
      {/* Background Image */}
      <img className="banner-image" src="/home.png" alt="Holographic Globe" />

      {/* Content Overlay */}
      <div className="home-content">
        <h1>Revolutionizing Virtual Reality</h1>
        <p>Discover the power of imagination with IceShard Games</p>
      </div>
    </div>
  );
};

export default Home;
