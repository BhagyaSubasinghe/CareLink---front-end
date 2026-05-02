import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder: perform login via API
    console.log('login', { email, password });
    navigate('/dashboard');
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded p-6">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
          <Link to="/register" className="text-sm text-blue-600">Register</Link>
        </div>
      </form>
    </div>
  );
}
