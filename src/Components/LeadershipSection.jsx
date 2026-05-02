import React from 'react'
import siteData from '../data/siteData'
import SectionTitle from './SectionTitle'

export default function LeadershipSection() {
  const s = siteData.school
  return (
    <section className="leadership">
      <SectionTitle eyebrow="Leadership" title="Our School Leadership" centered>
        Guided by experienced educators committed to excellence and care.
      </SectionTitle>
      <div className="lead-cards">
        <div className="lead-card">
          <div className="avatar-wrap">
            <img src={s.directorImage} alt={`Director ${s.director}`} className="avatar" />
          </div>
          <h4>Director</h4>
          <h3>{s.director}</h3>
          <p>Providing strategic leadership, community partnership and a long-term vision for holistic education at {s.name}.</p>
        </div>

        <div className="lead-card">
          <div className="avatar-wrap">
            <img src={s.principalImage} alt={`Principal ${s.principal}`} className="avatar" />
          </div>
          <h4>Principal</h4>
          <h3>{s.principal}</h3>
          <p>Committed to high standards of learning, pastoral care and building a nurturing school culture.</p>
        </div>
      </div>
    </section>
  )
}
