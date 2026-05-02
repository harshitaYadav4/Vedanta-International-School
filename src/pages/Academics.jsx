import React, { useState, useEffect } from 'react'
import SectionTitle from '../Components/SectionTitle'
import siteData from '../data/siteData'
import ScrollAnimator from '../Components/Common/ScrollAnimator'
import Loader from '../Components/Common/Loader'
import '../styles/admission.css'

export default function Academics() {
  const [loading, setLoading] = useState(true)
  const s = siteData.school

  useEffect(() => { const t = setTimeout(() => setLoading(false), 350); return () => clearTimeout(t) }, [])
  if (loading) return <Loader />

  const subjectIcons = {
    'English': '📝', 'Hindi': '🔤', 'Sanskrit': '📜', 'Mathematics': '🔢',
    'Science': '🔬', 'Social Science': '🌍', 'Computer Science': '💻', 'General Knowledge': '🧠', 'Spoken English': '🗣️'
  }

  return (
    <main className="academics-page">
      <section className="page-hero" style={{ backgroundImage: `url(${siteData.images[2]})` }}>
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a><span className="sep">/</span><span>Academics</span></div>
          <div className="eyebrow">Academics</div>
          <h1>Academic Excellence</h1>
          <p>A comprehensive, competency-based curriculum preparing students for lifelong learning.</p>
        </div>
      </section>

      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator><SectionTitle eyebrow="Curriculum" title="Subjects We Teach" centered>Our curriculum covers a wide range of subjects ensuring well-rounded education.</SectionTitle></ScrollAnimator>
          <div className="subject-cards-grid">
            {siteData.subjects.map((sub, i) => (
              <ScrollAnimator key={i} delay={Math.min(i + 1, 4)}>
                <div className="subject-card"><div className="subject-icon">{subjectIcons[sub] || '📖'}</div><h4>{sub}</h4></div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      <section className="full-bleed alt-bg">
        <div className="container">
          <ScrollAnimator><SectionTitle eyebrow="Beyond Books" title="Activities & Programs" centered>Holistic development through sports, yoga and spoken English.</SectionTitle></ScrollAnimator>
          <div className="cards" style={{ maxWidth: 800, margin: '24px auto 0' }}>
            {siteData.activities.map((act, i) => (
              <ScrollAnimator key={i} delay={i + 1}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 12 }}>{act.includes('English') ? '🗣️' : act.includes('Yoga') ? '🧘' : '⚽'}</div>
                  <h4>{act}</h4>
                  <p>Integrated into the daily schedule for comprehensive student development.</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator><SectionTitle eyebrow="Academics" title="Why Choose Our School?" centered /></ScrollAnimator>
          <div className="cards">
            <ScrollAnimator delay={1}><div className="card"><h4>📚 Holistic Curriculum</h4><p>Balanced focus on academics, sports, arts, and values for complete growth.</p></div></ScrollAnimator>
            <ScrollAnimator delay={2}><div className="card"><h4>👩‍🏫 Experienced Faculty</h4><p>Well-trained teachers dedicated to student growth and individual attention.</p></div></ScrollAnimator>
            <ScrollAnimator delay={3}><div className="card"><h4>🧠 Activity-Based Learning</h4><p>Modern teaching methods with emphasis on experiential and inquiry-based learning.</p></div></ScrollAnimator>
          </div>
        </div>
      </section>

      <section className="full-bleed cta-gradient" style={{ background: 'linear-gradient(135deg, var(--navy), var(--teal))' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollAnimator>
            <h2 style={{ color: '#fff' }}>Want to Learn More?</h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 500, margin: '0 auto 24px' }}>📞 {s.phones.join(' / ')} | 📧 {s.email}</p>
            <a href="/contact" className="btn btn-primary">Contact Us</a>
          </ScrollAnimator>
        </div>
      </section>
    </main>
  )
}
