import React from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';

const sampleDoctors = [
  { id: 1, name: 'Dr. Alice Smith', specialization: 'Cardiologist', rating: 4.8 },
  { id: 2, name: 'Dr. Bob Lee', specialization: 'Dermatologist', rating: 4.6 },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="bg-blue-50 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-700">CareLink</h1>
            <p className="mt-2 text-slate-600">Fast, simple appointment booking with trusted doctors.</p>
            <Link to="/book" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded">Book Appointment</Link>
          </div>
          <div className="mt-4 md:mt-0">
            <img src="https://via.placeholder.com/240x140" alt="care" className="rounded shadow" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Featured Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sampleDoctors.map((d) => (
            <DoctorCard key={d.id} doctor={d} onBook={() => { window.location.href = '/book'; }} />
          ))}
        </div>
      </section>
    </div>
  );
}
