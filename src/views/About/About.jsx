import aboutData from "../../data/about.json";
import "./About.css";
import React from "react";

const icons = ["❤️", "🩸", "🎯", "🤝", "💉", "🧬", "🚑", "👤", "🏥", "🌍", "🛡️", "❤️"];
const publicCardImages = [
  "/photo1.avif",
  "/photo2.avif",
  "/photo3.jpg",
  "/photo4.jpg",
  "/photo6.jpg",
  "/photo8.jpg",
  "/photo9.jpg",
  "/photo.jpg",
];

function About() {
  return (
    <div className="bloodcare-about">

      {/* ================= HERO ================= */}
     
          <div className="about-badge">
            <span>🩸</span> ABOUT BLOODCARE
          </div>

         

          
       

        
      {/* ================= INTRO ================= */}
      <section className="about-intro-section" id="about-info">

        <div className="about-intro-image">
          <img
            src="/photo1.avif"
            alt="Medical care"
          />

          <div className="intro-experience">
            <strong>12+</strong>
            <span>Important Topics</span>
          </div>
        </div>

        <div className="about-intro-content">

          <span className="section-label">
            WHO WE ARE
          </span>

          <h2>
            Helping People
            <span> Through Humanity</span>
          </h2>

          <p>
            BloodCare is designed to create awareness about blood donation
            and encourage people to understand the importance of donating
            blood.
          </p>

          <p>
            Our platform focuses on connecting people with useful
            information related to blood donation, blood groups, emergency
            support, donor registration and community awareness.
          </p>

          <div className="intro-feature-list">

            <div className="intro-feature">
              <span>✓</span>
              <p>Promoting voluntary blood donation</p>
            </div>

            <div className="intro-feature">
              <span>✓</span>
              <p>Creating blood donation awareness</p>
            </div>

            <div className="intro-feature">
              <span>✓</span>
              <p>Supporting responsible communities</p>
            </div>

            <div className="intro-feature">
              <span>✓</span>
              <p>Encouraging people to help others</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="about-stat-section">

        <div className="about-stat-card">
          <div>🩸</div>
          <strong>12</strong>
          <p>Information Topics</p>
        </div>

        <div className="about-stat-card">
          <div>❤️</div>
          <strong>1</strong>
          <p>Shared Mission</p>
        </div>

        <div className="about-stat-card">
          <div>🤝</div>
          <strong>100%</strong>
          <p>Community Focus</p>
        </div>

        <div className="about-stat-card">
          <div>🌍</div>
          <strong>∞</strong>
          <p>Hope & Possibilities</p>
        </div>

      </section>

      {/* ================= CARDS ================= */}
      <section className="about-cards-section" id="bloodcare-cards">

        <div className="about-section-heading">
          <span className="section-label">
            WHAT WE STAND FOR
          </span>

          <h2>
            Discover
            <span> BloodCare</span>
          </h2>

          <p>
            Explore important information about BloodCare, blood donation,
            donors, blood groups, safety and community support.
          </p>
        </div>

        <div className="about-card-grid">

          {aboutData.aboutData.map((item, index) => (

            <div className="about-info-card" key={item.id}>

              <div className="about-card-image">

                <img
                  src={publicCardImages[index] || item.image}
                  alt={item.title}
                />

                <div className="image-overlay"></div>

                <span className="about-card-number">
                  {String(item.id).padStart(2, "0")}
                </span>

                <span className="about-card-category">
                  {item.category}
                </span>

                <div className="about-card-icon">
                  {icons[index]}
                </div>

              </div>

              <div className="about-card-content">

                <span className="card-subtitle">
                  {item.subtitle}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p className="card-description">
                  {item.description}
                </p>

                <p className="card-full-content">
                  {item.content}
                </p>

                <div className="card-highlight">
                  <span>✦</span>
                  <p>{item.highlight}</p>
                </div>

                

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ==================================================
          7 COLUMN TABLE
      ================================================== */}
      <section className="about-table-section">

        <div className="about-section-heading table-heading">

          <span className="section-label">
            BLOODCARE INFORMATION
          </span>

          <h2>
            Complete
            <span> Information Table</span>
          </h2>

          <p>
            Below is a structured overview of all BloodCare information
            available on this page.
          </p>

        </div>

        <div className="table-wrapper">

          <table className="about-data-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Subtitle</th>
                <th>Description</th>
                <th>Content</th>
                <th>Highlight</th>
                <th>Category</th>
              </tr>
            </thead>

            <tbody>

              {aboutData.aboutData.map((item) => (

                <tr key={item.id}>

                  <td>
                    <span className="table-id">
                      {item.id}
                    </span>
                  </td>

                  <td>
                    <strong className="table-title">
                      {item.title}
                    </strong>
                  </td>

                  <td>
                    {item.subtitle}
                  </td>

                  <td>
                    {item.description}
                  </td>

                  <td>
                    {item.content}
                  </td>

                  <td>
                    <span className="table-highlight">
                      {item.highlight}
                    </span>
                  </td>

                  <td>
                    <span className="table-category">
                      {item.category}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="about-mission-section">

        <div className="mission-image">

          <img
            src="/photo2.avif"
            alt="Community support"
          />

        </div>

        <div className="mission-content">

          <span className="section-label">
            OUR MISSION
          </span>

          <h2>
            Together We Can
            <span> Save More Lives</span>
          </h2>

          <p>
            Blood donation is a simple act of kindness that can support
            patients during surgeries, emergencies and medical treatments.
          </p>

          <p>
            BloodCare believes that awareness is the first step towards
            creating more responsible and active blood donors.
          </p>

          <div className="mission-points">

            <div>
              <span>01</span>
              <p>
                Spread awareness about the importance of blood donation.
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                Encourage eligible people to become voluntary donors.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                Build a stronger and more supportive community.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="about-final-section">

        <div className="final-content">

          <span className="final-label">
            MAKE A DIFFERENCE
          </span>

          <h2>
            Your One Drop
            <span> Can Bring Hope.</span>
          </h2>

          <p>
            Join the movement, spread awareness and encourage others to
            understand the importance of blood donation.
          </p>

          <button>
            ❤️ Join BloodCare
          </button>

        </div>

        <div className="final-image">

          <img
            src="/photo6.jpg"
            alt="BloodCare community"
          />

        </div>

      </section>

    </div>
  );
}

export default About;