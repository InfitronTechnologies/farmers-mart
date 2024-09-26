import React from 'react';
import { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { Agriculture, Dashboard, Handshake, LocalShipping, Login, Logout, Menu, Person, Person2, Storefront, SupportAgent } from '@mui/icons-material';
import FarmerMenu from './FarmerMenu/FarmerMenu';
import LogisticsMenu from './LogisticsMenu/LogisticsMenu';
import UserOverview from './UserOverview/UserOverview';
import ProfileMenu from './Profile/Profile';
import Partners from './PartnerMenu/Partners';
import ProfileOverview from './Profile/ProfileOverview';
import BankDetails from './Profile/BankDetails';
import PasswordReset from './Profile/PasswordReset';
import FarmInfo from './FarmerMenu/FarmInfo';

function Sidebar() {

    const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar open/close
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 border-green-300
        ${isOpen ? "w-full md:w-1/6" : "w-12"} flex flex-col items-start overflow-y-auto scrollbar-hide`}
      >
        <button
          className="mt-4 ml-2 text-gray-800 focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? <Menu /> : <Menu />}
        </button>

        {isOpen && (
          <div className="flex flex-row w-full items-center mt-6 px-4">
            <div>
              <p className="text-gray-700 font-semibold">Adam</p>
              <p className="text-gray-400 text-sm">Farmer</p>
            </div>
          </div>
        )}

        <div className="mt-8 w-full justify-around">
          <div className="flex items-center text-gray-800 p-4 hover:bg-gray-100 w-full">
              <Link to="/user/overview">
                  <Person2 className="mr-3" />
                  {isOpen && <span className="font-semibold">User Overview</span>}
              </Link>
          </div>
          <div className="flex items-center text-gray-800 p-4 hover:bg-gray-100 w-full">
              <Link to="">
                  <Login className="mr-3" />
                  {isOpen && <span className="font-semibold">Login History</span>}
              </Link>
          </div>
          {/* <div className="flex items-center text-gray-800 p-4 hover:bg-gray-100 w-full">
              <Link to="/">
                  <Dashboard className="mr-3" />
                  {isOpen && <span className="font-semibold">Dashboard</span>}
              </Link>
          </div> */}
          <div className="flex items-center text-gray-800 p-4 hover:bg-gray-100 w-full">
              <Link to="/">
                  <Storefront className="mr-3" />
                  {isOpen && <span className="font-semibold">Marketplace</span>}
              </Link>
          </div>
          <div className="flex items-center text-gray-800 p-4 hover:bg-gray-100 w-full">
            {!isOpen && <Agriculture/>}
            {isOpen && <FarmerMenu />}
          </div>
          <div className="flex items-center text-gray-800 p-4 hover:bg-gray-100 w-full">
            {!isOpen && <LocalShipping/>}
            {isOpen && <LogisticsMenu />}
          </div>
          <div className="flex items-center text-gray-800 p-4 hover:bg-gray-100 w-full">
            {!isOpen && <Handshake/>}
            {isOpen && <Partners/>}
          </div>
          <div className='text-center font-bold text-gray-900 mt-8'>
            {isOpen && 'USER MANAGEMENT'}
          </div>
          <div className="flex items-center text-gray-800 p-4 hover:bg-gray-100 w-full">
            {/* <Link to='user/profile' className='w-full'> */}
              {!isOpen && <Person/>}
              {isOpen && <ProfileMenu/>}
            {/* </Link> */}
          </div>
          <div className="flex items-center text-gray-800 p-4 hover:bg-gray-100 w-full">
              <Link to="/">
                  <SupportAgent className="mr-3" />
                  {isOpen && <span className="font-semibold">Customer Support</span>}
              </Link>
          </div>
          <div className="flex items-center text-gray-800 p-4 hover:bg-gray-100 w-full">
              <Link to="/">
                  <Logout className="mr-3" />
                  {isOpen && <span className="font-semibold">Logout</span>}
              </Link>
          </div>
        </div>
      </div>
      <div className={`flex-1 transition-all duration-300 p-4 ${isOpen ? 'ml-64' : 'ml-12'}`}>
            <Routes>
              <Route path='overview' element={<UserOverview/>} />
              <Route path='profile' element={<ProfileOverview/>} />
              <Route path='/profile/bank' element={<BankDetails/>} />
              <Route path='password_reset' element={<PasswordReset/>} />
              <Route path='farm' element={<FarmInfo/>} />
            </Routes>
      </div>
    </div>
  );
}

export default Sidebar;
