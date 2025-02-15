import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import "../css/News.css";

const ArticleDetail = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch - replace with actual API call
    setTimeout(() => {
      setArticle({
        id: articleId,
        title: "The Future of Gaming: IceShard's Vision for 2024",
        author: "Sarah Chen",
        date: "2024-01-15",
        readTime: "8 min read",
        category: "Development",
        featured: true,
        heroImage: "/img/live_stareams_bg.png",
        content: [
          {
            type: "text",
            content: "The gaming industry stands at the precipice of a revolutionary transformation. As we step into 2024, IceShard Games is leading the charge in redefining what's possible in virtual reality gaming."
          },
          {
            type: "image",
            url: "/img/home.png",
            caption: "Next-gen VR technology in action"
          },
          {
            type: "text",
            content: "Our team of innovators and dreamers has been working tirelessly to create experiences that don't just entertain – they transform. With groundbreaking haptic feedback systems and advanced neural interfaces, we're pushing the boundaries of what's possible."
          },
          {
            type: "image",
            url: "/img/animate_icon.png",
            caption: "Advanced animation systems"
          },
          {
            type: "text",
            content: "The future of gaming isn't just about better graphics or faster processors. It's about creating meaningful connections and experiences that transcend the digital realm."
          }
        ]
      });
      setLoading(false);
    }, 1000);
  }, [articleId]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="article-detail-container">
      <div className="article-hero" style={{ backgroundImage: `url(${article.heroImage})` }}>
        <div className="hero-overlay"></div>
        <button className="back-button" onClick={() => navigate('/news')}>
          ← Back to News
        </button>
        <div className="hero-content">
          <div className="article-meta">
            <span className="category">{article.category}</span>
            <span className="date">{article.date}</span>
            <span className="read-time">{article.readTime}</span>
          </div>
          <h1>{article.title}</h1>
          <div className="author">By {article.author}</div>
        </div>
      </div>

      <div className="article-full-content">
        {article.content.map((block, index) => (
          <div key={index} className={`content-block ${block.type}`}>
            {block.type === 'text' ? (
              <p>{block.content}</p>
            ) : (
              <figure>
                <img src={block.url} alt={block.caption} />
                <figcaption>{block.caption}</figcaption>
              </figure>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleDetail; 