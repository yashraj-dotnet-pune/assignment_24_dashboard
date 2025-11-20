// src/pages/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    profession: "",
    username: "",
    password: "",
  });

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form, () => {
      navigate("/login");
    });
  };

  return (
    <div className="center-page">
      <div className="glass-card auth-card">
        <h2 className="card-title">Create your account</h2>
        <p className="muted">
          We’ll personalise your dashboard based on your profession.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Full name</span>
            <input
              type="text"
              name="name"
              placeholder="Yashraj Chavan"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="field">
            <span>Profession</span>
            <input
              type="text"
              name="profession"
              placeholder="Developer, Doctor, Designer..."
              value={form.profession}
              onChange={handleChange}
              required
            />
          </label>

          <label className="field">
            <span>Username</span>
            <input
              type="text"
              name="username"
              placeholder="Unique username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Create a strong password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="btn primary full">
            Sign up
          </button>
        </form>

        <p className="muted small">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
