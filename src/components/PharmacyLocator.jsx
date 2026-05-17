import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  TextField,
  Chip,
  Rating,
  LinearProgress,
  Alert,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Schedule,
  Star,
  Navigation,
  Info,
} from '@mui/icons-material';

const mockPharmacies = [
  {
    id: 1,
    name: 'MediCare Pharmacy',
    address: '123 Main St, Downtown',
    distance: 0.5,
    rating: 4.8,
    reviews: 342,
    phone: '+91 9876543210',
    hours: '9:00 AM - 9:00 PM',
    services: ['Home Delivery', '24/7 Support', 'Prescription Upload'],
    operationalScore: 95,
    deliveryTime: '30 mins',
  },
  {
    id: 2,
    name: 'HealthHub Pharmacy',
    address: '456 Oak Ave, Midtown',
    distance: 1.2,
    rating: 4.6,
    reviews: 256,
    phone: '+91 9876543211',
    hours: '8:00 AM - 10:00 PM',
    services: ['Home Delivery', 'Consultation', 'Generic Medicines'],
    operationalScore: 92,
    deliveryTime: '45 mins',
  },
  {
    id: 3,
    name: 'QuickMed Pharmacy',
    address: '789 Elm St, Uptown',
    distance: 2.1,
    rating: 4.4,
    reviews: 189,
    phone: '+91 9876543212',
    hours: '7:00 AM - 11:00 PM',
    services: ['Home Delivery', 'Bulk Orders', 'Insurance'],
    operationalScore: 88,
    deliveryTime: '60 mins',
  },
  {
    id: 4,
    name: 'CurePlus Pharmacy',
    address: '321 Pine Rd, Suburb',
    distance: 3.5,
    rating: 4.7,
    reviews: 412,
    phone: '+91 9876543213',
    hours: '8:30 AM - 9:30 PM',
    services: ['Home Delivery', 'Vaccination', 'Lab Services'],
    operationalScore: 94,
    deliveryTime: '90 mins',
  },
];

export default function PharmacyLocator() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDistance, setFilterDistance] = useState(10);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [sortBy, setSortBy] = useState('distance');

  const filteredPharmacies = mockPharmacies
    .filter((pharmacy) => {
      const matchesSearch =
        pharmacy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pharmacy.address.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDistance = pharmacy.distance <= filterDistance;
      return matchesSearch && matchesDistance;
    })
    .sort((a, b) => {
      if (sortBy === 'distance') return a.distance - b.distance;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'delivery') return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      return 0;
    });

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Find Pharmacies Near You
      </Typography>

      {/* Search and Filter Section */}
      <Card sx={{ mb: 3, p: 2 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 2, mb: 2 }}>
          <TextField
            fullWidth
            placeholder="Search pharmacy name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: <LocationOn sx={{ mr: 1, color: '#0ea5a9' }} />,
            }}
          />
          <TextField
            fullWidth
            type="number"
            label="Max Distance (km)"
            value={filterDistance}
            onChange={(e) => setFilterDistance(parseFloat(e.target.value) || 10)}
            variant="outlined"
            size="small"
            inputProps={{ step: 0.5 }}
          />
          <TextField
            fullWidth
            select
            label="Sort By"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            variant="outlined"
            size="small"
            SelectProps={{
              native: true,
            }}
          >
            <option value="distance">Distance</option>
            <option value="rating">Rating</option>
            <option value="delivery">Delivery Time</option>
          </TextField>
        </Box>
      </Card>

      {filteredPharmacies.length === 0 && (
        <Alert severity="info">
          No pharmacies found matching your criteria. Try adjusting your search or distance filter.
        </Alert>
      )}

      {/* Pharmacies List */}
      <Grid container spacing={2}>
        {filteredPharmacies.map((pharmacy) => (
          <Grid item xs={12} key={pharmacy.id}>
            <Card
              sx={{
                p: 2,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: selectedPharmacy?.id === pharmacy.id ? '2px solid #0ea5a9' : '1px solid #e5e7eb',
                '&:hover': {
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                  borderColor: '#0ea5a9',
                },
              }}
              onClick={() => setSelectedPharmacy(pharmacy)}
            >
              <CardContent sx={{ p: 0 }}>
                <Grid container spacing={2} alignItems="flex-start">
                  {/* Pharmacy Info */}
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {pharmacy.name}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <LocationOn sx={{ fontSize: '1.2rem', color: '#0ea5a9' }} />
                      <Typography variant="body2">{pharmacy.address}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Navigation sx={{ fontSize: '1.2rem', color: '#0ea5a9' }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {pharmacy.distance} km away
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Phone sx={{ fontSize: '1.2rem', color: '#0ea5a9' }} />
                      <Typography variant="body2">{pharmacy.phone}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Schedule sx={{ fontSize: '1.2rem', color: '#0ea5a9' }} />
                      <Typography variant="body2">{pharmacy.hours}</Typography>
                    </Box>

                    {/* Services */}
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {pharmacy.services.map((service) => (
                        <Chip key={service} label={service} size="small" variant="outlined" />
                      ))}
                    </Box>
                  </Grid>

                  {/* Stats */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {/* Rating */}
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <Star sx={{ color: '#fbbf24', fontSize: '1.2rem' }} />
                          <Typography sx={{ fontWeight: 600 }}>{pharmacy.rating}</Typography>
                          <Typography variant="caption" color="textSecondary">
                            ({pharmacy.reviews} reviews)
                          </Typography>
                        </Box>
                        <Rating value={pharmacy.rating} readOnly size="small" />
                      </Box>

                      {/* Operational Score */}
                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            Operational Score
                          </Typography>
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            {pharmacy.operationalScore}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={pharmacy.operationalScore}
                          sx={{ borderRadius: 1 }}
                        />
                      </Box>

                      {/* Delivery Time */}
                      <Box sx={{ p: 1.5, backgroundColor: '#f0fdf4', borderRadius: 1 }}>
                        <Typography variant="caption" color="textSecondary" sx={{ display: 'block' }}>
                          Est. Delivery
                        </Typography>
                        <Typography sx={{ fontWeight: 600, color: '#10b981', fontSize: '1.1rem' }}>
                          {pharmacy.deliveryTime}
                        </Typography>
                      </Box>

                      {/* Action Buttons */}
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button
                          variant="outlined"
                          size="small"
                          fullWidth
                          onClick={() => alert('Opening navigation...')}
                        >
                          Directions
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          fullWidth
                          onClick={() => alert('Opening pharmacy profile...')}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Info Box */}
      {filteredPharmacies.length > 0 && (
        <Alert severity="info" sx={{ mt: 3 }}>
          <Info sx={{ mr: 1 }} />
          Showing {filteredPharmacies.length} pharmacies. All pharmacies accept online orders and home delivery.
        </Alert>
      )}
    </Box>
  );
}
