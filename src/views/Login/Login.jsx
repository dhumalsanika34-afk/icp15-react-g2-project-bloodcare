import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
  };

  return (
    <div className="auth-page">

      <form className="auth-card" onSubmit={handleSubmit}>

        <h1>Welcome Back</h1>

        <p>Login to your BloodCare account</p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit">
          Login
        </Button>

        <p>
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </form>

    </div>
  );
}

export default Login;