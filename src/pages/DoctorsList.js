// Centralized doctor list for reuse
const doctorsList = [
  // Cardiology (3 doctors)
  { id: 1, name: 'Dr. Alice Smith', specialization: 'Cardiology', rating: 4.8, hospital: 'City Private Hospital' },
  { id: 7, name: 'Dr. Rajiv Menon', specialization: 'Cardiology', rating: 4.6, hospital: 'City Private Hospital' },
  { id: 13, name: 'Dr. Priya Nair', specialization: 'Cardiology', rating: 4.7, hospital: 'Sunrise Clinic' },
  // Dermatology
  { id: 2, name: 'Dr. Bob Lee', specialization: 'Dermatology', rating: 4.6, hospital: 'Sunshine Medical Center' },
  { id: 8, name: 'Dr. Sarah Kim', specialization: 'Dermatology', rating: 4.7, hospital: 'Sunrise Clinic' },
  // Pediatrics
  { id: 3, name: 'Dr. Clara Zhao', specialization: 'Pediatrics', rating: 4.9, hospital: 'Green Valley Hospital' },
  { id: 9, name: 'Dr. Omar Farouk', specialization: 'Pediatrics', rating: 4.8, hospital: 'Green Valley Hospital' },
  // Neurology
  { id: 4, name: 'Dr. John Patel', specialization: 'Neurology', rating: 4.7, hospital: 'NeuroCare Clinic' },
  { id: 10, name: 'Dr. Lisa Brown', specialization: 'Neurology', rating: 4.9, hospital: 'NeuroCare Clinic' },
  // Orthopedics
  { id: 5, name: 'Dr. Maria Gomez', specialization: 'Orthopedics', rating: 4.5, hospital: 'OrthoPlus Center' },
  { id: 11, name: 'Dr. Peter White', specialization: 'Orthopedics', rating: 4.4, hospital: 'OrthoPlus Center' },
  // General Medicine
  { id: 6, name: 'Dr. Emily Wang', specialization: 'General Medicine', rating: 4.8, hospital: 'Family Health Clinic' },
  { id: 12, name: 'Dr. Aisha Singh', specialization: 'General Medicine', rating: 4.7, hospital: 'Family Health Clinic' },
];

export const specializations = [
  'Cardiology',
  'Dermatology',
  'Pediatrics',
  'Neurology',
  'Orthopedics',
  'General Medicine',
];

export const hospitals = [
  'City Private Hospital',
  'Sunshine Medical Center',
  'Green Valley Hospital',
  'NeuroCare Clinic',
  'OrthoPlus Center',
  'Family Health Clinic',
  'Sunrise Clinic',
];

export default doctorsList;
