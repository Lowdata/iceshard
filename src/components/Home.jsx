import "../css/Home.css"; // Import styles
import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const observerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const navigate = useNavigate();

  const heroTexts = [
    "Where Innovation Meets Gaming",
    "Create Beyond Reality",
    "Experience The Future",
    "Join The Revolution",
    "Shape Tomorrow's Games"
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Main Hero Image */}
        <div className="hero-image-container">
          <img src="/home.png" alt="Virtual Globe" className="hero-main-image" />
          <div className="hero-gradient-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="hero-content-wrapper">
          <div className="hero-text-content">
            <h1 className="main-title">IceShard Games</h1>
            <div className="animated-subtitle">
              <span>{heroTexts[currentTextIndex]}</span>
            </div>
            <p className="hero-description">
              Step into a world where imagination knows no bounds. 
              Join us in crafting the future of gaming.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="feature-pills">
            {[
              "Next-Gen VR", 
              "Immersive Worlds", 
              "Social Gaming",
              "Cutting-Edge Tech"
            ].map((feature, index) => (
              <div 
                key={index} 
                className="feature-pill"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="cta-wrapper">
            <button 
              className="cta-button primary"
              onClick={() => handleNavigation('/pre-register')}
            >
              Get Started
              <span className="button-glow"></span>
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => handleNavigation('/who-we-are')}
            >
              Learn More
              <span className="button-glow"></span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <span>Scroll to Explore</span>
          </div>
        </div>
      </section>

      {/* What We Are Working On */}
      <section className="work-section hidden">
        <h2 className="section-title">What We're Working On</h2>
        <div className="work-content">
          <div className="work-image-container">
            <img src="/img.png" alt="VR Project" className="work-image" />
            <div className="image-overlay">
              <span>Latest Project</span>
            </div>
          </div>

          <div className="news-list">
            {[
              {
                id: 1,
                title: "Update on the Southern California Wildfires & Our Fundraiser",
                type: "News"
              },
              {
                id: 2,
                title: "Riot Tech Blog: Improving Performance by Streamlining League's Engine",
                type: "Blog"
              },
              {
                id: 3,
                title: "Fortune Favors the Hungry | Mini Cinematic - Teamfight Tactics",
                type: "Video"
              },
              {
                id: 4,
                title: "Welcome to Nexus | Dev Update - League of Legends",
                type: "Article"
              }
            ].map((news, index) => (
              <Link 
                to={`/news/${news.id}`} 
                key={index} 
                className="news-item hover-glow"
              >
                <h3>{news.title}</h3>
                <p>{news.type}</p>
                <div className="news-hover-effect"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Concept */}
      <section className="core-concept hidden">
        <h2 className="section-title">Core Concepts</h2>
        <div className="concept-grid">
          {[
            {
              icon: "🎮",
              title: "Play Games",
              desc: "Engage in multiplayer experiences blending creativity and realism",
              color: "#FF6B6B"
            },
            {
              icon: "👤",
              title: "Customize Avatars",
              desc: "Create detailed characters, choosing from various species",
              color: "#4ECDC4"
            },
            {
              icon: "📖",
              title: "Watch Story",
              desc: "Experience exclusive story-driven environments",
              color: "#45B7D1"
            },
            {
              icon: "🤝",
              title: "Socialize",
              desc: "Interact with friends in virtual hubs with voice chat and more",
              color: "#96CEB4"
            }
          ].map((concept, index) => (
            <div 
              key={index} 
              className="concept-card"
              style={{"--accent-color": concept.color}}
            >
              <div className="concept-icon">{concept.icon}</div>
              <h3>{concept.title}</h3>
              <p>{concept.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Section */}
      <section className="hiring-section hidden">
        <div className="hiring-content">
          <h2>We're Hiring!</h2>
          <p>Join IceShard Games to shape the future of VR and create unforgettable experiences.</p>
          <div className="hiring-stats">
            <div className="stat-box">
              <div className="stat-number">138</div>
              <p>Open Positions</p>
            </div>
            <div className="stat-box">
              <div className="stat-number">25</div>
              <p>Global Offices</p>
            </div>
          </div>
          <button className="explore-careers"
          onClick={() => handleNavigation('/careers')}
          >Explore Careers</button>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="updates-section hidden">
        <h2 className="section-title">Latest Updates & Blog</h2>
        <div className="updates-grid">
          <div className="update-card">
            <div className="update-content">
              <h3>Development Blog</h3>
              <p>Check out our latest progress and behind-the-scenes insights</p>
            </div>
          </div>
          <div className="update-card">
            <div className="update-content">
              <h3>Community Events</h3>
              <p>Join our upcoming virtual meetups and gaming sessions</p>
            </div>
          </div>
          <div className="update-card">
            <div className="update-content">
              <h3>Feature Updates</h3>
              <p>Explore the newest additions to our virtual universe</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
