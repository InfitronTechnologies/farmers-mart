import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  Typography, 
  Box,
  Snackbar,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Dummy data for new orders
const initialOrders = [
  { id: 'N001', customer: 'Emily Wilson', farm: 'Sunset Orchards', products: 'Apples, Pears', distance: '15 km' },
  { id: 'N002', customer: 'Michael Chen', farm: 'Green Valley Farms', products: 'Tomatoes, Cucumbers', distance: '8 km' },
  { id: 'N003', customer: 'Sarah Johnson', farm: 'Meadow Creek Dairy', products: 'Milk, Cheese', distance: '22 km' },
  { id: 'N004', customer: 'David Lee', farm: 'Hilltop Vineyard', products: 'Grapes, Wine', distance: '30 km' },
  { id: 'N005', customer: 'Lisa Brown', farm: 'Riverside Poultry', products: 'Eggs, Chicken', distance: '12 km' },
];

const LogisticsNewOrders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const handleClaimOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
    setSnackbar({ open: true, message: `Order ${orderId} claimed successfully!` });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box className="w-full overflow-x-auto p-4">
      <Typography variant="h4" className="text-2xl font-bold mb-4">
        New Orders for Pickup
      </Typography>
      <TableContainer component={Paper} className="border border-gray-200 rounded-lg">
        <Table className="min-w-full">
          <TableHead className="bg-blue-500">
            <TableRow>
              <TableCell className="px-4 py-2 font-bold text-white">Order ID</TableCell>
              <TableCell className="px-4 py-2 font-bold text-white">Customer</TableCell>
              <TableCell className="px-4 py-2 font-bold text-white">Farm</TableCell>
              <TableCell className="px-4 py-2 font-bold text-white">Products</TableCell>
              <TableCell className="px-4 py-2 font-bold text-white">Distance</TableCell>
              <TableCell className="px-4 py-2 font-bold text-white">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-4 py-2">{order.id}</TableCell>
                <TableCell className="px-4 py-2">{order.customer}</TableCell>
                <TableCell className="px-4 py-2">{order.farm}</TableCell>
                <TableCell className="px-4 py-2">{order.products}</TableCell>
                <TableCell className="px-4 py-2">{order.distance}</TableCell>
                <TableCell className="px-4 py-2">
                  <Button 
                    variant="contained" 
                    color="secondary"
                    className="bg-purple-500 text-white hover:bg-purple-600 transition"
                    onClick={() => handleClaimOrder(order.id)}
                  >
                    Claim Order
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {orders.length === 0 && (
        <Typography variant="h6" className="mt-4 text-center">
          No new orders available at the moment.
        </Typography>
      )}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        action={
          <IconButton
            size="small"
            aria-label="close"
            className="text-white"
            onClick={handleCloseSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Box>
  );
};

export default LogisticsNewOrders;
