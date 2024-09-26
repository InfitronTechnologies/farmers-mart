import React, { useState } from 'react';
import { ExpandLess, ExpandMore, Person } from '@mui/icons-material';
import { Routes, Route, Link } from 'react-router-dom';

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false); 

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
          <Person className="" />
          <span className="ml-2 font-medium">Profile</span>
        </div>
        {isOpen ? <ExpandLess className="" /> : <ExpandMore className="" />}
      </div>

      {/* Collapsible Menu */}
      {isOpen && (
        <ul className="mt-2 space-y-4 pl-2">
          <Link to='/user/profile'>
            <li className="text-gray-600 cursor-pointer">Overview</li>
          </Link>
          <Link to='/user/profile/bank'>
            <li className="text-gray-600 cursor-pointer">Bank Details</li>
          </Link>
          {/* <li className="text-gray-600 cursor-pointer">Upload Profile Image</li> */}
          <Link to='/user/password_reset'>
            <li className="text-gray-600 cursor-pointer">Reset Password</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default ProfileMenu;
