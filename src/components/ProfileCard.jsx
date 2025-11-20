// src/components/ProfileCard.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

function getAvatarForProfession(profession = "") {
  const p = profession.toLowerCase();

  if (p.includes("doctor") || p.includes("dr")) {
    // Doctor avatar
    return { emoji: "🩺", label: "Doctor mode" };
  }
  if (p.includes("developer") || p.includes("engineer") || p.includes("coder")) {
    // Developer avatar
    return { emoji: "💻", label: "Developer mode" };
  }
  if (p.includes("designer")) {
    return { emoji: "🎨", label: "Design mode" };
  }
  if (p.includes("student")) {
    return { emoji: "📚", label: "Student mode" };
  }
  return { emoji: "🎯", label: "Pro mode" };
}

export default function ProfileCard({ user }) {
  const { updateProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user.name || "",
    profession: user.profession || "",
  });

  const avatar = getAvatarForProfession(user.profession || "");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile(form);
    setEditing(false);
  };

  return (
    <div className="glass-card profile-card">
      <div className="profile-avatar">
        <div className="avatar-circle">
          <span className="avatar-emoji">{avatar.emoji}</span>
        </div>
      </div>

      {!editing ? (
        <>
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-profession">{user.profession}</p>
          <p className="profile-tagline">{avatar.label}</p>

          <button className="btn ghost full" onClick={() => setEditing(true)}>
            Edit profile
          </button>
        </>
      ) : (
        <form className="form profile-form" onSubmit={handleSave}>
          <label className="field">
            <span>Name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="field">
            <span>Profession</span>
            <input
              name="profession"
              value={form.profession}
              onChange={handleChange}
              required
            />
          </label>
          <div className="profile-actions">
            <button type="submit" className="btn primary">
              Save
            </button>
            <button
              type="button"
              className="btn ghost"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
