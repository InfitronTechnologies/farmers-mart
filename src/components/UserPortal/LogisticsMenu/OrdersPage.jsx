// OrdersPage.js
import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LogisticsNewOrders from './LogisticsNewOrders';

const orders = [
  { id: '001', customer: 'John Doe', farm: 'Green Acres', status: 'In Transit' },
  { id: '002', customer: 'Jane Smith', farm: 'Sunny Farm', status: 'Pending' },
  { id: '003', customer: 'Bob Johnson', farm: 'Evergreen Farm', status: 'Completed' },
  { id: '004', customer: 'Alice Brown', farm: 'Blue Sky Farms', status: 'In Transit' },
  { id: '005', customer: 'Charlie Adams', farm: 'Silver Valley', status: 'Pending' }
];

const OrdersPage = () => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h1 className="text-xl font-bold mb-4">All Orders</h1>
      <table className="min-w-full table-auto mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Farm</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.customer}</td>
              <td className="px-4 py-2">{order.farm}</td>
              <td className="px-4 py-2">{order.status}</td>
              <td className="px-4 py-2">
                <Link to={`/user/logistics/orders/${order.id}`}>
                  <Button variant="contained" color="primary">View Details</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <LogisticsNewOrders/>
    </div>
  );
};

export default OrdersPage;
