import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../css/Home.css";
import { blogPosts } from '../data/blogs';

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
            <h2 className="cyber-glitch-text main-subtitle" data-text="Create Beyond Reality">
              Create Beyond Reality
            </h2>
            <div className="animated-subtitle">
              <span className="cyber-glitch-text changing-text" data-text={texts[currentText]}>
                {texts[currentText]}
              </span>
            </div>
            <p className="hero-description">
              Step into a world where imagination knows no bounds. Join us in crafting the future of gaming.
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
        <div className="news-list">
          {blogPosts.map((news, index) => (
            <Link 
              to={`/news/${news.id}`} 
              key={index} 
              className="news-item"
            >
              <div className="news-item-image">
                <img src={news.image} alt={news.title} />
              </div>
              <div className="news-item-content">
                <div>
                  <h3>{news.title}</h3>
                  <p>{news.excerpt.substring(0, 100)}...</p>
                </div>
                <div className="news-meta">
                  <span className="news-category">{news.category}</span>
                  <span className="news-date">{news.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Add other sections as needed */}
    </div>
  );
};

export default Home; 