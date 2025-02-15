import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import "../css/News.css";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy data - replace with API call
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setArticles([
        {
          id: 1,
          title: "The Future of Gaming: IceShard's Vision for 2024",
          author: "Sarah Chen",
          date: "2024-01-15",
          readTime: "8 min read",
          category: "Development",
          featured: true,
          thumbnail: "/img/live_stareams_bg.png",
          excerpt: "Discover how we're pushing the boundaries of virtual reality and creating new ways to experience games."
        },
        {
          id: 2,
          title: "Revolutionizing Player Experience",
          author: "Mike Johnson",
          date: "2024-01-10",
          readTime: "6 min read",
          category: "Technology",
          thumbnail: "/img/banner_img.png",
          excerpt: "Exploring new ways to enhance player immersion through cutting-edge technology."
        },
        // Add more articles...
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="news-container">
      {/* Hero Section */}
      <section className="news-hero">
        <h1>Latest Updates</h1>
        <p>Stay informed about the latest developments at IceShard Games</p>
      </section>

      <section className="articles-grid">
        {articles.map((article) => (
          <Link 
            to={`/news/${article.id}`} 
            key={article.id} 
            className={`article-preview ${article.featured ? 'featured' : ''}`}
          >
            <div className="preview-image">
              <img src={article.thumbnail} alt={article.title} />
              <div className="image-overlay"></div>
            </div>
            <div className="preview-content">
              <div className="article-meta">
                <span className="category">{article.category}</span>
                <span className="date">{article.date}</span>
              </div>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <div className="preview-footer">
                <span className="author">By {article.author}</span>
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