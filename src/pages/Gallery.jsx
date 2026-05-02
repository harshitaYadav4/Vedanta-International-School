import React, { useState, useEffect } from 'react'
import ImageGrid from '../Components/ImageGrid'
import siteData from '../data/siteData'
import SectionTitle from '../Components/SectionTitle'
import ScrollAnimator from '../Components/Common/ScrollAnimator'
import Loader from '../Components/Common/Loader'
import '../styles/aboutInteractive.css'

export default function Gallery() {
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <Loader />

  const tabs = ['all', 'campus', 'events', 'classrooms']
  // For now all images are shown under 'all' — categories can be expanded later
  const images = siteData.images.concat(siteData.images)

  return (
    <main className="gallery-page">

      {/* HERO */}
      <section className="page-hero" style={{ backgroundImage: `url(${siteData.images[5]})` }}>
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a><span className="sep">/</span><span>Gallery</span>
          </div>
          <div className="eyebrow">Gallery</div>
          <h1>School Gallery</h1>
          <p>Photos of our campus, classrooms, events and school life.</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="full-bleed">
        <div className="container">
          <ScrollAnimator>
            <div className="gallery-tabs">
              {tabs.map(tab => (
                <button
                  key={tab}
                  className={`gallery-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </ScrollAnimator>

          <ScrollAnimator>
            <ImageGrid images={images} cols={4} />
          </ScrollAnimator>
        </div>
      </section>
    </main>
  )
}
