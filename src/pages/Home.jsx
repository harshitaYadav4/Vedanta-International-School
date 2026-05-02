import React, { useState, useEffect } from "react";
import siteData from "../data/siteData";
import banner from "../assets/images/banner.png";
import "../styles/home.css";
import Loader from "../Components/Common/Loader";
import ScrollAnimator from "../Components/Common/ScrollAnimator";
import SectionTitle from "../Components/SectionTitle";
import LeadershipSection from "../Components/LeadershipSection";
import FacultyCard from "../Components/FacultyCard";
import ImageGrid from "../Components/ImageGrid";

/* ─── Animated Counter ─── */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ value, label, suffix = "+", icon }) {
  const [visible, setVisible] = useState(false);
  const count = useCounter(value, 1800, visible);
  const ref = React.useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const s = siteData.school;

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  const whyChoose = [
    { icon: "🏆", title: "Trusted Leadership", desc: "Experienced leadership team dedicated to quality education and strong community values." },
    { icon: "📖", title: "Holistic Curriculum", desc: "A balanced blend of academics, sports, yoga and life skills for complete development." },
    { icon: "🛡️", title: "Safe Environment", desc: "Secure campus with caring staff, CCTV surveillance and a values-driven culture." },
    { icon: "👩‍🏫", title: "Qualified Faculty", desc: "Well-trained, passionate teachers committed to each child's individual growth." },
    { icon: "🌐", title: "Bilingual Learning", desc: "English & Hindi medium instruction with strong emphasis on spoken English skills." },
    { icon: "🎯", title: "Individual Attention", desc: "Low student-teacher ratio ensuring personalised mentoring and academic support." }
  ];

  return (
    <main className="home-page">

      {/* ══════ HERO ══════ */}
      <section className="home-hero" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-badge">🎓 Admission Open {s.session}</div>
          <h1 className="hero-title">
            Where <span className="highlight">Excellence</span> Meets Character
          </h1>
          <p className="hero-sub">
            {s.name} — Est. {s.established} • {s.classes} • {s.medium} Medium
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/admission">Apply for Admission</a>
            <a className="btn btn-ghost" href="/about">Discover Our School</a>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span></span>
        </div>
      </section>

      {/* ══════ STATS ══════ */}
      <section className="stats-strip">
        <div className="container stats-grid">
          <StatCard value={200} label="Happy Students" icon="🎒" />
          <StatCard value={6} label="Expert Teachers" icon="👩‍🏫" />
          <StatCard value={9} label="Subjects Offered" icon="📚" />
          <StatCard value={3} label="Activity Programs" icon="⚽" />
        </div>
      </section>

      {/* ══════ ABOUT PREVIEW ══════ */}
      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator>
            <div className="about-preview-section">
              <div className="about-preview-text">
                <SectionTitle eyebrow="About Us" title="A School Committed to Care">
                  {s.name} was established in {s.established} with the mission to provide
                  a modern, values-driven education to children from Nursery to Class 8.
                </SectionTitle>
                <p>
                  We blend a bilingual curriculum with activity-based learning, strong
                  pastoral care, and community engagement to build confident,
                  compassionate learners prepared for the future.
                </p>
                <div className="about-features">
                  <div className="about-feature">
                    <span className="feature-dot green"></span>
                    <span>Inquiry-led science & mathematics</span>
                  </div>
                  <div className="about-feature">
                    <span className="feature-dot gold"></span>
                    <span>Reading & language development</span>
                  </div>
                  <div className="about-feature">
                    <span className="feature-dot blue"></span>
                    <span>Socio-emotional learning</span>
                  </div>
                </div>
                <a href="/about" className="btn btn-outline" style={{ marginTop: 20 }}>
                  Learn More About Us →
                </a>
              </div>
              <div className="about-preview-image">
                <img src={siteData.images[0]} alt="Students learning in classroom" />
                <div className="image-accent"></div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* ══════ LEADERSHIP ══════ */}
      <section className="full-bleed alt-bg">
        <div className="container">
          <ScrollAnimator>
            <LeadershipSection />
          </ScrollAnimator>
        </div>
      </section>

      {/* ══════ WHY CHOOSE US ══════ */}
      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator>
            <SectionTitle eyebrow="Why Vedanta" title="Why Choose Our School" centered>
              We provide a nurturing environment where every child is valued, supported
              and inspired to achieve their best.
            </SectionTitle>
          </ScrollAnimator>
          <div className="why-grid">
            {whyChoose.map((item, i) => (
              <ScrollAnimator key={i} delay={Math.min(i + 1, 4)}>
                <div className="why-card">
                  <div className="why-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CURRICULUM ══════ */}
      <section className="full-bleed dark-bg">
        <div className="container">
          <ScrollAnimator>
            <SectionTitle eyebrow="Curriculum" title="What We Teach" centered>
              A balanced, competency-based curriculum with emphasis on spoken English,
              yoga and sports alongside core academics.
            </SectionTitle>
          </ScrollAnimator>
          <div className="curriculum-grid">
            <div className="subject-tags">
              {siteData.subjects.map((sub, i) => (
                <span key={i} className="subject-tag">{sub}</span>
              ))}
            </div>
            <div className="activity-tags">
              <span className="activity-label">Activities:</span>
              {siteData.activities.map((act, i) => (
                <span key={i} className="activity-tag">{act}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FACULTY ══════ */}
      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator>
            <SectionTitle eyebrow="Our Team" title="Meet Our Faculty" centered>
              A dedicated and qualified team committed to student success.
            </SectionTitle>
          </ScrollAnimator>
          <div className="faculty-preview-grid">
            {siteData.faculty.slice(0, 4).map((p, i) => (
              <ScrollAnimator key={i} delay={Math.min(i + 1, 4)}>
                <FacultyCard person={p} />
              </ScrollAnimator>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a href="/faculty" className="btn btn-outline">View All Faculty →</a>
          </div>
        </div>
      </section>

      {/* ══════ GALLERY ══════ */}
      <section className="full-bleed alt-bg">
        <div className="container">
          <ScrollAnimator>
            <SectionTitle eyebrow="Gallery" title="School Life in Pictures" centered>
              Moments from our classrooms, events, and campus life.
            </SectionTitle>
          </ScrollAnimator>
          <ScrollAnimator>
            <ImageGrid images={siteData.images.slice(0, 6)} cols={3} />
          </ScrollAnimator>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <a href="/gallery" className="btn btn-outline">View Full Gallery →</a>
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator>
            <SectionTitle eyebrow="Testimonials" title="What Parents Say" centered>
              Hear from families who trust us with their children's education.
            </SectionTitle>
          </ScrollAnimator>
          <div className="testimonial-grid">
            {siteData.testimonials.map((t, i) => (
              <ScrollAnimator key={i} delay={Math.min(i + 1, 3)}>
                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <strong>{t.name}</strong>
                      <span className="muted">{t.role}</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="full-bleed cta-gradient">
        <div className="container">
          <ScrollAnimator>
            <div className="cta-block">
              <div className="cta-content">
                <div className="eyebrow" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.15)' }}>
                  Session {s.session}
                </div>
                <h2 style={{ color: '#fff' }}>Admission Open for {s.session}</h2>
                <p style={{ color: 'rgba(255,255,255,0.78)' }}>
                  Limited seats available for Nursery to Class 8. Apply now to secure
                  your child's future at {s.name}.
                </p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href="/admission">Apply Now</a>
                <a className="btn btn-ghost" href="/contact">Contact Us</a>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* ══════ CONTACT STRIP ══════ */}
      <section className="full-bleed alt-bg">
        <div className="container">
          <ScrollAnimator>
            <div className="contact-strip">
              <div className="contact-strip-info">
                <h3>Get In Touch</h3>
                <p>
                  Call us at <strong>{s.phones.join(' / ')}</strong> or email{' '}
                  <strong>{s.email}</strong>
                </p>
                <p className="muted">Campus: {s.address.replace(/\n/g, ', ')}</p>
              </div>
              <div className="contact-strip-actions">
                <a className="btn btn-primary" href="/contact">Contact Us</a>
                <a className="btn btn-outline" href={`tel:${s.phones[0]}`}>Call Now</a>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* ══════ EVENTS ══════ */}
      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator>
            <SectionTitle eyebrow="Events" title="Upcoming Events" centered />
          </ScrollAnimator>
          <div className="events-grid">
            {siteData.events.map((e, i) => (
              <ScrollAnimator key={i} delay={Math.min(i + 1, 3)}>
                <div className="event-card">
                  <div className="event-date">
                    <span className="event-day">{new Date(e.date).getDate()}</span>
                    <span className="event-month">{new Date(e.date).toLocaleString('en', { month: 'short' })}</span>
                  </div>
                  <div className="event-info">
                    <h4>{e.title}</h4>
                    <p className="muted">{new Date(e.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
