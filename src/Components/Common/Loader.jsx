import React from 'react'
import '../../styles/loader.css'
import logo from '../../assets/images/Logo.png'

export default function Loader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <div className="loader-content">
        <img src={logo} alt="Loading" className="loader-logo" />
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
        </div>
        <p className="loader-text">Loading...</p>
      </div>
    </div>
  )
}
