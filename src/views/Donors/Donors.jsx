import React from "react";
import "./Donors.css";
import Donorinfos from "./../../utils/donorinfos.json";

function Donors() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [weight, setWeight] = useState("");
  const [city, setCity] = useState("");
  const [lastDonation, setLastDonation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    console.log({
      fullName,
      age,
      gender,
      bloodGroup,
      phone,
      email,
      weight,
      city,
      lastDonation,
    });
  };
  return (
    <div className="donor-page">
      {/* hero section */}
      <section className="donor-hero">
        <div className="hero-content">
          <p className="hero-tag">💚 SAVE A LIFE</p>

          <h1>Become a Blood Donor</h1>

          <p>
            Your small contribution can make a big difference. Register today
            and become someone's hero.
          </p>
        </div>

        <div className="blood-icon">🩸</div>
      </section>

       {/* Main Section */}
        <section className="donor-content">
          {/* Form */}
          <div className="donor-form-container">
            <div className="form-heading">
              <h2>Donor Registration</h2>
              <p>Fill in your details to register as a blood donor.</p>
            </div>

            {submitted && (
              <div className="success-message">
                ✓ Registration submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                {/* Full Name */}
                <div className="input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                {/* Age */}
                <div className="input-group">
                  <label>Age</label>
                  <input
                    type="number"
                    placeholder="Enter your age"
                    min="18"
                    max="65"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>

                {/* Gender */}
                <div className="input-group">
                  <label>Gender</label>

                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Blood Group */}
                <div className="input-group">
                  <label>Blood Group</label>

                  <select
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    required
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                {/* Phone */}
                <div className="input-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="input-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Weight */}
                <div className="input-group">
                  <label>Weight (kg)</label>
                  <input
                    type="number"
                    placeholder="Enter your weight"
                    min="45"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>

                {/* City */}
                <div className="input-group">
                  <label>City</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>

                {/* Last Donation */}
                <div className="input-group full-width">
                  <label>Last Blood Donation Date</label>
                  <input
                    type="date"
                    value={lastDonation}
                    onChange={(e) => setLastDonation(e.target.value)}
                  />
                </div>
              </div>

              <div className="eligibility-note">
                <span>ℹ️</span>
                <p>
                  Please ensure that you meet the basic blood donation
                  eligibility requirements before registering.
                </p>
              </div>

              <button type="submit" className="register-btn">
                Register as Donor ❤️
              </button>
            </form>
          </div>

          {/* Eligibility Section */}
          <div className="eligibility-container">
            <h2>Basic Eligibility</h2>

            <div className="eligibility-list">
              <div className="eligibility-item">
                <span>✓</span>
                <div>
                  <h4>Age Requirement</h4>
                  <p>Generally between 18 and 65 years.</p>
                </div>
              </div>

              <div className="eligibility-item">
                <span>✓</span>
                <div>
                  <h4>Minimum Weight</h4>
                  <p>
                    Generally at least 45 kg or according to screening rules.
                  </p>
                </div>
              </div>

              <div className="eligibility-item">
                <span>✓</span>
                <div>
                  <h4>Good Health</h4>
                  <p>You should be feeling healthy on the day of donation.</p>
                </div>
              </div>

              <div className="eligibility-item">
                <span>✓</span>
                <div>
                  <h4>Blood Pressure & Pulse</h4>
                  <p>Should be within the acceptable range during screening.</p>
                </div>
              </div>

              <div className="eligibility-item">
                <span>✓</span>
                <div>
                  <h4>Donation Interval</h4>
                  <p>There should be an appropriate gap between donations.</p>
                </div>
              </div>
            </div>

            <div className="donor-quote">
              <p>"The gift of blood is the gift of life."</p>
              <span>— Be someone's reason to smile ❤️</span>
            </div>
          </div>
        </section>

        
        {/* Tips */}
        <div className="tips-container">
          <h1 className="tips-head">Tips</h1>
          <p className="tips-para">
            Here are some tips to put your mind at ease during the
            <br /> blood donation process
          </p>

          <div className="list-container">
            {Donorinfos.map((Donorinfo, index) => (
              <div key={Donorinfo.title} className="list-elements">
                <h1 className="tips-listhead">{Donorinfo.title}</h1>
                <ul>
                  <li className="tips-list">{Donorinfo["info-one"]}</li>
                  <li className="tips-list">{Donorinfo["info-two"]}</li>
                  <li className="tips-list">{Donorinfo["info-three"]}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

    </div>
  );
}

export default Donors;
