import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/" className="nav-brand">CareLink</Link>
          <span className="text-sm opacity-90 hidden sm:inline">Healthcare appointments</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div className="hidden md:flex nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/doctors" className="nav-link">Doctors</Link>
          <Link to="/pharmacy" className="nav-link">Pharmacy</Link>
          <Link to="/contact" className="nav-link">Contacts</Link>
          </div>

          <div className="hidden md:flex nav-auth" style={{ alignItems: 'center', gap: 12 }}>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-auth-btn">Register</Link>
          </div>
        </div>

        <button
          className="md:hidden flex items-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-blue-700 px-4 py-3">
          <div className="flex flex-col space-y-2">
            <Link to="/" onClick={() => setOpen(false)} className="block">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="block">About Us</Link>
            <Link to="/doctors" onClick={() => setOpen(false)} className="block">Doctors</Link>
            <Link to="/pharmacy" onClick={() => setOpen(false)} className="block">Pharmacy</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block">Contacts</Link>
            <Link to="/login" onClick={() => setOpen(false)} className="block">Login</Link>
            <Link to="/register" onClick={() => setOpen(false)} className="block">Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
