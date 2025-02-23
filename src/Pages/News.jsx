import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import "../css/News.css";
import { blogPosts } from '../data/blogs';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      setArticles(blogPosts); // Use the imported blogPosts directly
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="news-container">
      {/* Hero Section with background image */}
      <section 
        className="news-hero" 
        style={{ backgroundImage: "url('/img/live_stareams_bg.png')" }}
      >
        <h1>Latest Updates</h1>
        <p>Stay informed about the latest developments at IceShard Games</p>
      </section>

      {/* Articles Grid */}
      <section className="articles-grid">
        {articles.map((article) => (
          <Link
            to={`/news/${article.id}`}
            key={article.id}
            className={`article-preview ${article.featured ? 'featured' : ''}`}
          >
            <div className="preview-image">
              <img src={article.image} alt={article.title} />
              <div className="image-overlay"></div>
            </div>
            <div className="preview-content">
              <div className="article-meta">
                <span className="category">{article.category}</span>
                <span className="date">{article.date}</span>
              </div>
              <h2>{article.title}</h2>
              {article.subtitle && <h3 className="subtitle">{article.subtitle}</h3>}
              <p>{article.excerpt}</p>
              <div className="preview-footer">
                <span className="author">By {article.author.name}</span>
                <span className="read-time">{article.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default News;
