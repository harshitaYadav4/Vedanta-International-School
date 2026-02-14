import React, { useState, useEffect } from "react";
import siteData from "../data/siteData";
import '../styles/dashboard.css'

export default function Dashboard() {
  const [notices, setNotices] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    category: "Admission",
    content: "",
  });

  // Load notices (default + saved)
  useEffect(() => {
    const saved = localStorage.getItem("admin_notices");
    if (saved) {
      setNotices(JSON.parse(saved));
    } else {
      setNotices(siteData.notices);
    }
  }, []);

  // Save notices
  useEffect(() => {
    localStorage.setItem("admin_notices", JSON.stringify(notices));
  }, [notices]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addNotice = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) return;

    const newNotice = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split("T")[0],
    };

    setNotices([newNotice, ...notices]);
    setFormData({ title: "", category: "Admission", content: "" });
  };

  const deleteNotice = (id) => {
    setNotices(notices.filter((n) => n.id !== id));
  };

  return (
    <div className="admin-wrapper">
      {/* Header */}
      <header className="admin-header">
        <h1>{siteData.school.name}</h1>
        <p>Admin Dashboard • Session {siteData.school.session}</p>
      </header>

      {/* Stats */}
      <section className="stats-grid">
        <div className="stat-card">
          <h3>Faculty</h3>
          <span>{siteData.faculty.length}</span>
        </div>
        <div className="stat-card">
          <h3>Subjects</h3>
          <span>{siteData.subjects.length}</span>
        </div>
        <div className="stat-card">
          <h3>Events</h3>
          <span>{siteData.events.length}</span>
        </div>
        <div className="stat-card highlight">
          <h3>Notices</h3>
          <span>{notices.length}</span>
        </div>
      </section>

      <div className="grid-2">
        {/* Left Column */}
        <div>
          {/* Add Notice */}
          <div className="card">
            <h2>Add Notice</h2>
            <form onSubmit={addNotice} className="notice-form">
              <input
                name="title"
                placeholder="Notice title"
                value={formData.title}
                onChange={handleChange}
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option>Admission</option>
                <option>Holiday</option>
                <option>Exam</option>
              </select>
              <textarea
                name="content"
                placeholder="Notice details"
                rows="3"
                value={formData.content}
                onChange={handleChange}
              />
              <button>Add Notice</button>
            </form>
          </div>

          {/* Notices */}
          <div className="card">
            <h2>All Notices</h2>
            {notices.map((n) => (
              <div key={n.id} className="notice-item">
                <div>
                  <h4>{n.title}</h4>
                  <span className={`badge ${n.category.toLowerCase()}`}>
                    {n.category}
                  </span>
                  <p>{n.content}</p>
                  <small>{n.date}</small>
                </div>
                <button onClick={() => deleteNotice(n.id)}>✖</button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* School Info */}
          <div className="card">
            <h2>School Info</h2>
            <p><b>Principal:</b> {siteData.school.principal}</p>
            <p><b>Director:</b> {siteData.school.director}</p>
            <p><b>Classes:</b> {siteData.school.classes}</p>
            <p><b>Medium:</b> {siteData.school.medium}</p>
          </div>

          {/* Faculty */}
          <div className="card">
            <h2>Faculty Members</h2>
            <ul className="simple-list">
              {siteData.faculty.map((f, i) => (
                <li key={i}>{f.name} – {f.role}</li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div className="card">
            <h2>Upcoming Events</h2>
            <ul className="simple-list">
              {siteData.events.map((e, i) => (
                <li key={i}>{e.title} ({e.date})</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
