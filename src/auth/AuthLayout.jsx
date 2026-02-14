import React from "react";
import "../styles/auth.css";

export default function AuthLayout({ title, children }) {
  return (
    <main className="auth-page">
      <div className="auth-wrapper">

        {/* LEFT SIDE */}
        <aside className="auth-side">
          <div className="auth-brand">
            <h1>Global Model Public School</h1>
            <p className="tagline">
              A caring, values-driven education
            </p>
          </div>

          <ul className="auth-highlights">
            <li>✔ English & Hindi Medium</li>
            <li>✔ Nursery to Class 8</li>
            <li>✔ Experienced & Caring Faculty</li>
            <li>✔ Holistic Development</li>
          </ul>

          <footer className="auth-footer">
            <small>Session 2026–2027</small>
            <small>Rohtas, Bihar</small>
          </footer>
        </aside>

        {/* RIGHT SIDE */}
        <section className="auth-card">
          <h2 className="auth-title">{title}</h2>
          <div className="auth-content">
            {children}
          </div>
        </section>

      </div>
    </main>
  );
}
