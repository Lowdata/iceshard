import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import { blogPosts } from '../data/blogs';
import "../css/News.css";

// Simple markdown parser to replace **text** with <strong>text</strong>
const parseMarkdown = (markdownText) => {
  return markdownText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};

// Helper function to ensure proper image URL formatting
const getImageUrl = (url) => {
  // If the URL already starts with http or /, return as is
  if (url.startsWith('http') || url.startsWith('/')) {
    return url;
  }
  // Otherwise, prepend a slash (assuming the image is in the public folder)
  return `/${url}`;
};

const ArticleDetail = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay; replace with actual API call as needed
    setTimeout(() => {
      const foundArticle = blogPosts.find(
        (a) => a.id.toString() === articleId
      );
      setArticle(foundArticle);
      setLoading(false);
    }, 1000);
  }, [articleId]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!article) {
    return <div>Article not found.</div>;
  }

  // Process markdown in the article content
  const parsedContent = parseMarkdown(article.content);

  return (
    <div className="article-detail-container">
      <div
        className="article-hero"
        style={{ backgroundImage: `url(${getImageUrl(article.image)})` }}
      >
        <div className="hero-overlay"></div>
        <button className="back-button" onClick={() => navigate('/news')}>
          ← Back to News
        </button>
        <div className="hero-content futuristic-banner">
          <div className="article-meta">
            <span className="category">{article.category}</span>
            <span className="date">{article.date}</span>
            <span className="read-time">{article.readTime}</span>
          </div>
          <h1>{article.title}</h1>
          {article.subtitle && (
            <h3 className="subtitle">{article.subtitle}</h3>
          )}
          <div className="author">By {article.author.name}</div>
        </div>
      </div>

      <div className="article-full-content">
        <div className="article-content" dangerouslySetInnerHTML={{ __html: parsedContent }} />
      </div>
    </div>
  );
};

export default ArticleDetail;
