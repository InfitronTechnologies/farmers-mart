import { Navbar, Dropdown } from 'flowbite-react';
import { Search, Person, Menu, AccountCircle } from '@mui/icons-material'; // MUI Icons
import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/farmersmartlogo.png';
import SearchBar from './SearchBar';
import { useProfile } from '../ProfileContext/ProfileContext';
import { useNavigate } from 'react-router-dom';

const MarketNav = ({ setSearchResults }) => {
  const { logout, userToken } = useProfile()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
  }

  return (
    <Navbar fluid rounded className="bg-[#0B2B17] p-4 shadow-md">
      {/* Left Section - Logo */}
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-8 sm:h-10" alt="Farmers Mart Logo" />
      </Navbar.Brand>

      {/* Middle Section - Search Bar */}
      <div className="flex-1 mx-4">
        <SearchBar setSearchResults={setSearchResults} />
      </div>

      {userToken ?
        < div className="flex items-center md:order-2">
          <div className="mx-4">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <div className="flex text-white items-center justify-center">
                  <AccountCircle className="text-2xl cursor-pointer" />
                </div>
              }
            >
              <div className="text-[#0B2B17] border-2 border-[#0d4e25] px-6 py-2 rounded-md mx-4 my-2 font-semibold">
                <Dropdown.Item href="/user">Dashboard</Dropdown.Item>
              </div>
              <div onClick={handleLogout} className="text-[#0B2B17] tracking-wider border-2 border-[#c1e849] bg-[#c1e849] px-6 py-2 rounded-md mx-4 my-2 font-semibold">
                <Dropdown.Item href=''>Log out</Dropdown.Item>
              </div>
            </Dropdown>
          </div>
          <div>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <div className="flex text-white items-center">
                  <Menu className="text-2xl cursor-pointer" />
                </div>
              }
            >
              <div className="text-[#0B2B17] border-2 border-[#0d4e25] px-6 py-2 rounded-md font-semibold">
                <Dropdown.Item href="/user/forums">Farmer's Forum</Dropdown.Item>
              </div>
              <div className="text-[#0B2B17] tracking-wider border-2 border-[#c1e849] bg-[#c1e849] px-6 py-2 rounded-md font-semibold">
                <Dropdown.Item href="/user/news" className="mx-auto">
                  News
                </Dropdown.Item>
              </div>
            </Dropdown>
          </div>
        </div>
          :
        <div>
          <button 
            onClick={() => navigate('/login')}
            className='text-[#0B2B17] tracking-wider font-semibold py-2 px-4 rounded-lg border-[#c1e849] bg-[#c1e849]'
          >
            Login
          </button>
        </div>
      }
    </Navbar >
  );
};

export default MarketNav;
