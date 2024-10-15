import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import {Map, Report} from '@mui/icons-material';

const LogisticsDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Logistics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Orders Overview */}
        <div className="bg-white p-4 shadow rounded-md">
          <h2 className="text-lg font-semibold mb-2">Current Orders</h2>
          <p>Orders in transit: 5</p>
          <p>Orders pending: 3</p>
          <Link to="/user/logistics/orders" className="text-blue-500">View All Orders</Link>
        </div>

        {/* Logistics Partners */}
        <div className="bg-white p-4 shadow rounded-md">
          <h2 className="text-lg font-semibold mb-2">Logistics Partners</h2>
          <p>Available Partners: 10</p>
          <Link to="/logistics-partners" className="text-blue-500">Manage Partners</Link>
        </div>

        {/* Vehicle Tracking */}
        <div className="bg-white p-4 shadow rounded-md">
          <h2 className="text-lg font-semibold mb-2">Order Tracking</h2>
          <Button variant="contained" startIcon={<Map/>} className="w-full">
            Track Deliveries
          </Button>
        </div>
      </div>
      
      {/* Reports Section */}
      <div className="mt-6">
        <Button variant="outlined" startIcon={<Report/>} className="w-full">
          Generate Reports
        </Button>
      </div>
    </div>
  );
};

export default LogisticsDashboard;
