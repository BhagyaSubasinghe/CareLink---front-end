import React, { useState } from 'react';
import DoctorCard from '../components/DoctorCard';

const SPECIALTIES = ['Cardiologist', 'Dermatologist', 'Pediatrics', 'Orthopedic', 'Neurology', 'General Physician'];

const SPECIALTY_ICONS = {
  'Cardiologist': '❤️',
  'Dermatologist': '💆',
  'Pediatrics': '👶',
  'Orthopedic': '🦴',
  'Neurology': '🧠',
  'General Physician': '⚕️'
};

const SPECIALTY_COLORS = {
  'Cardiologist': { bg: 'from-red-500 to-pink-500', light: 'bg-red-100', text: 'text-red-700', hover: 'hover:from-red-600 hover:to-pink-600' },
  'Dermatologist': { bg: 'from-orange-500 to-amber-500', light: 'bg-orange-100', text: 'text-orange-700', hover: 'hover:from-orange-600 hover:to-amber-600' },
  'Pediatrics': { bg: 'from-pink-500 to-rose-500', light: 'bg-pink-100', text: 'text-pink-700', hover: 'hover:from-pink-600 hover:to-rose-600' },
  'Orthopedic': { bg: 'from-blue-500 to-cyan-500', light: 'bg-blue-100', text: 'text-blue-700', hover: 'hover:from-blue-600 hover:to-cyan-600' },
  'Neurology': { bg: 'from-purple-500 to-indigo-500', light: 'bg-purple-100', text: 'text-purple-700', hover: 'hover:from-purple-600 hover:to-indigo-600' },
  'General Physician': { bg: 'from-green-500 to-emerald-500', light: 'bg-green-100', text: 'text-green-700', hover: 'hover:from-green-600 hover:to-emerald-600' }
};

