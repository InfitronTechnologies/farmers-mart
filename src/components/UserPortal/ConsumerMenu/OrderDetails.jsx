import React from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Chip,
  Box,
} from "@mui/material";

const OrderDetails = () => {
  const location = useLocation();
  const { order } = location.state;

  const formatCurrency = (amount) => `₦${parseFloat(amount).toLocaleString()}`;

  const getStatusChip = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return <Chip label="Delivered" color="success" />;
      case "returned":
        return <Chip label="Returned" color="error" />;
      default:
        return <Chip label={status} color="warning" />;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 3,
      }}
    >
      <Card sx={{ maxWidth: 500, width: "100%", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
            Order Details
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Order ID:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{order.id}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Customer:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{order.order_username}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Billing Address:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{order.bill_address}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Amount Paid:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" color="primary">
                {formatCurrency(order.amt_paid)}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Charges:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{formatCurrency(order.charges_amt)}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                VAT:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{formatCurrency(order.vat_amt)}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Status:
              </Typography>
            </Grid>
            <Grid item xs={6}>{getStatusChip(order.status)}</Grid>

            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Date:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{order.created_date}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrderDetails;
