import "../css/WhoWeAre.css";
import { useEffect, useState } from "react";

const WhoWeAre = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);

  const words = [
    "to Change the World",
    "to Create Experiences",
    "to Push Boundaries",
    "to Inspire Innovation",
    "to Build the Future"
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
    <div className="whoweare-container">
      {/* Hero Banner */}
      <section className="whoweare-banner">
        <div className="banner-overlay"></div>
        <img 
          src="img/live_stareams_bg.png" 
          alt="IceShard Games Banner" 
          className="banner-image"
        />
        <div className="banner-content">
          <h1 className="glowing-text">Who We Are</h1>
          <div className="typing-container">
            <p className="static-text">We're here</p>
            <p className="typing-text">{text}</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="cards-section">
        <div className="vision-card hover-glow">
          <div className="card-icon pulse">👁️</div>
          <h2>Our Vision</h2>
          <div className="card-content">
            <p>We envision a future where technology enhances human experiences in ways that are inclusive, immersive, and impactful. FusionVR embodies this vision by merging the power of gaming, education, and social interaction into one dynamic virtual universe. Our goal is to make VR accessible and enjoyable for all, transforming how people engage with digital environments.</p>
          </div>
          <div className="card-glow"></div>
        </div>

        <div className="mission-card hover-glow">
          <div className="card-icon pulse">🎯</div>
          <h2>Our Mission</h2>
          <div className="card-content">
            <p>Our mission at IceShard Games is to build a thriving ecosystem where players, creators, and innovators come together to explore boundless possibilities. By integrating cutting-edge technology like Unreal Engine 5, we provide tools that empower users to customize their experiences and redefine what's possible in virtual worlds.</p>
          </div>
          <div className="card-glow"></div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-content">
          <h2 className="glowing-text">Our Core Values</h2>
          <div className="values-grid">
            {[
              { icon: "🎮", title: "Innovation", desc: "Pushing boundaries in gaming technology" },
              { icon: "🤝", title: "Community", desc: "Building inclusive gaming spaces" },
              { icon: "💡", title: "Creativity", desc: "Fostering unique gaming experiences" },
              { icon: "🎯", title: "Excellence", desc: "Delivering quality without compromise" }
            ].map((value, index) => (
              <div key={index} className="value-item hover-glow">
                <span className="value-icon pulse">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
                <div className="item-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre; 