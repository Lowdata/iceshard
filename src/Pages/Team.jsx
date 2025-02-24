import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import "../css/Team.css";

export  const teamMembers = [
  {
    name: "Nishant Latiyal",
    role: "Founder/CEO",
    faction: "The Overseers 👁️‍🗨️",
    description:
      "Visionary. Strategist. Mastermind. Nishant is the architect behind IceShard Games' meteoric rise. With unyielding determination and razor-sharp foresight, he leads the charge, breaking boundaries and setting new standards. Failure isn't an option—only dominance.",
    img: "img/Team/ceo.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/nishant-latiyal-9a40b3310/",
      twitter: "https://x.com/NishantLatiyal",
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
      twitter: "https://x.com/AyushPahuja",
      github: "https://github.com/Lowdata"
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
  },
  {
    name: "Mehul Sharma",
    role: "3D Generalist",
    faction: "Content Craftsmen ✍️📜",
    description:
      "3D artist and technical virtuoso. Mehul brings imagination to life through modeling, texturing, and animation. With expertise across the 3D pipeline, he crafts immersive digital experiences that blur the line between reality and artistry. Every polygon and particle tells a story.",
    img: "img/Team/Mehul.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Elite Squad of Innovation",
    "Digital Warriors",
    "Future Shapers",
    "Tech Revolutionaries",
    "Game Changers"
  ];
  const navigate = useNavigate();
  const [numbers, setNumbers] = useState({
    members: 0,
    projects: 0,
    years: 0
  });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targetNumbers = {
      members: 8,
      projects: 5,
      years: 3
    };

    const interval = setInterval(() => {
      setNumbers(prev => ({
        members: prev.members < targetNumbers.members ? prev.members + 1 : prev.members,
        projects: prev.projects < targetNumbers.projects ? prev.projects + 1 : prev.projects,
        years: prev.years < targetNumbers.years ? prev.years + 1 : prev.years
      }));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };


  

  const renderSocialIcons = (social) => (
    <div className="social-links">
      {social.linkedin && social.linkedin !== "#" && (
        <a href={social.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      )}
      {social.twitter && social.twitter !== "#" && (
        <a href={social.twitter} className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      )}
      {social.github && social.github !== "#" && (
        <a href={social.github} className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      )}
      {social.instagram && social.instagram !== "#" && (
        <a href={social.instagram} className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      )}
    </div>
  );

  const renderCard = (member, index) => (
    <div 
      key={index} 
      className="team-card"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="member-image">
            <img src={member.img} alt={member.name} />
            <div className="image-overlay"></div>
          </div>
          <div className="member-info">
            <h3 className="glitch-text" data-text={member.name}>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="faction">{member.faction}</p>
          </div>
        </div>
        <div className="card-back">
          <div className="back-content">
            <div className="watermark">
              <img src="img/logos/watermark_logo" alt="IceShard Logo" />
            </div>
            <h3 className="glitch-text" data-text={`${member.name} | ${member.role}`}>
              {member.name} | {member.role}
            </h3>
            <p className="description">{member.description}</p>
            {renderSocialIcons(member.social)}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`team-container ${isVisible ? 'visible' : ''}`}>
      <section className="team-hero">
        <div className="hero-content">
          <h1 className="glitch-text" data-text={texts[currentText]}>
            {texts[currentText]}
          </h1>
          <p>United in our mission to revolutionize the gaming universe</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number glitch-number" data-value={numbers.members}>
                {numbers.members}+
              </span>
              <span className="stat-label">Elite Members</span>
            </div>
            <div className="stat-item">
              <span className="stat-number glitch-number" data-value={numbers.projects}>
                {numbers.projects}+
              </span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number glitch-number" data-value={numbers.years}>
                {numbers.years}+
              </span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section className="team-grid-section">
        <h2 className="section-title glitch-text" data-text="Meet Our Warriors">
          Meet Our Warriors
        </h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => renderCard(member, index))}
        </div>
      </section>

      <section className="join-section">
        <div className="join-content">
          <h2>Join the Elite Force</h2>
          <p>Ready to push the boundaries of gaming innovation?</p>
          <button className="join-button"
          onClick={() => handleNavigation('/careers')}
          >Join Our Ranks</button>
        </div>
        <div className="join-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.69/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/dy600JwHM8i4HNP5/scene.splinecode"></spline-viewer>
      </section>
    </div>
  );
};

export default Team;