const doctorsList = [
  // Cardiologists
  { id: 1, name: 'Dr. Alice Smith', specialization: 'Cardiologist', rating: 4.8, hospital: 'City Heart Hospital', image: 'https://via.placeholder.com/150?text=Dr+Alice+Smith', availableDates: ['2026-05-20', '2026-05-22', '2026-05-25'], experience: '12 years', fees: '$60' },
  { id: 2, name: 'Dr. John Davis', specialization: 'Cardiologist', rating: 4.9, hospital: 'Prime Medical Center', image: 'https://via.placeholder.com/150?text=Dr+John+Davis', availableDates: ['2026-05-19', '2026-05-21', '2026-05-24'], experience: '15 years', fees: '$75' },
  { id: 3, name: 'Dr. Michael Chen', specialization: 'Cardiologist', rating: 4.7, hospital: 'Medical Trust Hospital', image: 'https://via.placeholder.com/150?text=Dr+Michael+Chen', availableDates: ['2026-05-20', '2026-05-23', '2026-05-26'], experience: '10 years', fees: '$55' },
  { id: 4, name: 'Dr. Sarah Wilson', specialization: 'Cardiologist', rating: 4.8, hospital: 'City Heart Hospital', image: 'https://via.placeholder.com/150?text=Dr+Sarah+Wilson', availableDates: ['2026-05-19', '2026-05-22', '2026-05-25'], experience: '14 years', fees: '$70' },
  { id: 5, name: 'Dr. Robert Taylor', specialization: 'Cardiologist', rating: 4.6, hospital: 'United Health Center', image: 'https://via.placeholder.com/150?text=Dr+Robert+Taylor', availableDates: ['2026-05-21', '2026-05-23', '2026-05-27'], experience: '11 years', fees: '$65' },
  { id: 6, name: 'Dr. Emma Johnson', specialization: 'Cardiologist', rating: 4.9, hospital: 'Advanced Care Clinic', image: 'https://via.placeholder.com/150?text=Dr+Emma+Johnson', availableDates: ['2026-05-20', '2026-05-24', '2026-05-26'], experience: '16 years', fees: '$80' },

  // Dermatologists
  { id: 7, name: 'Dr. Bob Lee', specialization: 'Dermatologist', rating: 4.6, hospital: 'Skin Care Clinic', image: 'https://via.placeholder.com/150?text=Dr+Bob+Lee', availableDates: ['2026-05-19', '2026-05-21', '2026-05-25'], experience: '9 years', fees: '$50' },
  { id: 8, name: 'Dr. Lisa Brown', specialization: 'Dermatologist', rating: 4.8, hospital: 'Beauty & Health Clinic', image: 'https://via.placeholder.com/150?text=Dr+Lisa+Brown', availableDates: ['2026-05-20', '2026-05-22', '2026-05-26'], experience: '13 years', fees: '$65' },
  { id: 9, name: 'Dr. James Martinez', specialization: 'Dermatologist', rating: 4.7, hospital: 'Skin Care Clinic', image: 'https://via.placeholder.com/150?text=Dr+James+Martinez', availableDates: ['2026-05-19', '2026-05-23', '2026-05-27'], experience: '11 years', fees: '$60' },
  { id: 10, name: 'Dr. Patricia Anderson', specialization: 'Dermatologist', rating: 4.9, hospital: 'Derma Pro Clinic', image: 'https://via.placeholder.com/150?text=Dr+Patricia+Anderson', availableDates: ['2026-05-21', '2026-05-24', '2026-05-25'], experience: '15 years', fees: '$70' },
  { id: 11, name: 'Dr. Christopher White', specialization: 'Dermatologist', rating: 4.7, hospital: 'Skin Health Center', image: 'https://via.placeholder.com/150?text=Dr+Christopher+White', availableDates: ['2026-05-20', '2026-05-22', '2026-05-28'], experience: '10 years', fees: '$55' },
  { id: 12, name: 'Dr. Jennifer Harris', specialization: 'Dermatologist', rating: 4.8, hospital: 'Beauty & Health Clinic', image: 'https://via.placeholder.com/150?text=Dr+Jennifer+Harris', availableDates: ['2026-05-19', '2026-05-23', '2026-05-26'], experience: '12 years', fees: '$62' },

  // Pediatricians
  { id: 13, name: 'Dr. Clara Zhao', specialization: 'Pediatrics', rating: 4.9, hospital: 'Child Care Hospital', image: 'https://via.placeholder.com/150?text=Dr+Clara+Zhao', availableDates: ['2026-05-20', '2026-05-21', '2026-05-24'], experience: '14 years', fees: '$55' },
  { id: 14, name: 'Dr. Daniel Rodriguez', specialization: 'Pediatrics', rating: 4.8, hospital: 'Happy Kids Clinic', image: 'https://via.placeholder.com/150?text=Dr+Daniel+Rodriguez', availableDates: ['2026-05-19', '2026-05-22', '2026-05-25'], experience: '12 years', fees: '$50' },
  { id: 15, name: 'Dr. Michelle Garcia', specialization: 'Pediatrics', rating: 4.7, hospital: 'Child Care Hospital', image: 'https://via.placeholder.com/150?text=Dr+Michelle+Garcia', availableDates: ['2026-05-21', '2026-05-23', '2026-05-26'], experience: '10 years', fees: '$48' },
  { id: 16, name: 'Dr. Kevin Thomas', specialization: 'Pediatrics', rating: 4.9, hospital: 'Pediatric Excellence Center', image: 'https://via.placeholder.com/150?text=Dr+Kevin+Thomas', availableDates: ['2026-05-20', '2026-05-24', '2026-05-27'], experience: '16 years', fees: '$60' },
  { id: 17, name: 'Dr. Angela Lopez', specialization: 'Pediatrics', rating: 4.6, hospital: 'Happy Kids Clinic', image: 'https://via.placeholder.com/150?text=Dr+Angela+Lopez', availableDates: ['2026-05-19', '2026-05-21', '2026-05-28'], experience: '9 years', fees: '$45' },
  { id: 18, name: 'Dr. Jason Moore', specialization: 'Pediatrics', rating: 4.8, hospital: 'Child Care Hospital', image: 'https://via.placeholder.com/150?text=Dr+Jason+Moore', availableDates: ['2026-05-20', '2026-05-22', '2026-05-25'], experience: '13 years', fees: '$52' },

  // Orthopedic
  { id: 19, name: 'Dr. Mark Johnson', specialization: 'Orthopedic', rating: 4.8, hospital: 'Bone & Joint Center', image: 'https://via.placeholder.com/150?text=Dr+Mark+Johnson', availableDates: ['2026-05-20', '2026-05-23', '2026-05-25'], experience: '14 years', fees: '$70' },
  { id: 20, name: 'Dr. Rachel Green', specialization: 'Orthopedic', rating: 4.7, hospital: 'Orthopedic Specialists Clinic', image: 'https://via.placeholder.com/150?text=Dr+Rachel+Green', availableDates: ['2026-05-19', '2026-05-22', '2026-05-26'], experience: '11 years', fees: '$65' },
  { id: 21, name: 'Dr. Thomas King', specialization: 'Orthopedic', rating: 4.9, hospital: 'Bone & Joint Center', image: 'https://via.placeholder.com/150?text=Dr+Thomas+King', availableDates: ['2026-05-21', '2026-05-24', '2026-05-27'], experience: '16 years', fees: '$75' },
  { id: 22, name: 'Dr. Victoria Scott', specialization: 'Orthopedic', rating: 4.8, hospital: 'Sports Medicine & Orthopedics', image: 'https://via.placeholder.com/150?text=Dr+Victoria+Scott', availableDates: ['2026-05-20', '2026-05-25', '2026-05-28'], experience: '13 years', fees: '$72' },
  { id: 23, name: 'Dr. Steven Adams', specialization: 'Orthopedic', rating: 4.7, hospital: 'Orthopedic Specialists Clinic', image: 'https://via.placeholder.com/150?text=Dr+Steven+Adams', availableDates: ['2026-05-19', '2026-05-23', '2026-05-26'], experience: '10 years', fees: '$60' },
  { id: 24, name: 'Dr. Lauren Miller', specialization: 'Orthopedic', rating: 4.9, hospital: 'Bone & Joint Center', image: 'https://via.placeholder.com/150?text=Dr+Lauren+Miller', availableDates: ['2026-05-21', '2026-05-22', '2026-05-24'], experience: '15 years', fees: '$78' },

  // Neurology
  { id: 25, name: 'Dr. David Wilson', specialization: 'Neurology', rating: 4.9, hospital: 'Neurology Institute', image: 'https://via.placeholder.com/150?text=Dr+David+Wilson', availableDates: ['2026-05-20', '2026-05-21', '2026-05-26'], experience: '16 years', fees: '$80' },
  { id: 26, name: 'Dr. Nancy Black', specialization: 'Neurology', rating: 4.8, hospital: 'Brain & Spine Center', image: 'https://via.placeholder.com/150?text=Dr+Nancy+Black', availableDates: ['2026-05-19', '2026-05-23', '2026-05-25'], experience: '14 years', fees: '$75' },
  { id: 27, name: 'Dr. Edward Fisher', specialization: 'Neurology', rating: 4.7, hospital: 'Neurology Institute', image: 'https://via.placeholder.com/150?text=Dr+Edward+Fisher', availableDates: ['2026-05-21', '2026-05-24', '2026-05-27'], experience: '12 years', fees: '$70' },
  { id: 28, name: 'Dr. Sharon Clark', specialization: 'Neurology', rating: 4.8, hospital: 'Advanced Neurology Clinic', image: 'https://via.placeholder.com/150?text=Dr+Sharon+Clark', availableDates: ['2026-05-20', '2026-05-22', '2026-05-28'], experience: '13 years', fees: '$72' },
  { id: 29, name: 'Dr. Paul Hill', specialization: 'Neurology', rating: 4.9, hospital: 'Brain & Spine Center', image: 'https://via.placeholder.com/150?text=Dr+Paul+Hill', availableDates: ['2026-05-19', '2026-05-25', '2026-05-26'], experience: '15 years', fees: '$78' },
  { id: 30, name: 'Dr. Karen Wright', specialization: 'Neurology', rating: 4.7, hospital: 'Neurology Institute', image: 'https://via.placeholder.com/150?text=Dr+Karen+Wright', availableDates: ['2026-05-21', '2026-05-23', '2026-05-24'], experience: '11 years', fees: '$68' },

  // General Physician
  { id: 31, name: 'Dr. George Young', specialization: 'General Physician', rating: 4.7, hospital: 'City General Hospital', image: 'https://via.placeholder.com/150?text=Dr+George+Young', availableDates: ['2026-05-20', '2026-05-22', '2026-05-25'], experience: '10 years', fees: '$40' },
  { id: 32, name: 'Dr. Rebecca Hall', specialization: 'General Physician', rating: 4.8, hospital: 'Health First Clinic', image: 'https://via.placeholder.com/150?text=Dr+Rebecca+Hall', availableDates: ['2026-05-19', '2026-05-21', '2026-05-26'], experience: '12 years', fees: '$45' },
  { id: 33, name: 'Dr. Charles Allen', specialization: 'General Physician', rating: 4.6, hospital: 'City General Hospital', image: 'https://via.placeholder.com/150?text=Dr+Charles+Allen', availableDates: ['2026-05-20', '2026-05-23', '2026-05-27'], experience: '9 years', fees: '$38' },
  { id: 34, name: 'Dr. Deborah Young', specialization: 'General Physician', rating: 4.9, hospital: 'Community Health Center', image: 'https://via.placeholder.com/150?text=Dr+Deborah+Young', availableDates: ['2026-05-21', '2026-05-24', '2026-05-25'], experience: '14 years', fees: '$50' },
  { id: 35, name: 'Dr. Joseph Nelson', specialization: 'General Physician', rating: 4.7, hospital: 'Health First Clinic', image: 'https://via.placeholder.com/150?text=Dr+Joseph+Nelson', availableDates: ['2026-05-19', '2026-05-22', '2026-05-28'], experience: '11 years', fees: '$42' },
  { id: 36, name: 'Dr. Helen Carter', specialization: 'General Physician', rating: 4.8, hospital: 'City General Hospital', image: 'https://via.placeholder.com/150?text=Dr+Helen+Carter', availableDates: ['2026-05-20', '2026-05-25', '2026-05-26'], experience: '13 years', fees: '$48' },
];

