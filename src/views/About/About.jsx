import aboutData from "../../data/about.json";
import "./About.css";

function AboutCard({ item, imageSrc }) {
  return (
    <div className="about-card">

      <div className="card-image">
        <img src={imageSrc} alt={item.title} />
        <span>{item.category}</span>
      </div>

      <div className="card-content">
        <h3>{item.title}</h3>

        <p>{item.description}</p>

        <div className="card-details">
          {item.details}
        </div>

        
      </div>

    </div>
  );
}

function About() {
  return (
    <div className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <div className="hero-content">

          <div className="hero-tag">
            ❤️ ABOUT BLOODCARE
          </div>

          <h1>
            Every Drop Can
            <span> Save a Life.</span>
          </h1>

          <p>
            BloodCare is a digital platform that connects blood donors
            with patients and families who need blood. We are working
            towards making blood donation easier, faster and more
            accessible for everyone.
          </p>

          <div className="hero-buttons">
            <a href="/contact" ><button className="primary-btn">
              Become a Donor</button>
            </a>

            <button className="secondary-btn">
              Find Blood
            </button>
          </div>

        </div>

        <div className="hero-image">

          <div className="image-circle">
            <img
              src="/photo1.avif"
              alt="Blood Donation"
            />
          </div>

          <div className="floating-card top-card">
            <strong>8+</strong>
            <small>Blood Groups</small>
          </div>

          <div className="floating-card bottom-card">
            <strong>❤️</strong>
            <small>Save Lives Together</small>
          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="stats-section">

        <div className="stat-box">
          <h2>8+</h2>
          <p>Blood Groups</p>
        </div>

        <div className="stat-box">
          <h2>24/7</h2>
          <p>Emergency Support</p>
        </div>

        <div className="stat-box">
          <h2>100%</h2>
          <p>Community Focused</p>
        </div>

        <div className="stat-box">
          <h2>1</h2>
          <p>Common Goal</p>
        </div>

      </section>


      {/* WHO WE ARE */}

      <section className="who-section">

        <div className="who-image">

          <img
            src="/photo2.avif"
            alt="Blood Donation"
          />

          <div className="experience-card">
            <strong>❤️</strong>
            <p>
              Helping people
              <br />
              when they need it most
            </p>
          </div>

        </div>


        <div className="who-content">

          <span className="section-label">
            WHO WE ARE
          </span>

          <h2>
            Connecting People,
            <span> Saving Lives.</span>
          </h2>

          <p>
            BloodCare is created with one simple idea — no person
            should struggle to find blood when they need it.
          </p>

          <p>
            Our platform brings together blood donors, patients and
            communities. It provides a simple way to search for
            suitable donors according to blood group and requirement.
          </p>

          <div className="check-list">

            <div>
              <span>✓</span>
              Easy donor searching
            </div>

            <div>
              <span>✓</span>
              Support during emergencies
            </div>

            <div>
              <span>✓</span>
              Promote voluntary donation
            </div>

            <div>
              <span>✓</span>
              Build a helpful community
            </div>

          </div>

        </div>

      </section>


      {/* MISSION / VISION */}

      <section className="mission-wrapper">

        <div className="mission-card mission">

          <div className="mission-icon">
            🎯
          </div>

          <div>
            <span>OUR MISSION</span>

            <h2>Make Blood Donation Simple</h2>

            <p>
              Our mission is to simplify the process of finding
              blood donors and encourage more people to participate
              in voluntary blood donation.
            </p>
          </div>

        </div>


        <div className="mission-card vision">

          <div className="mission-icon">
            👁️
          </div>

          <div>
            <span>OUR VISION</span>

            <h2>A Community That Cares</h2>

            <p>
              We want to create a strong blood donation community
              where donors and patients can connect easily and
              support each other.
            </p>
          </div>

        </div>

      </section>


      {/* ABOUT CARDS */}

      <section className="information-section">

        <div className="section-title">

          <span className="section-label">
            EXPLORE BLOODCARE
          </span>

          <h2>
            What We Are
            <span> All About</span>
          </h2>

          <p>
            Learn more about our mission, vision, blood donation,
            emergency support, donors and the community behind BloodCare.
          </p>

        </div>


        <div className="cards-grid">

          {aboutData.map((item, index) => (
            <AboutCard
              key={item.id}
              item={item}
              imageSrc={index % 2 === 0 ? "/photo1.avif" : "/photo2.avif"}
            />
          ))}

        </div>

      </section>


      {/* TABLE */}

      <section className="table-section">

        <div className="section-title">

          <span className="section-label">
            BLOODCARE INFORMATION
          </span>

          <h2>
            Everything in
            <span> One Place</span>
          </h2>

          <p>
            Detailed information about BloodCare and its major
            features.
          </p>

        </div>


        <div className="table-wrapper">

          <table>

            <thead>

              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Image</th>
                <th>Details</th>
              </tr>

            </thead>

            <tbody>

              {aboutData.map((item, index) => (

                <tr key={item.id}>

                  <td>
                    <div className="id-circle">
                      {item.id}
                    </div>
                  </td>

                  <td>
                    <strong>{item.title}</strong>
                  </td>

                  <td>
                    {item.description}
                  </td>

                  <td>
                    <span className="category-badge">
                      {item.category}
                    </span>
                  </td>

                  <td>
                    <img
                      src={index % 2 === 0 ? "/photo1.avif" : "/photo2.avif"}
                      alt={item.title}
                    />
                  </td>

                  <td>
                    {item.details}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>


      {/* CTA */}

      <section className="cta-section">

        <div>

          <span>
            BE A REASON SOMEONE SMILES TODAY ❤️
          </span>

          <h2>
            Your Blood Can Give
            Someone Another Chance.
          </h2>

          <p>
            One donation can make a meaningful difference.
            Join the BloodCare community and become a part
            of something bigger.
          </p>

         <a href="/contact"> <button>
            Become a Blood Donor →
          </button></a>

        </div>

      </section>

    </div>
  );
}

export default About;