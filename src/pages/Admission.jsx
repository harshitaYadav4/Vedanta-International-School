import React, { useState, useEffect } from 'react'
import SectionTitle from '../Components/SectionTitle'
import siteData from '../data/siteData'
import ScrollAnimator from '../Components/Common/ScrollAnimator'
import Loader from '../Components/Common/Loader'
import '../styles/admission.css'

export default function Admission() {
  const [loading, setLoading] = useState(true)
  const s = siteData.school

  const steps = [
    { num: '01', title: 'Visit & Enquiry', desc: 'Parents are welcome to visit the campus or contact us to understand our curriculum and facilities.', icon: '📞' },
    { num: '02', title: 'Application Form', desc: 'Collect and submit the admission form duly filled with accurate information and required documents.', icon: '📝' },
    { num: '03', title: 'Interaction & Assessment', desc: 'An informal interaction or age-appropriate assessment is conducted.', icon: '🎓' },
    { num: '04', title: 'Confirmation', desc: 'Admission confirmed after document verification and fee submission.', icon: '✅' }
  ]

  useEffect(() => { const t = setTimeout(() => setLoading(false), 350); return () => clearTimeout(t) }, [])
  if (loading) return <Loader />

  return (
    <main className="admission-page">
      <section className="page-hero" style={{ backgroundImage: `url(${siteData.images[4]})` }}>
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a><span className="sep">/</span><span>Admission</span></div>
          <div className="eyebrow">Admission</div>
          <h1>Admission Process</h1>
          <p>Admission open for the academic session <strong>{s.session}</strong>. We follow a transparent, student-friendly admission procedure.</p>
        </div>
      </section>

      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator><SectionTitle eyebrow="Steps" title="How to Apply" centered /></ScrollAnimator>
          <div className="stepper">
            {steps.map((step, i) => (
              <ScrollAnimator key={i} delay={Math.min(i + 1, 4)}>
                <div className="step-card">
                  <div className="step-number-badge">{step.num}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      <section className="full-bleed alt-bg">
        <div className="container">
          <div className="grid-2">
            <ScrollAnimator>
              <div><SectionTitle eyebrow="Eligibility" title="Who Can Apply?" />
              <ul className="clean-list"><li>Age criteria as per government norms</li><li>Previous school records (if applicable)</li><li>Transfer Certificate for Grade 2 onwards</li></ul></div>
            </ScrollAnimator>
            <ScrollAnimator delay={2}>
              <div><SectionTitle eyebrow="Documents" title="Required Documents" />
              <ul className="clean-list"><li>Birth Certificate</li><li>Aadhaar Card (Student & Parent)</li><li>2 Passport Size Photographs</li><li>Previous Report Card</li></ul></div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator><SectionTitle eyebrow="Information" title="Important Notes" centered /></ScrollAnimator>
          <div className="cards">
            <ScrollAnimator delay={1}><div className="card"><h4>📅 Academic Session</h4><p>The academic year begins in April and follows a structured assessment system.</p></div></ScrollAnimator>
            <ScrollAnimator delay={2}><div className="card"><h4>💰 Fee Policy</h4><p>Our fee structure is transparent and communicated during the admission process.</p></div></ScrollAnimator>
            <ScrollAnimator delay={3}><div className="card"><h4>🏫 Limited Seats</h4><p>Admissions are subject to seat availability for each grade.</p></div></ScrollAnimator>
          </div>
        </div>
      </section>

      <section className="full-bleed cta-gradient" style={{ background: 'linear-gradient(135deg, var(--navy), var(--teal))' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollAnimator>
            <h2 style={{ color: '#fff' }}>Have Questions About Admission?</h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 500, margin: '0 auto 24px' }}>📞 {s.phones.join(' / ')} | 📧 {s.email}</p>
            <a href="/contact" className="btn btn-primary">Contact Admission Office</a>
          </ScrollAnimator>
        </div>
      </section>
    </main>
  )
}
