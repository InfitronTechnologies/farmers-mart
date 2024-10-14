import React from 'react';
import { Button } from '@mui/material';
import DeliveryIcon from '@mui/icons-material/LocalShipping';
import { useParams } from 'react-router-dom';

const orders = [
  { id: '001', customer: 'John Doe', farm: 'Green Acres', status: 'In Transit' },
  { id: '002', customer: 'Jane Smith', farm: 'Sunny Farm', status: 'Pending' },
  { id: '003', customer: 'Bob Johnson', farm: 'Evergreen Farm', status: 'Completed' },
  { id: '004', customer: 'Alice Brown', farm: 'Blue Sky Farms', status: 'In Transit' },
  { id: '005', customer: 'Charlie Adams', farm: 'Silver Valley', status: 'Pending' }
];

const OrderDetails = () => {
  const { orderId } = useParams();
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    return <p className="text-center text-red-500 font-semibold">Order not found</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 my-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Order Details</h2>

      <div className="text-gray-700 space-y-2">
        <p><span className="font-semibold">Order ID:</span> {order.id}</p>
        <p><span className="font-semibold">Customer:</span> {order.customer}</p>
        <p><span className="font-semibold">Farm:</span> {order.farm}</p>
        <p><span className="font-semibold">Status:</span> 
          <span className={`ml-2 py-1 px-2 rounded-lg text-white ${order.status === 'In Transit' ? 'bg-yellow-500' : order.status === 'Pending' ? 'bg-red-500' : 'bg-green-500'}`}>
            {order.status}
          </span>
        </p>
      </div>

      {/* Show button only if order status is "Pending" */}
      {order.status === 'Pending' && (
        <div className="mt-6 flex justify-center">
          <Button variant="contained" color="primary" startIcon={<DeliveryIcon />}>
            Assign Transport
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
