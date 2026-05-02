import React from 'react'
import { Link } from 'react-router-dom'
import siteData from '../data/siteData'

export default function Footer() {
  const s = siteData.school

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0Z" fill="#080e2a" />
        </svg>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>{s.name}</h3>
              <p>
                {s.tagline}. Nurturing academically strong, morally grounded
                and globally responsible learners since {s.established}.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook" title="Facebook">📘</a>
                <a href="#" aria-label="Instagram" title="Instagram">📷</a>
                <a href="#" aria-label="YouTube" title="YouTube">▶️</a>
                <a href={`mailto:${s.email}`} aria-label="Email" title="Email">✉️</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/academics">Academics</Link></li>
                <li><Link to="/admission">Admission</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Academics</h4>
              <ul>
                <li><Link to="/faculty">Our Faculty</Link></li>
                <li><Link to="/academics">Curriculum</Link></li>
                <li><Link to="/admission">Fee Structure</Link></li>
                <li><Link to="/contact">School Timings</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <div className="icon">📍</div>
                <p>{s.address.replace(/\n/g, ', ')}</p>
              </div>
              <div className="footer-contact-item">
                <div className="icon">📞</div>
                <p>{s.phones.join(' / ')}</p>
              </div>
              <div className="footer-contact-item">
                <div className="icon">✉️</div>
                <p>{s.email}</p>
              </div>
              <div className="footer-contact-item">
                <div className="icon">🕐</div>
                <p>Office: {s.officeTiming}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {s.name}. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top" title="Back to top">↑</button>
        </div>
      </div>
    </footer>
  )
}
