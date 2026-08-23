import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bloodcare-contact">

      {/* HERO */}
      <section className="contactHero">

        <div className="heroText">

          <div className="bloodTag">
            <span>●</span> BLOODCARE
          </div>

          <h1>
            We are here
            <br />
            <span>when you need us.</span>
          </h1>

          <p>
            Have a question about blood donation? Need blood support?
            Want to become a donor or volunteer? Connect with BloodCare
            and let us know how we can help.
          </p>

          <div className="heroButtons">
            <a href="#contactForm" className="redButton">
              Get in Touch →
            </a>

            <a href="#location" className="simpleButton">
              Find Us
            </a>
          </div>

        </div>

        <div className="heroVisual">

          <div className="mainHeroImage">
            <img
              src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?auto=format&fit=crop&w=1200&q=85"
              alt="Blood donation"
            />
          </div>

          <div className="heroCircle">
            🩸
          </div>

          <div className="heroInfo">
            <strong>Every drop</strong>
            <span>can save a life.</span>
          </div>

        </div>

      </section>


      {/* CONTACT STRIP */}
      <section className="contactStrip">

        <div className="contactStripTitle">
          <span>CONTACT BLOODCARE</span>
          <h2>Let's connect.</h2>
        </div>

        <a href="tel:+919876543210" className="contactItem">
          <div className="contactItemIcon">☎</div>

          <div>
            <small>CALL US</small>
            <strong>+91 98765 43210</strong>
          </div>

          <b>→</b>
        </a>

        <a
          href="mailto:support@bloodcare.com"
          className="contactItem"
        >
          <div className="contactItemIcon">✉</div>

          <div>
            <small>EMAIL</small>
            <strong>support@bloodcare.com</strong>
          </div>

          <b>→</b>
        </a>

      </section>


     

      {/* MAIN CONTACT */}
      <section className="mainContact" id="contactForm">

        <div className="contactSide">

          <span className="redLabel">
            SEND US A MESSAGE
          </span>

          <h2>
            How can
            <br />
            <span>we help?</span>
          </h2>

          <p>
            Tell us what you need and our team will do our best
            to guide you. BloodCare is here for donors, patients,
            families and volunteers.
          </p>

          <div className="helpPoints">

            <div>
              <span>✓</span>
              <p>Blood donation enquiries</p>
            </div>

            <div>
              <span>✓</span>
              <p>Blood requirement support</p>
            </div>

            <div>
              <span>✓</span>
              <p>Donor registration</p>
            </div>

            <div>
              <span>✓</span>
              <p>Volunteer opportunities</p>
            </div>

          </div>

          <div className="supportPhoto">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85"
              alt="Blood donation"
            />

            <div>
              <strong>Be a donor.</strong>
              <span>Be someone's hope.</span>
            </div>
          </div>

        </div>


        {/* FORM */}
        <div className="contactFormBox">

          {submitted && (
            <div className="successMessage">
              <div>✓</div>

              <section>
                <strong>Message sent successfully!</strong>
                <p>Thank you for contacting BloodCare.</p>
              </section>
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="formTwo">

              <div className="formField">
                <label>FULL NAME</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="formField">
                <label>PHONE NUMBER</label>
                <input
                    type="tel"
                    inputMode="numeric"
                     pattern="[0-9]{10}"
                      maxLength="10"
                       placeholder="Enter 10-digit phone number"
                       required
                  />
              </div>

            </div>

            <div className="formField">
              <label>EMAIL ADDRESS</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="formField">
              <label>WHAT DO YOU NEED?</label>

              <select required>
                <option value="">Select your requirement</option>
                <option>Blood Donation</option>
                <option>I Need Blood</option>
                <option>Emergency Blood Request</option>
                <option>Donor Registration</option>
                <option>Volunteer</option>
                <option>General Enquiry</option>
              </select>
            </div>

            <div className="formField">
              <label>YOUR MESSAGE</label>

              <textarea
                rows="6"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="sendButton">
              Send Message
              <span>→</span>
            </button>

            <p className="privacyText">
              Your information will only be used to respond to your enquiry.
            </p>

          </form>

        </div>

      </section>


     
      {/* LOCATION */}
      <section className="locationSection" id="location">

        <div className="locationInfo">

          <span>VISIT BLOODCARE</span>

          <h2>
            Find us
            <br />
            <b>near you.</b>
          </h2>

          <p>
            Connect with our BloodCare community and learn more
            about blood donation and support.
          </p>

          <div className="locationDetail">

            <div className="locationIcon">
              📍
            </div>

            <div>
              <strong>BloodCare</strong>
              <p>Maharashtra, India</p>
            </div>

          </div>

          <div className="locationDetail">

            <div className="locationIcon">
              🕐
            </div>

            <div>
              <strong>Working Hours</strong>
              <p>Monday – Saturday, 9 AM – 6 PM</p>
            </div>

          </div>

        </div>


        <div className="mapContainer">

          <iframe
            title="BloodCare Location"
            src="https://www.google.com/maps?q=Maharashtra,India&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </section>


      {/* FINAL */}
      <section className="finalBanner">

        <div className="finalBlood">
          🩸
        </div>

        <div>
          <span>ONE DROP CAN MAKE A DIFFERENCE</span>

          <h2>
            Be someone's
            <b> reason to hope.</b>
          </h2>
        </div>

        <a href="#contactForm">
          Contact Us →
        </a>

      </section>

    </div>
  );
};

export default Contact;