import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { Agriculture, Dashboard, Handshake, LocalShipping, Login, Logout, Menu, Person, Person2, Storefront, SupportAgent } from '@mui/icons-material';
import { Link, Route, Routes } from "react-router-dom";
import LogisticsMenu from './LogisticsMenu/LogisticsMenu';
import UserOverview from './UserOverview/UserOverview';
import Partners from './PartnerMenu/Partners';
import ProfileOverview from './Profile/ProfileOverview';
import BankDetails from './Profile/BankDetails';
import PasswordReset from './Profile/PasswordReset';
import FarmInfo from './FarmerMenu/FarmInfo';
import FarmerDashboard from "./FarmerMenu/FarmerDashboard";

function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="">
      <Menu className="fixed mb-8" onClick={() => setCollapsed(!collapsed)} />
      <div className="flex flex-row">
        <div className={collapsed ? 'hidden' : 'block'}>          
          <Sidebar className="fixed h-screen mt-8" collapsed={collapsed}>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#">
                  Adam Adam
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="/user" icon={Person2}>
                  User Overview
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={Login}>
                  Login History
                </Sidebar.Item>
                <Sidebar.Item href="/" icon={Storefront}>
                  Marketplace
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>              
                <Sidebar.Collapse icon={Agriculture} label="Farmer">
                  <Sidebar.Item href="/user/farm-dashboard">Dashboard </Sidebar.Item>
                  <Sidebar.Item href="/user/farm">Farm Management </Sidebar.Item>
                  <Sidebar.Item href="#">Available Produces </Sidebar.Item>
                  <Sidebar.Item href="#">Orders </Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Collapse icon={LocalShipping} label="Logistics">
                  <Sidebar.Item href="#">Dashboard </Sidebar.Item>
                  <Sidebar.Item href="#">Order Management </Sidebar.Item>
                  <Sidebar.Item href="#">Revenue </Sidebar.Item>
                  <Sidebar.Item href="#"> Insurance Cases </Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Collapse icon={Handshake} label="Partner">
                  <Sidebar.Item href="#"> Dashboard </Sidebar.Item>
                  <Sidebar.Item href="#"> Progress </Sidebar.Item>
                  <Sidebar.Item href="#"> Reports </Sidebar.Item>
                </Sidebar.Collapse>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Collapse icon={Person} label="Profile">
                  <Sidebar.Item href="/user/profile"> Overview </Sidebar.Item>
                  <Sidebar.Item href="/user/profile/bank"> Bank Details </Sidebar.Item>
                  <Sidebar.Item href="/user/password_reset"> Reset Password </Sidebar.Item>
                  <Sidebar.Item href="#"> Profile Picture </Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Item href="#" icon={SupportAgent}>
                  Customer Support
                </Sidebar.Item>
                <Sidebar.Item href="/" icon={Logout}>
                  Logout
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div> 
        <div className={`flex-1 w-full xl:w-[960px] ${collapsed ? '' : 'sm:ml-64'}`}>
          <Routes>
            <Route path='' element={<UserOverview/>} />
            <Route path='profile' element={<ProfileOverview/>} />
            <Route path='/profile/bank' element={<BankDetails/>} />
            <Route path='password_reset' element={<PasswordReset/>} />
            <Route path='farm' element={<FarmInfo/>} />
            <Route path='farm-dashboard' element={<FarmerDashboard/>} />
          </Routes>  
        </div>
      </div> 
    </div>
  )
}

export default SideBar
      
     