import React, { useState } from 'react';
import { ExpandLess, ExpandMore, LocalShipping } from '@mui/icons-material';

const LogisticsMenu = () => {
  const [isOpen, setIsOpen] = useState(true); // Initially open, like in your screenshot

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-white shadow-md py-2 px-3 rounded-lg">
      <div
        className="flex justify-between items-center cursor-pointer rounded"
        onClick={toggleMenu}
      >
        <div className="flex items-center">
          <LocalShipping className="" />
          <span className="ml-2 font-medium">Logistics</span>
        </div>
        {isOpen ? <ExpandLess className="" /> : <ExpandMore className="" />}
      </div>

      {/* Collapsible Menu */}
      {isOpen && (
        <ul className="mt-2 space-y-2 pl-2">
          <li className="text-gray-600 cursor-pointer">Dashboard</li>
          <li className="text-gray-600 cursor-pointer">Farm Management</li>
          <li className="text-gray-600 cursor-pointer">Available Produces</li>
          <li className="text-gray-600 cursor-pointer">Product Managment</li>
          <li className="text-gray-600 cursor-pointer">Orders</li>
        </ul>
      )}
    </div>
  );
};

export default LogisticsMenu;
