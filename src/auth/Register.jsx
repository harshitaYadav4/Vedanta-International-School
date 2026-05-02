import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "student"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Registration submitted (demo)')
  };

  const roles = ['student', 'parent', 'admin']

  return (
    <AuthLayout title="Create Account">
      <p className="auth-sub">Join Global Model Public School's online community.</p>

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create a password" required />
        </div>

        <div className="form-group">
          <label>Register as</label>
          <div className="role-pills">
            {roles.map(r => (
              <button
                key={r}
                type="button"
                className={`role-pill ${formData.role === r ? 'active' : ''}`}
                onClick={() => setFormData({ ...formData, role: r })}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-primary auth-submit">Create Account</button>
      </form>

      <div className="auth-links">Already have an account? <Link to="/login">Sign in</Link></div>
    </AuthLayout>
  )
}
