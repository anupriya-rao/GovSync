import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { loginUser } from '../services/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleLogin() {
    const res = await loginUser(email, password)
    if (res.token) {
      localStorage.setItem("token", res.token)
      navigate('/dashboard')
    } else alert("Login failed")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4169E1] to-[#43CD80]">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-[#4169E1]">Welcome Back 👋</h2>
        <p className="text-center text-sm text-gray-500 mb-6">Log in to your GovMSE Vault</p>

        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleLogin}
            className="bg-gradient-to-r from-[#4169E1] to-[#43CD80] text-white w-full py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-700 font-medium hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  )
}
