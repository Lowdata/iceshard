import { useState, useEffect } from "react";
import "../css/Careers.css";

const Careers = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);

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

  return (
    <div className="careers-container">
      {/* Hero Banner */}
      <section className="careers-banner">
        <div className="banner-overlay"></div>
        <img 
          src="img/live_stareams_bg.png" 
          alt="IceShard Games Careers" 
          className="banner-image"
        />
        <div className="banner-content">
          <h1 className="glowing-text">Join Our Elite Team</h1>
          <div className="typing-container">
            <p className="static-text">Ready to</p>
            <p className="typing-text">{text}</p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="positions-section">
        <h2 className="section-title glowing-text">Open Positions</h2>
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
                <button className="apply-button">Apply Now</button>
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
    </div>
  );
};

export default Careers; 