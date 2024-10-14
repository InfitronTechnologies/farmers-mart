import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, DollarSign, Users, Package } from 'lucide-react';
import { Card as MUICard, CardContent as MUICardContent, CardHeader as MUICardHeader, Typography, Button as MUIButton } from '@mui/material';

const performanceData = [
  { month: 'Jan', bookings: 20, revenue: 50000 },
  { month: 'Feb', bookings: 25, revenue: 62500 },
  { month: 'Mar', bookings: 30, revenue: 75000 },
  { month: 'Apr', bookings: 35, revenue: 87500 },
  { month: 'May', bookings: 40, revenue: 100000 },
  { month: 'Jun', bookings: 45, revenue: 112500 },
];

const StatCard = ({ title, value, icon: Icon, description }) => (
  <MUICard>
    <MUICardHeader
      title={<Typography variant="body2">{title}</Typography>}
      action={<Icon className="h-4 w-4 text-gray-500" />}
      className="pb-0"
    />
    <MUICardContent>
      <Typography variant="h5" className="font-bold">{value}</Typography>
      <Typography variant="caption" className="text-gray-500">{description}</Typography>
    </MUICardContent>
  </MUICard>
);

const PartnerDashboard = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Partner Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard title="Total Bookings" value="195" icon={Calendar} description="Last 30 days" />
        <StatCard title="Total Revenue" value="₦487,500" icon={DollarSign} description="Last 30 days" />
        <StatCard title="Active Customers" value="87" icon={Users} description="Unique customers this month" />
        <StatCard title="Services Offered" value="5" icon={Package} description="Active service listings" />
      </div>

      <MUICard className="mb-8">
        <MUICardHeader title={<Typography variant="h6">Performance Overview</Typography>} />
        <MUICardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="bookings" fill="#4f46e5" name="Bookings" />
              <Bar yAxisId="right" dataKey="revenue" fill="#10b981" name="Revenue (₦)" />
            </BarChart>
          </ResponsiveContainer>
        </MUICardContent>
      </MUICard>

      <div className="flex justify-between">
        <MUIButton variant="contained" color="primary">Manage Services</MUIButton>
        <MUIButton variant="outlined" color="primary">Generate Report</MUIButton>
      </div>
    </div>
  );
};

export default PartnerDashboard;
