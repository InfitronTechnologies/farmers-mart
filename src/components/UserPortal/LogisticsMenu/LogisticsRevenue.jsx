import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Wallet, Truck, DollarSign } from 'lucide-react';
import { Button, Menu, MenuItem, IconButton, Paper, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const revenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
];

const RevenueCard = ({ title, value, icon: Icon, colorClass }) => (
  <Paper elevation={3} className="p-4">
    <div className="flex flex-row items-center justify-between pb-2">
      <Typography variant="subtitle1" className="text-sm font-medium">
        {title}
      </Typography>
      <Icon className={`h-4 w-4 ${colorClass}`} />
    </div>
    <div>
      <Typography variant="h5" className={`font-bold ${colorClass}`}>
        {value}
      </Typography>
    </div>
  </Paper>
);

const LogisticsRevenue = () => {
  const [timeRange, setTimeRange] = useState('This Month');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (range) => {
    setTimeRange(range);
    setAnchorEl(null);
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h4" className="font-bold text-gray-800">
          Logistics Revenue Dashboard
        </Typography>
        <div>
          <Button
            variant="outlined"
            endIcon={<TrendingUp />}
            onClick={handleMenuClick}
          >
            {timeRange}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => handleMenuClose('This Week')}>This Week</MenuItem>
            <MenuItem onClick={() => handleMenuClose('This Month')}>This Month</MenuItem>
            <MenuItem onClick={() => handleMenuClose('This Quarter')}>This Quarter</MenuItem>
            <MenuItem onClick={() => handleMenuClose('This Year')}>This Year</MenuItem>
          </Menu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <RevenueCard
          title="Total Revenue"
          value="₦1,234,567"
          icon={DollarSign}
          colorClass="text-green-600"
        />
        <RevenueCard
          title="Active Orders"
          value="42"
          icon={Truck}
          colorClass="text-blue-600"
        />
        <RevenueCard
          title="Average Order Value"
          value="₦29,394"
          icon={Wallet}
          colorClass="text-purple-600"
        />
        <RevenueCard
          title="Completed Deliveries"
          value="156"
          icon={TrendingUp}
          colorClass="text-orange-600"
        />
      </div>

      <Paper elevation={3} className="p-4">
        <div className="pb-2">
          <Typography variant="h6" className="font-bold">
            Revenue Trend
          </Typography>
        </div>
        <div className="mt-2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Paper>
    </div>
  );
};

export default LogisticsRevenue;
