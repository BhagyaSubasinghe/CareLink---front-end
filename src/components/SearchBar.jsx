import React from 'react';
import { HiSearch, HiChevronDown, HiBuildingOffice2, HiCalendarDays } from 'react-icons/hi2';

export default function SearchBar({
  search, setSearch,
  selectedSpecialization, setSelectedSpecialization,
  selectedHospital, setSelectedHospital,
  selectedSearchDate, setSelectedSearchDate,
  specializations, hospitals,
  onSearch
}) {
  return (
    <form
      onSubmit={onSearch}
      className="w-full bg-white rounded-2xl shadow-md p-6 mb-8 grid grid-cols-1 md:grid-cols-5 gap-4"
    >
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg"><HiSearch /></span>
        <input
          type="text"
          placeholder="Doctor Name"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full h-12 rounded-xl border border-gray-300 pl-10 pr-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base font-medium bg-white"
        />
      </div>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg pointer-events-none"><HiChevronDown /></span>
        <select
          value={selectedSpecialization}
          onChange={e => setSelectedSpecialization(e.target.value)}
          className="w-full h-12 rounded-xl border border-gray-300 pl-10 pr-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base font-medium bg-white appearance-none"
        >
          <option value="">Specialization</option>
          {specializations.map(spec => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>
      </div>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg pointer-events-none"><HiBuildingOffice2 /></span>
        <select
          value={selectedHospital}
          onChange={e => setSelectedHospital(e.target.value)}
          className="w-full h-12 rounded-xl border border-gray-300 pl-10 pr-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base font-medium bg-white appearance-none"
        >
          <option value="">Hospital</option>
          {hospitals.map(hosp => (
            <option key={hosp} value={hosp}>{hosp}</option>
          ))}
        </select>
      </div>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg pointer-events-none"><HiCalendarDays /></span>
        <input
          type="date"
          value={selectedSearchDate}
          onChange={e => setSelectedSearchDate(e.target.value)}
          className="w-full h-12 rounded-xl border border-gray-300 pl-10 pr-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base font-medium bg-white"
        />
      </div>
      <div className="flex items-end">
        <button
          type="submit"
          className="w-full h-12 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow"
        >
          Search
        </button>
      </div>
    </form>
  );
}
