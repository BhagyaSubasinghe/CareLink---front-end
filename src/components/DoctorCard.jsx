import React, { useState } from 'react';

export default function DoctorCard({ doctor = {}, onBook, specialtyColor = {} }) {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.8) return 'text-green-600';
    if (rating >= 4.5) return 'text-blue-600';
    return 'text-orange-600';
  };

  const getRatingBg = (rating) => {
    if (rating >= 4.8) return 'bg-green-100';
    if (rating >= 4.5) return 'bg-blue-100';
    return 'bg-orange-100';
  };

  const gradientColor = specialtyColor.bg || 'from-blue-600 to-purple-600';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Card Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientColor} rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-95'}`}></div>

      {/* Main Card */}
      <div className="relative h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
        {/* Top Gradient Bar */}
        <div className={`h-3 bg-gradient-to-r ${gradientColor}`}></div>

        {/* Card Content */}
        <div className="p-7">
          {/* Rating Badge */}
          <div className={`absolute top-7 right-7 ${getRatingBg(doctor.rating)} ${getRatingColor(doctor.rating)} rounded-full px-5 py-2 font-bold text-sm shadow-lg border-2 border-white`}>
            ★ {doctor.rating || '4.7'}
          </div>

          {/* Doctor Image and Basic Info */}
          <div className="flex items-start space-x-5 mb-6">
            <div className="relative">
              <img
                src={doctor.image || 'https://via.placeholder.com/100'}
                alt={doctor.name}
                className="w-28 h-28 rounded-2xl object-cover border-4 border-gray-100 shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-7 h-7 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white text-sm font-bold">✓</div>
            </div>
            <div className="flex-1 pt-3">
              <h3 className="text-xl font-bold text-gray-900">{doctor.name || 'Dr. Jane Doe'}</h3>
              <p className={`text-sm font-bold ${specialtyColor.text || 'text-blue-600'} mb-3`}>{doctor.specialization || 'General Physician'}</p>
              
              {/* Experience */}
              <div className={`flex items-center text-xs font-bold w-fit px-4 py-2 rounded-lg ${specialtyColor.light || 'bg-blue-100'} ${specialtyColor.text || 'text-blue-700'}`}>
                <span className="mr-2">📅</span> {doctor.experience || '10 years'}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-5"></div>

          {/* Hospital and Fees Row */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Hospital */}
            <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl">
              <span className="text-2xl">🏥</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-600 font-bold">HOSPITAL</p>
                <p className="text-sm font-bold text-gray-800 truncate">{doctor.hospital || 'City Hospital'}</p>
              </div>
            </div>

            {/* Fees */}
            <div className={`flex items-center space-x-3 bg-gradient-to-br ${specialtyColor.bg || 'from-blue-100 to-purple-100'} p-4 rounded-xl`}>
              <span className="text-2xl">💰</span>
              <div className="flex-1">
                <p className="text-xs text-gray-700 font-bold">CONSULTATION</p>
                <p className="text-lg font-bold text-green-600">{doctor.fees || '$50'}</p>
              </div>
            </div>
          </div>

          {/* Available Dates */}
          <div className="mb-7">
            <p className="text-xs font-bold text-gray-800 mb-3 flex items-center">
              <span className="mr-2 text-lg">📆</span> AVAILABLE DATES
            </p>
            <div className="flex flex-wrap gap-2">
              {doctor.availableDates && doctor.availableDates.length > 0 ? (
                doctor.availableDates.map((date, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs px-3 py-2 rounded-lg font-bold shadow-sm hover:shadow-md transition-shadow border border-green-200"
                  >
                    {formatDate(date)}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 text-sm italic">No dates available</span>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            {/* Book Button */}
            <button
              onClick={() => onBook && onBook(doctor)}
              className={`w-full bg-gradient-to-r ${gradientColor} hover:shadow-lg text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 group shadow-lg`}
            >
              <span>🎯</span>
              <span>Book Appointment</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            {/* Call CTA */}
            <button className={`w-full border-2 ${specialtyColor.text || 'text-blue-600'} ${specialtyColor.text ? specialtyColor.text.replace('text-', 'border-') : 'border-blue-600'} font-bold py-3 px-4 rounded-xl transition-all duration-300 ${specialtyColor.light || 'hover:bg-blue-50'}`}>
              📞 Call Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
