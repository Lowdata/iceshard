import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const navigate = useNavigate();
  
  const texts = [
    "Next-Gen Gaming",
    "Virtual Worlds",
    "Digital Innovation",
    "Future of Play",
    "Gaming Evolution"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const blogPosts = [
    {
      title: "Project Nexus Development Update",
      excerpt: "Exploring the latest features and innovations in our upcoming VR experience.",
      image: "img/event_bg.png",
      category: "Development"
    },
    {
      title: "The Future of Gaming Technology",
      excerpt: "How we're pushing boundaries with next-generation gaming experiences.",
      image: "img/live_streams_1.png",
      category: "Technology"
    },
    {
      title: "Community Spotlight",
      excerpt: "Highlighting amazing creations from our growing community.",
      image: "img/gallery/gallery_item_5.png",
      category: "Community"
    }
  ];

  return (
    <div className={`home-container ${isVisible ? 'visible' : ''}`}>
      <section className="hero-section">
        <div className="hero-background">
          <img src="img/banner_img.png" alt="Hero Background" className="hero-main-image" />
          <div className="hero-gradient-overlay"></div>
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-text-content">
            <h1 className="mega-glitch-text" data-text="IceShard Games">IceShard Games</h1>
            <div className="animated-subtitle">
              <span className="cyber-glitch-text" data-text={texts[currentText]}>
                {texts[currentText]}
              </span>
            </div>
            <p className="hero-description">
              Crafting immersive digital experiences that push the boundaries of gaming technology
            </p>
          </div>

          <div className="feature-pills">
            {["Virtual Reality", "Next-Gen Graphics", "AI Integration", "Cross-Platform"].map((feature, index) => (
              <span key={index} className="feature-pill" style={{animationDelay: `${index * 0.1}s`}}>
                {feature}
              </span>
            ))}
          </div>

          <div className="cta-wrapper">
            <button className="cta-button primary" onClick={() => navigate('/games')}>
              Explore Games
            </button>
            <button className="cta-button secondary" onClick={() => navigate('/careers')}>
              Join Our Team
            </button>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span className="scroll-text">Scroll Down</span>
        </div>
      </section>

      <section className="blog-section">
        <h2 className="section-title glitch-text" data-text="Latest Updates">Latest Updates</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="image-overlay"></div>
              </div>
              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button className="read-more">Read More</button>
              </div>
              <div className="card-glitch-effect"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Add other sections as needed */}
    </div>
  );
};

export default Home; 