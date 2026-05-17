import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Box,
  Typography,
  Button,
  Rating,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  TextField,
  Alert,
} from '@mui/material';
import { Check, Info, ShoppingCart, Receipt } from '@mui/icons-material';

export default function MedicineCard({ medicine, onViewDetails, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(medicine, quantity);
    setDialogOpen(false);
    setQuantity(1);
  };

  const getStockStatus = () => {
    if (medicine.stock > 100) return { label: 'In Stock', color: 'success' };
    if (medicine.stock > 20) return { label: 'Limited', color: 'warning' };
    return { label: 'Low Stock', color: 'error' };
  };

  const stockStatus = getStockStatus();

  return (
    <>
      <Card className="medicine-card" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: 1, pb: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 1 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>
                {medicine.name}
              </Typography>
              <Typography variant="caption" color="textSecondary" sx={{ display: 'block', mb: 0.5 }}>
                {medicine.brand}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mb: 1 }}>
            <Chip label={medicine.dosage} size="small" variant="outlined" sx={{ mr: 0.5 }} />
            <Chip label={medicine.type} size="small" variant="outlined" />
          </Box>

          <Typography variant="caption" color="textSecondary" sx={{ display: 'block', mb: 1 }}>
            {medicine.uses}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Rating value={medicine.rating} readOnly size="small" />
            <Typography variant="caption" color="textSecondary">
              ({medicine.reviews})
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 1 }}>
            <Chip
              icon={
                stockStatus.color === 'success' ? (
                  <Check sx={{ fontSize: '1rem' }} />
                ) : (
                  <Info sx={{ fontSize: '1rem' }} />
                )
              }
              label={stockStatus.label}
              color={stockStatus.color}
              size="small"
              variant="outlined"
            />
            {medicine.requiresPrescription && (
              <Chip
                icon={<Receipt sx={{ fontSize: '1rem' }} />}
                label="Rx Required"
                size="small"
                variant="outlined"
              />
            )}
          </Box>

          <Typography variant="h5" sx={{ color: '#10b981', fontWeight: 700, mt: 1 }}>
            ₹{medicine.price}
          </Typography>
        </CardContent>

        <CardActions sx={{ pt: 0 }}>
          <Button
            size="small"
            variant="text"
            onClick={onViewDetails}
            sx={{ flex: 1, textAlign: 'left' }}
          >
            View Details
          </Button>
          <Button
            size="small"
            variant="contained"
            startIcon={<ShoppingCart />}
            onClick={() => setDialogOpen(true)}
            sx={{ flex: 1 }}
          >
            Add
          </Button>
        </CardActions>
      </Card>

      {/* Add to Cart Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Add {medicine.name} to Cart</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            {medicine.requiresPrescription && (
              <Alert severity="warning" sx={{ mb: 2 }}>
                This medicine requires a valid prescription. Please upload one during checkout.
              </Alert>
            )}
            <TextField
              fullWidth
              type="number"
              label="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              inputProps={{ min: 1, max: medicine.stock }}
              variant="outlined"
              size="small"
            />
            <Typography variant="caption" color="textSecondary" sx={{ mt: 1, display: 'block' }}>
              Available: {medicine.stock} units
            </Typography>
            <Typography sx={{ mt: 2, fontWeight: 600 }}>
              Total: ₹{medicine.price * quantity}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
