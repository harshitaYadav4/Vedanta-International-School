import React from 'react'
import SectionTitle from '../Components/SectionTitle'
import siteData from '../data/siteData'
import ScrollAnimator from '../Components/Common/ScrollAnimator'
import '../styles/about.css'

export default function About() {
  const s = siteData.school

  const milestones = [
    { year: '2026', title: 'School Founded', desc: `${s.name} established in Village Nawadih, Rohtas, Bihar.` },
    { year: '2026', title: 'First Batch', desc: 'Welcomed the inaugural batch of students from Nursery to Class 8.' },
    { year: '2026', title: 'Full Faculty', desc: 'Built a complete team of qualified and dedicated educators.' },
  ]

  return (
    <main className="about-page">
      <section className="page-hero" style={{ backgroundImage: `url(${siteData.images[1]})` }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span className="sep">/</span><span>About Us</span>
          </div>
          <div className="eyebrow">About Us</div>
          <h1>{s.name}</h1>
          <p>Established in {s.established}, we are committed to nurturing academically strong, morally grounded and globally responsible learners.</p>
        </div>
      </section>

      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator>
            <div className="about-vmv-grid">
              <div className="vmv-card vision">
                <div className="vmv-icon">🎯</div>
                <h3>Our Vision</h3>
                <p>To be a leading educational institution that inspires curious, confident learners who contribute responsibly to society with a global outlook and strong Indian values.</p>
              </div>
              <div className="vmv-card mission">
                <div className="vmv-icon">🚀</div>
                <h3>Our Mission</h3>
                <p>To foster responsible global citizens and leaders by providing world-class education through collaboration between a dedicated faculty and supportive parents' community.</p>
              </div>
              <div className="vmv-card values">
                <div className="vmv-icon">💎</div>
                <h3>Our Values</h3>
                <p>Integrity, Respect, Curiosity and Excellence guide all our work. We embed these values through daily routines, assemblies and community engagement.</p>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      <section className="full-bleed alt-bg">
        <div className="container">
          <ScrollAnimator>
            <div className="about-content-grid">
              <div className="about-text-col">
                <SectionTitle eyebrow="Our Story" title="A School Committed to Care" />
                <p><strong>{s.name}</strong> is widely recognised as a leading educational institution in the region. Our inspirational faculty creates an environment that motivates students to be global-minded, academically successful and well-balanced.</p>
                <p>Situated in the peaceful surroundings of Village Nawadih, Rohtas district, our school proudly serves families from nearby villages and communities.</p>
                <p>Our campus provides a safe, caring and inclusive environment where every child is respected, encouraged and supported.</p>
                <div className="about-quick-stats">
                  <div className="quick-stat"><strong>{s.established}</strong><span>Established</span></div>
                  <div className="quick-stat"><strong>{s.classes}</strong><span>Grades</span></div>
                  <div className="quick-stat"><strong>{s.medium}</strong><span>Medium</span></div>
                </div>
              </div>
              <div className="about-image-col">
                <img src={siteData.images[3]} alt="School Campus" className="about-hero-img" />
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator><SectionTitle eyebrow="Our Approach" title="How We Educate" centered>A comprehensive educational philosophy focused on the whole child.</SectionTitle></ScrollAnimator>
          <div className="approach-grid">
            {[
              { icon: '🎓', title: 'Academic Excellence', lead: 'Strong foundations with modern pedagogy.', desc: 'We follow structured guidelines with continuous upgrades in teaching methodologies, ensuring academic and human excellence.' },
              { icon: '🤝', title: 'Care & Community', lead: 'Every child matters.', desc: 'Our educators mentor, monitor and nurture each child, creating a safe, caring and disciplined environment.' },
              { icon: '🌱', title: 'Holistic Development', lead: 'Beyond classrooms.', desc: 'Sports, yoga, co-curricular activities and leadership programmes are integral to our philosophy.' },
            ].map((item, i) => (
              <ScrollAnimator key={i} delay={i + 1}>
                <div className="approach-card-new">
                  <div className="approach-icon-new">{item.icon}</div>
                  <div className="approach-body-new">
                    <h4>{item.title}</h4>
                    <p className="lead">{item.lead}</p>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      <section className="full-bleed dark-bg">
        <div className="container">
          <ScrollAnimator><SectionTitle eyebrow="Journey" title="Our Milestones" centered>Key moments in our school's history.</SectionTitle></ScrollAnimator>
          <div className="timeline">
            {milestones.map((m, i) => (
              <ScrollAnimator key={i} delay={i + 1}>
                <div className="timeline-item">
                  <div className="timeline-marker"><div className="timeline-dot"></div></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{m.year}</span>
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      <section className="full-bleed alt-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollAnimator>
            <h2>Ready to Join Our Family?</h2>
            <p style={{ maxWidth: 500, margin: '0 auto 24px' }}>Admissions are open for the session {s.session}. We'd love to welcome your child to our school community.</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
              <a href="/admission" className="btn btn-primary">Apply Now</a>
              <a href="/contact" className="btn btn-outline">Contact Us</a>
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </main>
  )
}
