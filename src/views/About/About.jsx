import aboutData from "../../data/about.json";
import heroImage from "../../assets/hero.png";
import "./About.css";
import React from "react";


const About = () => {
  const { hero, stats, mission, impact, cta } = aboutData;

  return (
    <main className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">

        <div className="hero-glow"></div>

        <div className="hero-content">

          <div className="about-badge">
            <span>♥</span>
            {hero.badge}
          </div>

          <h1>
            {hero.title.split("Life").map((text, index) => (
              <React.Fragment key={index}>
                {text}
                {index === 0 && (
                  <span className="red-text">Life</span>
                )}
              </React.Fragment>
            ))}
          </h1>

          <p>{hero.description}</p>

          <div className="hero-buttons">
            <button className="btn-primary">
              {hero.primaryButton}
              <span>→</span>
            </button>

            <button className="btn-outline">
              {hero.secondaryButton}
            </button>
          </div>

          <div className="hero-trust">
            <div className="avatar-group">
              <span>👩</span>
              <span>👨</span>
              <span>👩</span>
              <span>👨</span>
            </div>

            <div>
              <strong>10,000+ donors</strong>
              <small>already making a difference</small>
            </div>
          </div>

        </div>


        <div className="hero-visual">

          <div className="hero-circle"></div>

          <div className="image-wrapper">
            <img
              src="/photo2.avif"
              alt="Blood donation"
            />
          </div>

          <div className="floating-card top-card">
            <div className="floating-icon">♥</div>
            <div>
              <strong>Every Drop</strong>
              <small>Counts</small>
            </div>
          </div>

          <div className="floating-card bottom-card">
            <strong>1 Donation</strong>
            <small>Can Save 3 Lives</small>
          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="stats-section">

        <div className="stats-container">

          {stats.map((item, index) => (
            <div className="stat-item" key={item.label}>

              <div className={`stat-icon icon-${index}`}>
                {item.icon}
              </div>

              <div>
                <h2>{item.number}</h2>
                <p>{item.label}</p>
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ================= MISSION ================= */}
      <section className="mission-section">

        <div className="mission-image">

          <img
            src="/photo1.avif"
            alt="Medical team"
          />

          <div className="experience-card">
            <span>+</span>
            <div>
              <strong>Trusted</strong>
              <small>Blood Care Network</small>
            </div>
          </div>

        </div>


        <div className="mission-content">

          <span className="section-badge">
            {mission.badge}
          </span>

          <h2>{mission.title}</h2>

          <p className="mission-description">
            {mission.description}
          </p>

          <div className="mission-points">

            {mission.points.map((point, index) => (
              <div className="mission-point" key={point}>

                <div className="check">
                  ✓
                </div>

                <span>{point}</span>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= IMPACT ================= */}
      <section className="impact-section">

        <div className="impact-header">

          <span className="section-badge">
            {impact.badge}
          </span>

          <h2>{impact.title}</h2>

          <p>{impact.description}</p>

        </div>


        <div className="impact-cards">

          <div className="impact-card red-card">
            <span className="impact-number">01</span>
            <div className="impact-symbol">♥</div>
            <h3>Donate</h3>
            <p>
              Every healthy donor can become a reason
              for someone to live another day.
            </p>
          </div>


          <div className="impact-card white-card">
            <span className="impact-number">02</span>
            <div className="impact-symbol">✚</div>
            <h3>Connect</h3>
            <p>
              We connect donors, blood banks and hospitals
              through one simple platform.
            </p>
          </div>


          <div className="impact-card dark-card">
            <span className="impact-number">03</span>
            <div className="impact-symbol">✓</div>
            <h3>Save Lives</h3>
            <p>
              Faster access to blood means faster treatment
              and better chances of recovery.
            </p>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="about-cta">

        <div className="cta-content">

          <span>BE A HERO • SAVE A LIFE</span>

          <h2>{cta.title}</h2>

          <p>{cta.description}</p>

          <button className="cta-button">
            {cta.button}
            <span>→</span>
          </button>

        </div>

        <div className="cta-drop">
          ♥
        </div>

      </section>

    </main>
  );
};

export default About;