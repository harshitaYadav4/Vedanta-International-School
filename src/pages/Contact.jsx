import React, { useState, useEffect } from 'react'
import siteData from '../data/siteData'
import SectionTitle from '../Components/SectionTitle'
import ScrollAnimator from '../Components/Common/ScrollAnimator'
import Loader from '../Components/Common/Loader'
import '../styles/aboutInteractive.css'

export default function Contact() {
  const [loading, setLoading] = useState(true)
  const s = siteData.school

  useEffect(() => { const t = setTimeout(() => setLoading(false), 300); return () => clearTimeout(t) }, [])
  if (loading) return <Loader />

  const mapQuery = encodeURIComponent(s.address.replace(/\n/g, ', '))

  return (
    <main className="contact-page">
      <section className="page-hero" style={{ backgroundImage: `url(${siteData.images[3]})` }}>
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a><span className="sep">/</span><span>Contact</span></div>
          <div className="eyebrow">Contact</div>
          <h1>Get In Touch</h1>
          <p>Reach our office for enquiries, visits and admissions.</p>
        </div>
      </section>

      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator>
            <div className="contact-info-cards">
              <div className="contact-info-card"><div className="cic-icon">📍</div><h4>Address</h4><p>{s.address.replace(/\n/g, ', ')}</p></div>
              <div className="contact-info-card"><div className="cic-icon">📞</div><h4>Phone</h4><p>{s.phones.join(' / ')}</p></div>
              <div className="contact-info-card"><div className="cic-icon">✉️</div><h4>Email</h4><p>{s.email}</p></div>
              <div className="contact-info-card"><div className="cic-icon">🕐</div><h4>Timings</h4><p>Office: {s.officeTiming}</p></div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      <section className="full-bleed alt-bg">
        <div className="container">
          <ScrollAnimator>
            <div className="contact-grid two-column">
              <div className="card contact-form-card">
                <SectionTitle eyebrow="Message" title="Send Us a Message" />
                <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks — message sent (demo)') }}>
                  <div className="form-group"><label>Your Name</label><input required type="text" placeholder="Enter your full name" /></div>
                  <div className="form-group"><label>Email Address</label><input required type="email" placeholder="Enter your email" /></div>
                  <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="Enter your phone number" /></div>
                  <div className="form-group"><label>Message</label><textarea required rows="4" placeholder="Write your message here..." /></div>
                  <button className="btn btn-primary" type="submit">Send Message</button>
                </form>
              </div>
              <div className="card map-card">
                <div className="map-embed"><iframe title="school-map" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" /></div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      <section className="full-bleed">
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <ScrollAnimator>
            <SectionTitle eyebrow="Enquiry" title="Need More Information?" centered>Call {s.phones[0]} or email {s.email} to request a prospectus or schedule a campus visit.</SectionTitle>
            <a href={`tel:${s.phones[0]}`} className="btn btn-primary">Call Now</a>
          </ScrollAnimator>
        </div>
      </section>
    </main>
  )
}
