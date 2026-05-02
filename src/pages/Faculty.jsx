import React, { useState, useEffect, useMemo } from 'react'
import siteData from '../data/siteData'
import FacultyCard from '../Components/FacultyCard'
import SectionTitle from '../Components/SectionTitle'
import ScrollAnimator from '../Components/Common/ScrollAnimator'
import Loader from '../Components/Common/Loader'

export default function Faculty() {
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(t)
  }, [])

  const people = siteData.faculty || []

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return people
    return people.filter(p => (p.name + ' ' + p.role + ' ' + (p.qual || '')).toLowerCase().includes(q))
  }, [people, query])

  if (loading) return <Loader />

  return (
    <main className="faculty-page">

      {/* HERO */}
      <section className="page-hero" style={{ backgroundImage: `url(${siteData.images[0]})` }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span className="sep">/</span><span>Faculty</span>
          </div>
          <div className="eyebrow">Our Team</div>
          <h1>Meet Our Faculty</h1>
          <p>A dedicated and qualified team committed to student success.</p>
        </div>
      </section>

      {/* FACULTY LIST */}
      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator>
            <div className="faculty-controls">
              <input
                className="search"
                placeholder="Search teachers by name, subject or qualification..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <div className="count">{filtered.length} teacher{filtered.length !== 1 ? 's' : ''}</div>
            </div>
          </ScrollAnimator>

          <div className="faculty-grid container">
            {filtered.map((p, i) => (
              <ScrollAnimator key={i} delay={Math.min(i + 1, 4)}>
                <FacultyCard person={p} />
              </ScrollAnimator>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', marginTop: 40, color: 'var(--text-muted)' }}>
              No teachers found matching "{query}"
            </p>
          )}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="full-bleed alt-bg">
        <div className="container" style={{ textAlign: 'center', maxWidth: 700 }}>
          <ScrollAnimator>
            <SectionTitle eyebrow="Philosophy" title="Our Teaching Philosophy" centered>
              We believe in fostering curiosity, resilience and confidence through
              supportive teaching, individual attention and meaningful assessment.
            </SectionTitle>
            <a href="/about" className="btn btn-outline">Learn More About Us →</a>
          </ScrollAnimator>
        </div>
      </section>
    </main>
  )
}
