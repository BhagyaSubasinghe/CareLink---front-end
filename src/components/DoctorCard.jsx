import React from 'react';

export default function DoctorCard({ doctor = {}, onBook }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex space-x-4 items-center">
      <img src={doctor.image || 'https://via.placeholder.com/80'} alt="doctor" className="w-20 h-20 rounded-full object-cover" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{doctor.name || 'Dr. Jane Doe'}</h3>
        <p className="text-sm text-slate-500">{doctor.specialization || 'General Physician'}</p>
        <div className="text-sm text-yellow-500">Rating: {doctor.rating || '4.7'}</div>
      </div>
      <div>
        <button onClick={() => onBook && onBook(doctor)} className="bg-blue-600 text-white px-4 py-2 rounded">Book</button>
      </div>
    </div>
  );
}
