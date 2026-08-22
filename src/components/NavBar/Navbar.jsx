import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          <span className="logo-icon">❤</span>
          <span>Life<span>Drop</span></span>
        </Link>

        <div className="nav-links">

          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <NavLink to="/find-blood" className="nav-link">
            Find Blood
          </NavLink>

          <NavLink to="/donors" className="nav-link">
            Donors
          </NavLink>

          <NavLink to="/blood-banks" className="nav-link">
            Blood Banks
          </NavLink>

          <NavLink to="/hospitals" className="nav-link">
            Hospitals
          </NavLink>

          <NavLink to="/campaigns" className="nav-link">
            Campaigns
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>

        </div>

        <div className="nav-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/signup" className="signup-btn">
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;