// src/pages/Login.jsx
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="center-page">
      <div className="glass-card auth-card">
        <h2 className="card-title">Welcome back</h2>
        <p className="muted">Log in to access your glass dashboard.</p>

        <form className="form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Username</span>
            <input
              type="text"
              placeholder="e.g. yashraj"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="btn primary full">
            Login
          </button>
        </form>

        <p className="muted small">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
