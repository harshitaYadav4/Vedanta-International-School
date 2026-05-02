import React from "react";
import "../styles/auth.css";
import logo from '../assets/images/Logo.png'
import siteData from '../data/siteData'

export default function AuthLayout({ title, children }) {
  const s = siteData.school
  return (
    <main className="auth-page">
      <div className="auth-wrapper">
        <aside className="auth-side">
          <div className="auth-brand">
            <img src={logo} alt="School Logo" className="auth-logo" />
            <h2>{s.name}</h2>
            <p className="tagline">{s.tagline}</p>
          </div>
          <ul className="auth-highlights">
            <li><span className="check">✓</span> {s.medium} Medium</li>
            <li><span className="check">✓</span> {s.classes}</li>
            <li><span className="check">✓</span> Experienced & Caring Faculty</li>
            <li><span className="check">✓</span> Holistic Development</li>
            <li><span className="check">✓</span> Safe & Secure Campus</li>
          </ul>
          <footer className="auth-footer">
            <small>Session {s.session}</small>
            <small>Rohtas, Bihar</small>
          </footer>
        </aside>
        <section className="auth-card">
          <h2 className="auth-title">{title}</h2>
          <div className="auth-content">{children}</div>
        </section>
      </div>
    </main>
  );
}
