import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './nav.css'
import logo from '../assets/images/Logo.png'
import { useAuth } from '../context/AuthContext'
import siteData from '../data/siteData'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/academics', label: 'Academics' },
    { to: '/admission', label: 'Admission' },
    { to: '/faculty', label: 'Faculty' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  const isHome = location.pathname === '/'

  return (
    <>
      {/* Notice Ticker */}
      <div className="notice-ticker">
        <div className="ticker-inner">
          <span className="ticker-badge">📢 Notices</span>
          <div className="ticker-track">
            <div className="ticker-content">
              {siteData.notices.map(n => (
                <span key={n.id} className="ticker-item">
                  <strong>{n.title}</strong> — {n.content}
                </span>
              ))}
              {siteData.notices.map(n => (
                <span key={`dup-${n.id}`} className="ticker-item" aria-hidden>
                  <strong>{n.title}</strong> — {n.content}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`site-nav ${scrolled ? 'scrolled' : ''} ${isHome && !scrolled ? 'transparent' : ''}`}>
        <div className="nav-inner container">
          <Link to="/" className="brand">
            <img src={logo} alt="Vedanta International School Logo" className="nav-logo" />
            <div className="brand-text">
              <h1 className="brand-title">{siteData.school.name}</h1>
              <p className="brand-sub">{siteData.school.tagline}</p>
            </div>
          </Link>

          <nav className="menu" role="navigation">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            {user?.role === 'admin' && (
              <Link to="/admin" className="nav-link admin-link">Dashboard</Link>
            )}
          </nav>

          <div className="nav-right">
            <div className="nav-cta">
              {!user ? (
                <>
                  <Link to="/login" className="btn btn-nav-ghost">Login</Link>
                  <Link to="/admission" className="btn btn-nav-primary">Enroll Now</Link>
                </>
              ) : (
                <div className="user-menu">
                  <span className="user-badge">{user.role}</span>
                  <button onClick={handleLogout} className="btn btn-nav-ghost">Logout</button>
                </div>
              )}
            </div>

            <button
              className="mobile-toggle"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen(v => !v)}
            >
              <span className={`hamburger ${mobileOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="drawer-overlay" onClick={() => setMobileOpen(false)} />
        <nav className="mobile-menu">
          <div className="mobile-menu-header">
            <img src={logo} alt="Logo" className="mobile-logo" />
            <h3>Menu</h3>
            <button onClick={() => setMobileOpen(false)} className="mobile-close">✕</button>
          </div>
          <div className="mobile-links">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`mobile-link ${location.pathname === link.to ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {user?.role === 'admin' && (
              <Link to="/admin" className="mobile-link" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            )}
          </div>
          <div className="mobile-cta">
            {!user ? (
              <>
                <Link to="/login" className="btn btn-outline" onClick={() => setMobileOpen(false)}>Login</Link>
                <Link to="/admission" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Enroll Now</Link>
              </>
            ) : (
              <>
                <span className="user-badge">{user.role}</span>
                <button onClick={() => { handleLogout(); setMobileOpen(false) }} className="btn btn-outline">Logout</button>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  )
}
