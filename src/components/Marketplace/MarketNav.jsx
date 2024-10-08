// import React from "react";
// import { Avatar, Dropdown, Navbar } from "flowbite-react";
// import logo from '../../assets/farmersmartlogo.png';
// import { Person } from "@mui/icons-material";


// const MarketNav = () => {
//   return (
//     <Navbar fluid rounded>
//       <Navbar.Brand href="">
//         <img src={logo} className="mr-3" alt="Flowbite React Logo" />
//       </Navbar.Brand>
//       <div className="flex md:order-2">
//         <Dropdown
//           arrowIcon={false}
//           inline
//           label={
//             <Person/>
//             // <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
//           }
//         >
//           <Dropdown.Header>
//             <span className="block text-sm">Bonnie Green</span>
//             <span className="block truncate text-sm font-medium">name@flowbite.com</span>
//           </Dropdown.Header>
//           <Dropdown.Item>Dashboard</Dropdown.Item>
//           <Dropdown.Item>Settings</Dropdown.Item>
//           <Dropdown.Item>Earnings</Dropdown.Item>
//           <Dropdown.Divider />
//           <Dropdown.Item>Sign out</Dropdown.Item>
//         </Dropdown>
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse>
//         <Navbar.Link href="#" active>
//           Home
//         </Navbar.Link>
//         <Navbar.Link href="#">About</Navbar.Link>
//         <Navbar.Link href="#">Services</Navbar.Link>
//         <Navbar.Link href="#">Pricing</Navbar.Link>
//         <Navbar.Link href="#">Contact</Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default MarketNav



import { Navbar, Dropdown } from 'flowbite-react';
import { Search, Person } from '@mui/icons-material'; // MUI Icons
import React from 'react';
import logo from '../../assets/farmersmartlogo.png';

const MarketNav = () => {
  return (
    <Navbar fluid rounded className="bg-[#d4b473] p-4 shadow-md">
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
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className=' flex items-center justify-center'>
              <Person className="text-gray-800 text-2xl cursor-pointer" />
              <span className='my-auto ml-2'>Account</span>
            </div>
        }
        >
          <Dropdown.Header>
            <span className="block text-sm font-semibold">Adam Adam</span>
            <span className="block truncate text-sm font-medium">adamfarm@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default MarketNav;
