import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <h2>🩸 BloodCare</h2>

          <p>
            Connecting donors with those who need blood.
            Together, we can save lives.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/doners">Donors</Link>
          <Link to="/campaigns">Campaigns</Link>
        </div>

        <div>
          <h3>Services</h3>

          <Link to="/find-blood">Find Blood</Link>
          <Link to="/blood-banks">Blood Banks</Link>
          <Link to="/hospitals">Hospitals</Link>
          <Link to="/blood-request">Blood Request</Link>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📧 rushlailekurwale@gmail.com</p>
          <p>📞 +918855045836</p>
          <p>📍 Pune, Maharashtra</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 BloodCare. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;