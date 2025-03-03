import "../css/WhoWeAre.css";
import { useEffect, useState } from "react";

const WhoWeAre = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const words = [
    "Redefining Reality",
    "Breaking Boundaries",
    "Creating Futures",
    "Pushing Limits",
    "Leading Innovation"
  ];

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
      setDelta(2000); // Pause at end of word
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setDelta(500);
    }
  };

  return (
    <div className={`whoweare-container ${isVisible ? 'visible' : ''}`}>
      <section className="hero-section">
        <div className="hero-decorations">
          <div className="cyber-dots"></div>
          <div className="cyber-line horizontal"></div>
          <div className="cyber-line vertical"></div>
        </div>
        <div className="hero-content">
          <h1 className="mega-glitch-text" data-text="Who We Are">Who We Are</h1>
          <div className="typing-container">
            <span className="static-text">We Are</span>
            <span className="typing-text" data-text={text}>{text}</span>
          </div>
        </div>
        <div className="hero-visual">
          <img src="img/about_img.png" alt="Cyber Visual" className="cyber-image" />
          <div className="glitch-overlay"></div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="glitch-text" data-text="The IceShard Story">The IceShard Story</h2>
            <p>Born from a vision to revolutionize the gaming industry, IceShard Games emerged as a powerhouse of innovation and creativity. Our journey began with a simple yet ambitious goal: to create immersive experiences that push the boundaries of what's possible in virtual worlds.</p>
            <p>Today, we stand at the forefront of gaming technology, leveraging cutting-edge tools and a passionate team to bring unprecedented experiences to life. Our commitment to excellence drives us to constantly innovate and evolve.</p>
            <p>With a focus on next-generation gaming experiences, we're not just creating games – we're crafting digital realms where imagination knows no bounds.</p>
          </div>
          <div className="about-image">
            <img src="img/banner_img.png" alt="IceShard Journey" />
          </div>
        </div>
      </section>

      <section className="tech-section">
        <h2 className="section-title glitch-text" data-text="Powered By Technology">Powered By Technology</h2>
        <div className="tech-grid">
          <div className="tech-card">
            <div className="tech-icon">
              <img src="img/unreal.jpeg" alt="Unreal Engine" />
            </div>
            <h3>Unreal Engine 5</h3>
            <p>Leveraging the most advanced real-time 3D creation tool for photorealistic visuals and immersive worlds.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">
              <img src="img/vr.jpeg" alt="VR Technology" />
            </div>
            <h3>VR Innovation</h3>
            <p>Creating next-generation virtual reality experiences that transport players to new dimensions.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">
              <img src="img/ai.jpeg" alt="AI Systems" />
            </div>
            <h3>AI Systems</h3>
            <p>Implementing advanced artificial intelligence for dynamic and responsive gaming environments.</p>
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <div className="showcase-content">
          <h2 className="glitch-text" data-text="Our Latest Projects">Our Latest Projects</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <img src="img/event_bg.png" alt="Project 2" />
              <div className="item-overlay">
                <h3>VR Hardware</h3>
                <p>A revolutionary VR experience</p>
              </div>
            </div>
            <div className="showcase-item">
            <img src="img/live_streams_1.png" alt="Project 1" />
              
              <div className="item-overlay">
                <h3>Fusion VR</h3>
                <p>Next-gen cyberpunk adventure</p>
              </div>
            </div>
            {/* Add more showcase items as needed */}
          </div>
        </div>
      </section>

      <section className="vision-mission">
        <div className="section-content">
          <div className="vision-card cyber-card">
            <div className="card-inner">
              <h2 className="glitch-text" data-text="Our Vision">Our Vision</h2>
              <p>We envision a future where technology enhances human experiences in ways that are inclusive, immersive, and impactful.</p>
              <div className="card-visual">
                <img src="img/gallery/gallery_item_5.png" alt="Vision" />
              </div>
            </div>
            <div className="cyber-glow"></div>
          </div>

          <div className="mission-card cyber-card">
            <div className="card-inner">
              <h2 className="glitch-text" data-text="Our Mission">Our Mission</h2>
              <p>Building a thriving ecosystem where players, creators, and innovators come together to explore boundless possibilities.</p>
              <div className="card-visual">
                <img src="img/about_img.png" alt="Mission" />
              </div>
            </div>
            <div className="cyber-glow"></div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2 className="section-title glitch-text" data-text="Our Core Values">Our Core Values</h2>
        <div className="values-grid">
          {[
            {
              icon: "🎮",
              title: "Innovation",
              desc: "Pushing boundaries in gaming technology"
            },
            {
              icon: "🤝",
              title: "Community",
              desc: "Building inclusive gaming spaces"
            },
            {
              icon: "💡",
              title: "Creativity",
              desc: "Fostering unique gaming experiences"
            },
            {
              icon: "🎯",
              title: "Excellence",
              desc: "Delivering quality without compromise"
            }
          ].map((value, index) => (
            <div key={index} className="value-card cyber-card">
              <div className="card-content">
                <span className="value-icon">{value.icon}</span>
                <h3 className="glitch-text" data-text={value.title}>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
              <div className="cyber-glow"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre; 