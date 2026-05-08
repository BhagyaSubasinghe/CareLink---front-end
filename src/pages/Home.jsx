import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const sampleDoctors = [
  { id: 1, name: 'Dr. Alice Smith', specialization: 'Cardiologist', rating: 4.8 },
  { id: 2, name: 'Dr. Bob Lee', specialization: 'Dermatologist', rating: 4.6 },
];

export default function Home() {
  return (
    <Stack spacing={6}>
      <Paper elevation={3} sx={{ p: 4, bgcolor: 'primary.light', borderRadius: 3 }}>
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
          <Grid item xs={12} md={7}>
            <Typography variant="h3" fontWeight={700} color="primary.main" gutterBottom>
              CareLink
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Fast, simple appointment booking with trusted doctors.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/book"
              sx={{ mt: 2, borderRadius: 2 }}
            >
              Book Appointment
            </Button>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-end' }}>
              <Box
                component="img"
                src="https://via.placeholder.com/320x180"
                alt="care"
                sx={{ borderRadius: 2, boxShadow: 3, width: '100%', maxWidth: 320 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <section>
        <Typography variant="h5" fontWeight={600} mb={3}>
          Featured Doctors
        </Typography>
        <Grid container spacing={3}>
          {sampleDoctors.map((d) => (
            <Grid item xs={12} md={6} key={d.id}>
              <DoctorCard doctor={d} onBook={() => { window.location.href = '/book'; }} />
            </Grid>
          ))}
        </Grid>
      </section>
    </Stack>
  );
}
