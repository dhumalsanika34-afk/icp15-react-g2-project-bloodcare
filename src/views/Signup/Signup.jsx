import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Registration successful!");
  };

  return (
    <div className="signup-page">

      <form className="signup-card" onSubmit={handleSubmit}>

        <h1>Become a Donor</h1>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <select
          name="bloodGroup"
          onChange={handleChange}
          required
        >
          <option value="">Select Blood Group</option>
          <option>O+</option>
          <option>O-</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <Button type="submit">
          Register
        </Button>

        <p>
          Already registered?
          <Link to="/login"> Login</Link>
        </p>

      </form>

    </div>
  );
}

export default Signup;