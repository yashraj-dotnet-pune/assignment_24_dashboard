// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

export default function Sidebar({ onLogout }) {
  return (
    <aside className="sidebar glass-card">
      <div className="sidebar-logo">
        <span className="logo-dot" />
        <span className="logo-text">Aurora</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <span>🏠</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <span>🌐</span>
          <span>Home</span>
        </NavLink>
      </nav>

      <button className="btn ghost full" onClick={onLogout}>
        Logout
      </button>
    </aside>
  );
}
