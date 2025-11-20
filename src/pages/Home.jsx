// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="center-page">
      <div className="glass-card home-card">
        <h1 className="app-title">Aurora Panel</h1>
        <p className="muted">
          A tiny demo showing <strong>Routing</strong>,{" "}
          <strong>Protected Routes</strong> and{" "}
          <strong>Context-based Auth</strong> with a glass UI.
        </p>

        <div className="home-actions">
          <Link to="/login" className="btn primary">
            Login
          </Link>
          <Link to="/register" className="btn ghost">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
