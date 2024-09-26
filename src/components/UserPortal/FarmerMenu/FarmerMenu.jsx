import React, { useState } from 'react';
import { ExpandLess, ExpandMore, Agriculture } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const FarmerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-white shadow-md py-2 px-3 rounded-lg">
      <div
        className="flex justify-between items-center cursor-pointer rounded mb-4"
        onClick={toggleMenu}
      >
        <div className="flex items-center">
          <Agriculture className="" />
          <span className="ml-2 font-medium">Farmer</span>
        </div>
        {isOpen ? <ExpandLess className="" /> : <ExpandMore className="" />}
      </div>

      {/* Collapsible Menu */}
      {isOpen && (
        <ul className="mt-2 space-y-4 pl-2">
          <li className="text-gray-600 cursor-pointer">Dashboard</li>
          <Link to='/user/farm'>
            <li className="text-gray-600 cursor-pointer">Farm Management</li>
          </Link>
          <li className="text-gray-600 cursor-pointer">Available Produces</li>
          <li className="text-gray-600 cursor-pointer">Product Managment</li>
          <li className="text-gray-600 cursor-pointer">Orders</li>
        </ul>
      )}
    </div>
  );
};

export default FarmerMenu;
