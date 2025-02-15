import { useState, useEffect } from 'react';
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import "../css/Team.css";

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Nishant Latiyal",
      role: "Founder/CEO",
      faction: "The Overseers 👁️‍🗨️",
      description:
        "Visionary. Strategist. Mastermind. Nishant is the architect behind IceShard Games' meteoric rise. With unyielding determination and razor-sharp foresight, he leads the charge, breaking boundaries and setting new standards. Failure isn't an option—only dominance.",
      img: "img/Team/ceo.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Ayush Saini",
      role: "Co-founder/CFO",
      faction: "The Overseers 👁️‍🗨️",
      description:
        "Guardian of the gold. Ayush commands the financial realm with ruthless precision. His strategies keep the war chest overflowing, fueling our relentless expansion. No budget leaks. No financial missteps. Just pure, calculated growth.",
      img: "img/Team/ayush_saini.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Shashwat",
      role: "CMO",
      faction: "Marketing Maestros 🎯📢",
      description:
        "Master of influence. Shashwat doesn't just market—he dominates the narrative. With campaigns that cut through the noise like a blade, he commands attention and loyalty. Competitors fear his name, for he controls the public's perception.",
      img: "img/Team/shaswat.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Khwaish Verma",
      role: "Senior Graphic Designer",
      faction: "Visual Crusaders 🎨🖌️",
      description:
        "Creator of worlds. Khwaish wields pixels and palettes like weapons. Her designs don't just catch the eye—they seize the soul. She crafts visuals so compelling they leave competitors trembling. Beauty with an edge.",
      img: "img/Team/khwaish.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Pranav Kapoor",
      role: "Senior Concept Artist",
      faction: "Visionary Artists 🖼️🔮",
      description:
        "Dream-weaver. Architect of imagination. Pranav bends reality to his will, bringing to life realms so immersive they blur the line between fiction and existence. His art doesn't just inspire—it dominates the mind.",
      img: "img/Team/pranav.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Aryan",
      role: "VR/AR Specialist",
      faction: "Virtual Vanguard 🕶️🌐",
      description:
        "Pioneer of the unreal. Aryan engineers experiences that defy physics and logic. He is the gatekeeper to alternate realities, where the impossible becomes inevitable. He doesn't follow trends—he creates them.",
      img: "img/Team/aryan.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Ayush Pahuja",
      role: "Full-Stack Developer",
      faction: "Code Warriors 💻⚔️",
      description:
        "Architect of digital dominance. Ayush's code is more than syntax—it's the framework of conquest. Fast, unbreakable, and scalable, his systems give IceShard the edge to stay ahead, crushing lag and competition alike.",
      img: "img/Team/Ayush_1.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Parth Latta",
      role: "Editor/Manager",
      faction: "Content Craftsmen ✍️📜",
      description:
        "Wordsmith. Storyteller. Commander of narratives. Parth weaves words into powerful weapons, shaping perception and inspiring loyalty. Every story he crafts is a strategic blow against mediocrity. He writes to conquer.",
      img: "img/Team/parth.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];
  

  const renderSocialIcons = (social) => (
    <div className="social-links">
      {social.linkedin && (
        <a href={social.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      )}
      {social.twitter && (
        <a href={social.twitter} className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      )}
      {social.github && (
        <a href={social.github} className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      )}
      {social.instagram && (
        <a href={social.instagram} className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      )}
    </div>
  );

  return (
    <div className={`team-container ${isVisible ? 'visible' : ''}`}>
      <section className="team-hero">
        <div className="hero-content">
          <h1>Elite Squad of Innovation</h1>
          <p>United in our mission to revolutionize the gaming universe</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Elite Members</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section className="team-grid-section">
        <h2 className="section-title">Meet Our Warriors</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-card"
              style={{ animationDelay: `${index * 1}s` }}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="member-image">
                    <img src={member.img} alt={member.name} />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="role">{member.role}</p>
                    <p className="faction">{member.faction}</p>
                  </div>
                </div>
                <div className="card-back">
                  <div className="back-content">
                    <p className="description">{member.description}</p>
                    {renderSocialIcons(member.social)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="join-section">
        <div className="join-content">
          <h2>Join the Elite Force</h2>
          <p>Ready to push the boundaries of gaming innovation?</p>
          <button className="join-button">Join Our Ranks</button>
        </div>
        <div className="join-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
