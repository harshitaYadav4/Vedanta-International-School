import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthLayout from './AuthLayout'

export default function Login() {
  const [role, setRole] = useState('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    login({ role })
    if (role === 'admin') navigate('/admin')
    else if (role === 'student') navigate('/student')
    else navigate('/')
  }

  const roles = ['student', 'parent', 'admin']

  return (
    <AuthLayout title="Welcome Back">
      <p className="auth-sub">Sign in to access your dashboard and school resources.</p>

      <form className="auth-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@school.edu" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" required />
        </div>

        <div className="form-row">
          <label className="checkbox-label">
            <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
            <span>Remember me</span>
          </label>
          <Link to="/forgot" className="forgot-link">Forgot Password?</Link>
        </div>

        <div className="form-group">
          <label>Login as</label>
          <div className="role-pills">
            {roles.map(r => (
              <button
                key={r}
                type="button"
                className={`role-pill ${role === r ? 'active' : ''}`}
                onClick={() => setRole(r)}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <button className="btn btn-primary auth-submit" type="submit">Sign In</button>
      </form>

      <div className="auth-links">New here? <Link to="/register">Create an account</Link></div>
    </AuthLayout>
  )
}
