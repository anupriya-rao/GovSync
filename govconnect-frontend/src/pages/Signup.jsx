import { useState } from 'react'
import { registerUser } from '../services/api'
import { useNavigate, Link } from 'react-router-dom'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleRegister() {
    const res = await registerUser(email, password)
    if (res.msg === "registered") navigate('/login')
    else alert("Registration failed")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4169E1] to-[#43CD80]">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-[#4169E1]">Join GovMSE Today 🚀</h2>
        <p className="text-center text-sm text-gray-500 mb-6">Create your secure business compliance vault</p>

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
            placeholder="Create a password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleRegister}
            className="bg-gradient-to-r from-[#4169E1] to-[#43CD80] text-white w-full py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Register
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-700 font-medium hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  )
}
