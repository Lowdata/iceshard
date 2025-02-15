import "../css/Team.css";

const Team = () => {
  return (
    <div className="team-container">
      {/* Hero Section */}
      <section className="team-hero">
        <img 
          src="img/latest_war_img_2.png" 
          alt="Team Banner" 
          className="team-hero-image"
        />
        <div className="team-hero-content">
          <h1>Warriors of Innovation</h1>
          <p>United in our mission to create extraordinary gaming experiences that push the boundaries of imagination.</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="team-stats">
        <div className="stat-card">
          <div className="stat-number">8+</div>
          <div className="stat-label">Team Members</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">5+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">3+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2+</div>
          <div className="stat-label">Games in Development</div>
        </div>
      </section>

      {/* Page Header */}
      <section className="team-header">
        <h1>Meet Our Elite Squad</h1>
        <p>Each member brings unique talents to forge the future of gaming</p>
      </section>

      {/* Team Members Section */}
      <section className="team-members">
        <div className="member-card">
          <img src="img/Team/ceo.jpg" alt="Nishant Latiyal" loading="lazy" />
          <h3>Nishant Latiyal</h3>
          <p className="role">Founder/CEO</p>
          <p className="faction-name">The Overseers 👁️‍🗨️</p>
          <p className="faction-description">
            Visionary leader steering IceShard Games towards innovation and excellence.
          </p>
        </div>

        <div className="member-card">
          <img
            src="img/Team/ayush_saini.jpg"
            alt="Ayush Saini"
            loading="lazy"
          />
          <h3>Ayush Saini</h3>
          <p className="role">Co-founder/CFO</p>
          <p className="faction-name">The Overseers 👁️‍🗨️</p>
          <p className="faction-description">
            Keeping resources balanced and the treasury secure.
          </p>
        </div>

        <div className="member-card">
          <img src="img/Team/shaswat.jpg" alt="Shashwat" loading="lazy" />
          <h3>Shashwat</h3>
          <p className="role">CMO</p>
          <p className="faction-name">Marketing Maestros 🎯📢</p>
          <p className="faction-description">
            Spreading the word and rallying the troops for victory!
          </p>
        </div>

        <div className="member-card">
          <img src="img/Team/khwaish.jpg" alt="Khwaish Verma" loading="lazy" />
          <h3>Khwaish Verma</h3>
          <p className="role">Senior Graphic Designer</p>
          <p className="faction-name">Visual Crusaders 🎨🖌️</p>
          <p className="faction-description">
            Creating stunning visuals to dazzle and inspire.
          </p>
        </div>

        <div className="member-card">
          <img src="img/Team/pranav.jpg" alt="Pranav Kapoor" loading="lazy" />
          <h3>Pranav Kapoor</h3>
          <p className="role">Senior Concept Artist</p>
          <p className="faction-name">Visionary Artists 🖼️🔮</p>
          <p className="faction-description">
            Bringing ideas to life with creative magic.
          </p>
        </div>

        <div className="member-card">
          <img src="img/Team/aryan.jpg" alt="Aryan" loading="lazy" />
          <h3>Aryan</h3>
          <p className="role">VR/AR Specialist</p>
          <p className="faction-name">Virtual Vanguard 🕶️🌐</p>
          <p className="faction-description">
            Crafting immersive worlds beyond imagination.
          </p>
        </div>

        <div className="member-card">
          <img src="img/Team/Ayush_1.jpg" alt="Ayush Pahuja" loading="lazy" />
          <h3>Ayush Pahuja</h3>
          <p className="role">Full-Stack Developer</p>
          <p className="faction-name">Code Warriors 💻⚔️</p>
          <p className="faction-description">
            Building the backbone of our digital realm.
          </p>
        </div>

        <div className="member-card">
          <img src="img/Team/parth.jpg" alt="Parth Latta" loading="lazy" />
          <h3>Parth Latta</h3>
          <p className="role">Editor/Manager</p>
          <p className="faction-name">Content Craftsmen ✍️📜</p>
          <p className="faction-description">
            Shaping stories and managing content with precision.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Team;
