import { Navbar, Dropdown } from 'flowbite-react';
import { Search, Person, Menu, AccountCircle } from '@mui/icons-material'; // MUI Icons
import React from 'react';
import logo from '../../assets/farmersmartlogo.png';

const MarketNav = () => {
  return (
    <Navbar fluid rounded className="bg-[#0B2B17] p-4 shadow-md">
      {/* Left Section - Logo */}
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-8 sm:h-10" alt="Farmers Mart Logo" />
      </Navbar.Brand>

      {/* Middle Section - Search Bar */}
      <div className="flex-1 mx-4">
        <div className="relative w-full max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search for product"
            className="w-full h-12 pl-5 pr-10 rounded-full text-gray-700 text-sm md:text-base shadow-md focus:ring-1 focus:ring-green-400 focus:outline-none"
          />
          <Search className="absolute right-4 top-3 text-green-700" />
        </div>
      </div>

      {/* Right Section - Avatar and Dropdown */}
      <div className="flex items-center md:order-2">
        <div className='mx-4'>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <div className=' flex text-white items-center justify-center'>
                <AccountCircle className="text-2xl cursor-pointer" />
              </div>
          }
          >
            <div className='text-[#0B2B17] border-2 border-[#0d4e25] px-6 py-2 rounded-md mx-4 my-2 font-semibold'>
             <Dropdown.Item href='/user'>Dashboard</Dropdown.Item>
            </div>
            <div className='text-[#0B2B17] tracking-wider border-2 border-[#c1e849] bg-[#c1e849] px-6 py-2 rounded-md mx-4 my-2 font-semibold'>
              <Dropdown.Item href='/login'>Log out</Dropdown.Item>
            </div>
          </Dropdown>
        </div>
        <div>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <div className=' flex text-white items-center '>
                <Menu className="text-2xl cursor-pointer" />
              </div>
          }
          >
            <div className='text-[#0B2B17] border-2 border-[#0d4e25] px-6 py-2 rounded-md font-semibold'>
              <Dropdown.Item href='/user/forum'>Farmer's Forum</Dropdown.Item>
            </div>
            <div className='text-[#0B2B17] tracking-wider border-2 border-[#c1e849] bg-[#c1e849] px-6 py-2 rounded-md font-semibold'>
              <Dropdown.Item href='/user/news' className='mx-auto'>News</Dropdown.Item>           
            </div>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
};

export default MarketNav;
