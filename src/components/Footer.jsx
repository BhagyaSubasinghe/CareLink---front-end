import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-600">
      <div className="container mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()} CareLink — Built with care
      </div>
    </footer>
  );
}
