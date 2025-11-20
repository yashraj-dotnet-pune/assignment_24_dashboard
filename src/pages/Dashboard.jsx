// src/pages/Dashboard.jsx
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import AnalyticsCards from "../components/AnalyticsCards.jsx";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(() => navigate("/login"));
  };

  if (!user) return null;

  return (
    <div className="dashboard-layout">
      <Sidebar onLogout={handleLogout} />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>Hello, {user.name.split(" ")[0]} 👋</h1>
            <p className="muted">
              Here’s your personal glass dashboard for{" "}
              <strong>{user.profession || "your work"}</strong>.
            </p>
          </div>
        </header>

        <section className="dashboard-grid">
          <ProfileCard user={user} />
          <AnalyticsCards />
        </section>
      </main>
    </div>
  );
}
