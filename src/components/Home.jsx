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

      {/* What We Are Working On */}
      <section className="work-section">
        <h2>What We're Working On</h2>
        <div className="work-content">
          <img
            src="/img.png"
            alt="VR Project"
            className="work-image"
          />

          <div className="news-list">
            <div className="news-item">
              <h3>
                Update on the Southern California Wildfires & Our Fundraiser
              </h3>
              <p>News</p>
            </div>
            <div className="news-item">
              <h3>
                Riot Tech Blog: Improving Performance by Streamlining League’s
                Engine
              </h3>
              <p>Tech Blog</p>
            </div>
            <div className="news-item">
              <h3>
                Fortune Favors the Hungry | Mini Cinematic - Teamfight Tactics
              </h3>
              <p>News</p>
            </div>
            <div className="news-item">
              <h3>Welcome to Nexus | Dev Update - League of Legends</h3>
              <p>News</p>
            </div>
          </div>
        </div>
        <p className="work-description">
          FusionVR is a cutting-edge virtual reality platform that integrates
          entertainment, education, and social interaction into a unified
          ecosystem...
        </p>
      </section>

      {/* Core Concept */}
      <section className="core-concept">
        <h2>Core Concept</h2>
        <ul>
          <li>
            <strong>Play Games:</strong> Engage in multiplayer experiences
            blending creativity and realism.
          </li>
          <li>
            <strong>Customize Avatars:</strong> Create detailed characters,
            choosing from various species.
          </li>
          <li>
            <strong>Watch Story:</strong> Experience exclusive story-driven
            environments.
          </li>
          <li>
            <strong>Socialize:</strong> Interact with friends in virtual hubs
            with voice chat and more.
          </li>
        </ul>
      </section>

      {/* Hiring Section */}
      <section className="hiring-section">
        <h2>We're Hiring!</h2>
        <p>
          Join IceShard Games to shape the future of VR and create unforgettable
          experiences.
        </p>
        <div className="hiring-stats">
          <div className="stat-box">
            <h3>138</h3>
            <p>Open Positions</p>
          </div>
          <div className="stat-box">
            <h3>25</h3>
            <p>Global Offices</p>
          </div>
        </div>
        <button className="explore-careers">Explore Careers</button>
      </section>

      {/* Future Posts Section */}
      <section className="posts-section">
        <h2>Latest Updates & Blog</h2>
        <p>Stay tuned for upcoming announcements, developer blogs, and more!</p>
        <div className="posts-placeholder">📢 Coming Soon...</div>
      </section>
    </div>
  );
};

export default Home;
