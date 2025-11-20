// src/components/AnalyticsCards.jsx
export default function AnalyticsCards() {
  return (
    <div className="analytics-grid">
      <div className="glass-card analytic-card">
        <p className="label">Focus score</p>
        <h3>82%</h3>
        <p className="muted small">
          You’re more consistent than 65% of users this week.
        </p>
      </div>

      <div className="glass-card analytic-card">
        <p className="label">Sessions</p>
        <h3>14</h3>
        <p className="muted small">
          Short deep-work blocks scheduled across your week.
        </p>
      </div>

      <div className="glass-card analytic-card">
        <p className="label">Energy</p>
        <h3>Calm 🔔</h3>
        <p className="muted small">
          Great pace. Keep your breaks as intentional as your work.
        </p>
      </div>
    </div>
  );
}
