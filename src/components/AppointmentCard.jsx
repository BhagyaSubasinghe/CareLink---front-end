import React from 'react';

export default function AppointmentCard({ appt = {} }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm text-slate-500">{appt.date || '2026-05-05'} • {appt.time || '10:00 AM'}</div>
          <div className="font-semibold">{appt.doctor || 'Dr. Jane Doe'}</div>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm ${appt.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
          {appt.status || 'pending'}
        </div>
      </div>
    </div>
  );
}
