import React from 'react';
import { HiMagnifyingGlass, HiChevronDown, HiBuildingOffice2, HiCalendarDays } from 'react-icons/hi2';

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
      className="search-form w-full bg-white rounded-2xl shadow-md p-6 mb-8 grid grid-cols-1 md:grid-cols-5 gap-4"
    >
      <div className="search-field">
        <span className="search-icon"><HiMagnifyingGlass /></span>
        <input
          type="text"
          placeholder="Doctor Name"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="search-field">
        <span className="search-icon"><HiChevronDown /></span>
        <select
          value={selectedSpecialization}
          onChange={e => setSelectedSpecialization(e.target.value)}
          className="search-select"
        >
          <option value="">Specialization</option>
          {specializations.map(spec => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>
      </div>
      <div className="search-field">
        <span className="search-icon"><HiBuildingOffice2 /></span>
        <select
          value={selectedHospital}
          onChange={e => setSelectedHospital(e.target.value)}
          className="search-select"
        >
          <option value="">Hospital</option>
          {hospitals.map(hosp => (
            <option key={hosp} value={hosp}>{hosp}</option>
          ))}
        </select>
      </div>
      <div className="search-field">
        <span className="search-icon"><HiCalendarDays /></span>
        <input
          type="date"
          value={selectedSearchDate}
          onChange={e => setSelectedSearchDate(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="flex items-end">
        <button
          type="submit"
          className="search-submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}
