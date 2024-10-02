import React from 'react';
import { ShoppingCart, Storefront, History } from '@mui/icons-material';

const AccountStatistics = () => {
  const stats = [
    { title: 'Total Transactions', count: 120, icon: <ShoppingCart /> },
    { title: 'Products Listed', count: 34, icon: <Storefront /> },
    { title: 'Login Count', count: 15, icon: <History /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 bg-white shadow-md rounded-md flex items-center justify-between">
          <div>
            <h4 className="text-lg font-medium">{stat.title}</h4>
            <p className="text-2xl font-bold">{stat.count}</p>
          </div>
          <div className="text-4xl text-gray-400">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default AccountStatistics;
