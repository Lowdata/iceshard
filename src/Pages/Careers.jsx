import { useState, useEffect } from "react";
import ReactConfetti from 'react-confetti';
import "../css/Careers.css";

const Careers = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);
  const [showModal, setShowModal] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    resumeLink: '',
    position: ''
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const words = [
    "Shape the Future",
    "Push Boundaries",
    "Create Worlds",
    "Join the Elite",
    "Make History"
  ];

  const openPositions = [
    {
      title: "Senior Unreal Developer",
      type: "Full-time",
      location: "Remote / Delhi NCR",
      experience: "3+ years",
      requirements: [
        "Proven experience with Unreal Engine (3+ years)",
        "Strong C++ programming skills",
        "Experience with multiplayer game development",
        "Knowledge of game optimization techniques",
        "Understanding of game networking principles",
        "Experience with version control systems (Git)"
      ],
      responsibilities: [
        "Develop and maintain game features using Unreal Engine",
        "Optimize game performance across platforms",
        "Collaborate with artists and designers",
        "Implement gameplay mechanics and systems",
        "Contribute to technical architecture decisions"
      ]
    },
    {
      title: "Senior Concept Artist",
      type: "Full-time",
      location: "Remote / Delhi NCR",
      experience: "3+ years",
      requirements: [
        "Strong portfolio demonstrating sci-fi/cyberpunk art style",
        "Proficiency in digital painting tools",
        "Experience with 3D modeling software",
        "Understanding of color theory and composition",
        "Ability to work within established art direction",
        "Experience in game development pipeline"
      ],
      responsibilities: [
        "Create compelling concept art for characters and environments",
        "Develop visual language for game assets",
        "Collaborate with art director and game designers",
        "Contribute to world-building and visual storytelling",
        "Provide art direction support for junior artists"
      ]
    },
    {
        title: "Social Media Manager",
        type: "Full-time",
        location: "Remote",
        experience: "3+ years",
        requirements: [
          "Strong portfolio demonstrating sci-fi/cyberpunk art style",
          "Proficiency in digital painting tools",
          "Experience with 3D modeling software",
          "Understanding of color theory and composition",
          "Ability to work within established art direction",
          "Experience in game development pipeline"
        ],
        responsibilities: [
          "Create compelling concept art for characters and environments",
          "Develop visual language for game assets",
          "Collaborate with art director and game designers",
          "Contribute to world-building and visual storytelling",
          "Provide art direction support for junior artists"
        ]
      }
  ];

  // Typing animation effect
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, currentWordIndex, isDeleting]);

  const tick = () => {
    let currentWord = words[currentWordIndex];
    let updatedText = isDeleting 
      ? currentWord.substring(0, text.length - 1)
      : currentWord.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === currentWord) {
      setIsDeleting(true);
      setDelta(2000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setDelta(500);
    }
  };

  // Add window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleApply = (position) => {
    setApplicationData(prev => ({ ...prev, position: position }));
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setShowConfetti(true);
      
      // Hide success message and modal after delay
      setTimeout(() => {
        setShowModal(false);
        setApplicationData({ name: '', resumeLink: '', position: '' });
        setShowSuccess(false);
        
        // Stop confetti after a few more seconds
        setTimeout(() => {
          setShowConfetti(false);
        }, 3000);
      }, 2000);
    }, 1000);
  };

  return (
    <div className="careers-container">
      {/* Add Confetti component */}
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
          colors={['#00eaff', '#ff00c1', '#7700ff', '#00ff88']}
        />
      )}

      {/* Hero Banner */}
      <section className="careers-banner">
        <div className="banner-overlay"></div>
        <img 
          src="img/live_stareams_bg.png" 
          alt="IceShard Games Careers" 
          className="banner-image"
          loading="lazy"
        />
        <div className="banner-content">
          <h1 className="glitch-text" data-text="Join Our Elite Team">Join Our Elite Team</h1>
          <div className="typing-container">
            <p className="static-text">Ready to</p>
            <p className="glitch-text typing-text" data-text={text}>{text}</p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="positions-section">
        <h2 className="section-title glitch-text" data-text="Open Positions">Open Positions</h2>
        <div className="positions-grid">
          {openPositions.map((position, index) => (
            <div key={index} className="position-card hover-glow">
              <div className="position-header">
                <h3>{position.title}</h3>
                <div className="position-meta">
                  <span>{position.type}</span>
                  <span>{position.location}</span>
                  <span>{position.experience}</span>
                </div>
              </div>
              <div className="position-content">
                <div className="requirements">
                  <h4>Requirements</h4>
                  <ul>
                    {position.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className="responsibilities">
                  <h4>Responsibilities</h4>
                  <ul>
                    {position.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="apply-button"
                  onClick={() => handleApply(position.title)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="coming-soon-section">
        <h2 className="section-title glowing-text">More Positions Coming Soon</h2>
        <div className="positions-grid">
          {[
            "Game Designer",
            "3D Character Artist",
            "UI/UX Designer",
            "Technical Artist"
          ].map((position, index) => (
            <div key={index} className="coming-soon-card hover-glow">
              <div className="card-content">
                <h3>{position}</h3>
                <p>Opening Soon</p>
                <div className="notify-button">
                  <span>Get Notified</span>
                </div>
              </div>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Updated Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="application-modal">
            <div className="modal-header">
              <h3 className="glitch-text" data-text="Submit Application">
                {showSuccess ? "Application Received!" : "Submit Application"}
              </h3>
              <button 
                className="close-button" 
                onClick={() => setShowModal(false)}
                disabled={isSubmitting}
              >×</button>
            </div>
            {showSuccess ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h4 className="glitch-text" data-text="Thank you for applying!">
                  Thank you for applying!
                </h4>
                <p>We'll review your application and connect with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="glitch-label" data-text="Position">Position</label>
                  <input 
                    type="text" 
                    value={applicationData.position} 
                    readOnly 
                    className="cyber-input"
                  />
                </div>
                <div className="form-group">
                  <label className="glitch-label" data-text="Full Name">Full Name</label>
                  <input 
                    type="text" 
                    value={applicationData.name}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, name: e.target.value }))}
                    className="cyber-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="glitch-label" data-text="Resume Link">Resume Link</label>
                  <input 
                    type="url" 
                    value={applicationData.resumeLink}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, resumeLink: e.target.value }))}
                    className="cyber-input"
                    required
                    placeholder="https://drive.google.com/..."
                  />
                </div>
                <button 
                  type="submit" 
                  className={`submit-button glitch-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers; 