import { useState } from 'react';
import { sendEmailToDB } from '../utils/pre-register';
import "../css/PreRegister.css";

const PreRegister = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    username: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await sendEmailToDB(formData);
      setIsSubmitted(true);
    } catch (err) {
      setError(
        err.response?.data?.message || 
        err.message || 
        'Something went wrong. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pre-register-container">
      {/* Hero Banner */}
      <div className="register-banner">
        <img src="img/live_stareams_bg.png" alt="Gaming Background" className="banner-image" />
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="glowing-title">Join The Future of Gaming</h1>
          <div className="banner-highlights">
            <span>Early Access</span>
            <span>Exclusive Rewards</span>
            <span>Special Events</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="register-content">
        {/* Benefits Section */}
        <div className="benefits-container">
          <h2 className="section-title">Pre-Register Benefits</h2>
          <div className="hexagon-grid">
            {[
              {
                icon: "🎮",
                title: "Priority Access",
                desc: "Be the first to enter our virtual universe"
              },
              {
                icon: "💎",
                title: "Premium Pack",
                desc: "Exclusive in-game items worth $50"
              },
              {
                icon: "🏆",
                title: "Founder Status",
                desc: "Unique badges and special privileges"
              },
              {
                icon: "🌟",
                title: "Bonus Credits",
                desc: "Start with 5000 bonus game credits"
              }
            ].map((benefit, index) => (
              <div key={index} className="hexagon-item">
                <div className="hexagon-content">
                  <div className="hex-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="register-form-wrapper">
          {!isSubmitted ? (
            <div className="cyber-form">
              <div className="form-header">
                <div className="cyber-lines"></div>
                <h2>Pre-Register Now</h2>
                <p>Enter the next generation of gaming</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="error-message">
                    <div className="error-icon">⚠️</div>
                    <p>{error}</p>
                  </div>
                )}

                <div className="cyber-input">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ENTER YOUR NAME"
                    required
                  />
                </div>

                <div className="cyber-input">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="SELECT USERNAME"
                    required
                  />
                </div>

                <div className="cyber-input">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="YOUR EMAIL ADDRESS"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={`cyber-button ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    'INITIALIZE ACCESS'
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="success-portal">
              <div className="portal-effect"></div>
              <div className="success-content">
                <div className="success-icon">🎉</div>
                <h2>Welcome to the Future!</h2>
                <p>Your spot has been secured. Check your inbox for confirmation.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreRegister; 