export default function Doctors() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(SPECIALTIES[0]);
  const [query, setQuery] = useState('');

  // Filter doctors by specialty, then by search query, and sort by rating
  const filtered = doctorsList
    .filter((d) => d.specialization === selectedSpecialty)
    .filter((d) => d.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const colors = SPECIALTY_COLORS[selectedSpecialty];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className={`relative bg-gradient-to-br ${colors.bg} text-white py-16 overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-5xl">🏥</span>
            <div>
              <h1 className="text-5xl font-bold">Find Your Perfect Doctor</h1>
              <p className="text-lg mt-2 opacity-90">Browse certified specialists and book appointments instantly</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Specialty Selection */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Select Specialty</h2>
              <p className="text-gray-600 mt-2">Choose a medical specialty to view top doctors</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SPECIALTIES.map((specialty) => {
              const btnColors = SPECIALTY_COLORS[specialty];
              const isSelected = selectedSpecialty === specialty;
              
              return (
                <button
                  key={specialty}
                  onClick={() => {
                    setSelectedSpecialty(specialty);
                    setQuery('');
                  }}
                  className={`group relative p-6 rounded-2xl font-bold transition-all duration-300 transform 
                    ${isSelected
                      ? `bg-gradient-to-br ${btnColors.bg} text-white shadow-2xl scale-105 hover:scale-110`
                      : `bg-white text-gray-800 shadow-lg hover:shadow-2xl border-3 border-gray-200 hover:border-gray-400 hover:scale-105`
                    }`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`text-5xl group-hover:scale-125 transition-transform duration-300 ${isSelected ? 'animate-bounce' : ''}`}>
                      {SPECIALTY_ICONS[specialty]}
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-sm md:text-base">{specialty}</div>
                      {isSelected && (
                        <div className="text-xs mt-2 flex items-center justify-center space-x-1 opacity-90">
                          <span>✓</span>
                          <span>Selected</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  {!isSelected && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${btnColors.bg} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`}></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <span className="absolute left-5 top-4 text-2xl">🔍</span>
            <input
              placeholder="Search doctor by name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 placeholder-gray-400 bg-white shadow-md text-lg"
            />
          </div>
        </div>

        {/* Doctors Section Header */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Top Rated {selectedSpecialty}s
              </h2>
              <p className="text-gray-600 mt-2">Showing the best specialists in this category</p>
            </div>
            <div className={`hidden md:flex items-center space-x-3 ${colors.light} ${colors.text} px-6 py-3 rounded-full shadow-lg border-2 ${colors.text.replace('text-', 'border-')}/30`}>
              <span className="text-2xl">⭐</span>
              <span className="font-bold">4.8+ Rating</span>
            </div>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length > 0 ? (
            filtered.map((d) => (
              <DoctorCard
                key={d.id}
                doctor={d}
                onBook={() => {
                  window.location.href = `/book-appointment?doctorId=${d.id}`;
                }}
                specialtyColor={colors}
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 bg-gray-100 rounded-2xl">
              <span className="text-7xl mb-4">😔</span>
              <p className="text-gray-600 text-xl font-semibold">No doctors found</p>
              <p className="text-gray-500 mt-2">Try searching with a different name</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
      `}</style>
    </div>
  );
}
