import React, { useState } from 'react';
import DoctorCard from '../components/DoctorCard';

const doctorsList = [
  { id: 1, name: 'Dr. Alice Smith', specialization: 'Cardiologist', rating: 4.8 },
  { id: 2, name: 'Dr. Bob Lee', specialization: 'Dermatologist', rating: 4.6 },
  { id: 3, name: 'Dr. Clara Zhao', specialization: 'Pediatrics', rating: 4.9 },
];

export default function Doctors() {
  const [query, setQuery] = useState('');

  const filtered = doctorsList.filter((d) => (
    d.name.toLowerCase().includes(query.toLowerCase()) || d.specialization.toLowerCase().includes(query.toLowerCase())
  ));

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Doctors</h1>
      <div className="mb-4">
        <input placeholder="Search by name or specialization" value={query} onChange={(e) => setQuery(e.target.value)} className="w-full md:w-1/2 border rounded px-3 py-2" />
      </div>
      <div className="grid grid-cols-1 gap-3">
        {filtered.map((d) => (<DoctorCard key={d.id} doctor={d} onBook={() => { window.location.href = '/book'; }} />))}
      </div>
    </div>
  );
}
