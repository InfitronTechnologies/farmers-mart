import React from 'react';
import { Package, Truck, History, User } from 'lucide-react';

const ConsumerDashboard = () => {
  return (
    <div className="space-y-4 mt-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Active Orders */}
        <div className="bg-white border rounded-lg p-4 shadow-md">
          <div className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-sm font-medium">Active Orders</h2>
            <Package className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">3</div>
          <p className="text-xs text-gray-400">1 in transit, 2 recieved</p>
        </div>
        {/* Delivery Status */}
        <div className="bg-white border rounded-lg p-4 shadow-md">
          <div className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-sm font-medium">Pending Order</h2>
            <Truck className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">2</div>
          <p className="text-xs text-gray-400">Next delivery: Tomorrow</p>
        </div>

        {/* Total Spent */}
        <div className="bg-white border rounded-lg p-4 shadow-md">
          <div className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-sm font-medium">Total Spent</h2>
            <History className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">$1,234.56</div>
          <p className="text-xs text-gray-400">Last 30 days</p>
        </div>

        {/* Favorite Farmers */}
        <div className="bg-white border rounded-lg p-4 shadow-md">
          <div className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-sm font-medium">Favorite Farmers</h2>
            <User className="h-4 w-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">5</div>
          <p className="text-xs text-gray-400">Connect with them</p>
        </div>
      </div>
        {/* Recent Orders */}
        <div className="bg-white border rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-medium mb-4">Recent Orders</h2>
            <ul className="space-y-2">
            <li className="flex justify-between">
                <span>Apples (5kg)</span>
                <span className="text-gray-400">$25.00</span>
            </li>
            <li className="flex justify-between">
                <span>Carrots (2kg)</span>
                <span className="text-gray-400">$8.50</span>
            </li>
            <li className="flex justify-between">
                <span>Milk (2L)</span>
                <span className="text-gray-400">$3.75</span>
            </li>
            </ul>
            <button
            className="mt-4 w-full border border-gray-300 p-2 rounded-lg hover:bg-gray-100"
            >
            View All Orders
            </button>
        </div>
    </div>
  );
};

export default ConsumerDashboard;
