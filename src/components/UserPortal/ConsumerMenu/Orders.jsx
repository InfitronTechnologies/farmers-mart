import React, { useState } from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardActions, Avatar, Typography, Button, Badge, Tabs, Tab, Box } from '@mui/material';

const orders = [
  { id: 'ORD001', items: ['Tomatoes', 'Eggs'], total: '₦2,500', status: 'Processing', date: '2024-10-01' },
  { id: 'ORD002', items: ['Milk', 'Corn'], total: '₦1,700', status: 'Shipped', date: '2024-09-28' },
  { id: 'ORD003', items: ['Mangoes'], total: '₦1,500', status: 'Delivered', date: '2024-09-25' },
  { id: 'ORD004', items: ['Tomatoes', 'Milk', 'Eggs'], total: '₦3,800', status: 'Processing', date: '2024-10-02' },
];

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'Processing':
      return <Package className="h-5 w-5 text-yellow-500" />;
    case 'Shipped':
      return <Truck className="h-5 w-5 text-blue-500" />;
    case 'Delivered':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    default:
      return null;
  }
};

const OrderCard = ({ order }) => (
  <Card variant="outlined" sx={{ mb: 4 }}>
    <CardHeader
      avatar={<Avatar>{order.id.slice(-3)}</Avatar>}
      title={<Typography variant="h6">Order {order.id}</Typography>}
      subheader={<Badge color={
        order.status === 'Delivered' ? 'success' :
        order.status === 'Shipped' ? 'info' : 'warning'
      }>
        <StatusIcon status={order.status} />
        <span>{order.status}</span>
      </Badge>}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        Items: {order.items.join(', ')}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Date: {order.date}
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Total: {order.total}
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="outlined" fullWidth>View Details</Button>
    </CardActions>
  </Card>
);

const Orders = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredOrders = orders.filter(order => 
    activeTab === 'all' || order.status.toLowerCase() === activeTab
  );

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h3" gutterBottom>Order Management</Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="order status tabs">
          <Tab label="All Orders" value="all" />
          <Tab label="Processing" value="processing" />
          <Tab label="Shipped" value="shipped" />
          <Tab label="Delivered" value="delivered" />
        </Tabs>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filteredOrders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </Box>

      {filteredOrders.length === 0 && (
        <Typography align="center" color="text.secondary" sx={{ mt: 8 }}>
          No orders found in this category.
        </Typography>
      )}
    </div>
  );
};

export default Orders;
