import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';
import SearchBar from '../components/SearchBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import './Home.css';

const sampleDoctors = [
  { id: 1, name: 'Dr. Alice Smith', specialization: 'Cardiologist', rating: 4.8 },
  { id: 2, name: 'Dr. Bob Lee', specialization: 'Dermatologist', rating: 4.6 },
  { id: 3, name: 'Dr. Clara Zhou', specialization: 'Pediatrician', rating: 4.7 },
];

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedSearchDate, setSelectedSearchDate] = useState('');

  const specializations = ['Cardiology', 'Dermatology', 'Pediatrics', 'Orthopedics'];
  const hospitals = ['City Hospital', 'St. Marys', 'Central Clinic'];

  function onSearch(e) {
    if (e && e.preventDefault) e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.set('q', search);
    if (selectedSpecialization) params.set('spec', selectedSpecialization);
    if (selectedHospital) params.set('hosp', selectedHospital);
    if (selectedSearchDate) params.set('date', selectedSearchDate);
    navigate({ pathname: '/doctors', search: params.toString() });
  }
  return (
    <Container className="home-root">
      <section className="hero">
        <div className="hero-content">
          <Typography variant="h2" component="h1" className="hero-title">
            CareLink — healthcare booking made simple
          </Typography>
          <Typography variant="subtitle1" className="hero-sub">
            Find trusted doctors, book appointments in seconds, and manage your care in one place.
          </Typography>
          <div className="hero-search">
            <SearchBar
              search={search}
              setSearch={setSearch}
              selectedSpecialization={selectedSpecialization}
              setSelectedSpecialization={setSelectedSpecialization}
              selectedHospital={selectedHospital}
              setSelectedHospital={setSelectedHospital}
              selectedSearchDate={selectedSearchDate}
              setSelectedSearchDate={setSelectedSearchDate}
              specializations={specializations}
              hospitals={hospitals}
              onSearch={onSearch}
            />
          </div>
          <div className="hero-ctas">
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/book"
              className="cta"
            >
              Book Appointment
            </Button>
            <Button component={RouterLink} to="/doctors" className="cta ghost">
              Find Doctors
            </Button>
          </div>
        </div>
        <div className="hero-visual" aria-hidden>
          <img src="https://via.placeholder.com/520x340" alt="healthcare" />
        </div>
      </section>

      <section className="features">
        <Typography variant="h5" component="h2" className="section-title">
          Why people choose CareLink
        </Typography>
        <Grid container spacing={2} className="features-grid">
          <Grid item xs={12} md={4}>
            <Paper className="feature-card">
              <div className="feature-icon">🔒</div>
              <Typography className="feature-title">Secure records</Typography>
              <Typography className="feature-desc">Your health data is private and protected.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="feature-card">
              <div className="feature-icon">⚡</div>
              <Typography className="feature-title">Fast booking</Typography>
              <Typography className="feature-desc">Book appointments in under a minute.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="feature-card">
              <div className="feature-icon">🩺</div>
              <Typography className="feature-title">Trusted doctors</Typography>
              <Typography className="feature-desc">Verified specialists across many fields.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </section>

      <section className="doctors-preview">
        <Typography variant="h5" component="h2" className="section-title">
          Featured Doctors
        </Typography>
        <Grid container spacing={3}>
          {sampleDoctors.map((d) => (
            <Grid item xs={12} sm={6} md={4} key={d.id}>
              <DoctorCard doctor={d} onBook={() => { window.location.href = '/book'; }} />
            </Grid>
          ))}
        </Grid>
      </section>
    </Container>
  );
}
