import React, { useState, useEffect } from "react";
import { Sidebar } from "flowbite-react";
import { useProfile } from "../ProfileContext/ProfileContext";
import { Agriculture, Dashboard, Handshake, LocalShipping, Login, Logout, Menu, Person, Person2, ShoppingBag, Storefront, SupportAgent, Forum } from '@mui/icons-material';
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import UserOverview from './UserOverview/UserOverview';
import ProfileOverview from './Profile/ProfileOverview';
import BankDetails from './Profile/BankDetails';
import PasswordReset from './Profile/PasswordReset';
import FarmInfo from './FarmerMenu/FarmInfo';
import FarmerDashboard from "./FarmerMenu/FarmerDashboard";
import ProductForm from "./FarmerMenu/ProductForm";
import AvailableProduce from "./FarmerMenu/AvailableProduce";
import LogisticsDashboard from "./LogisticsMenu/LogisticsDashboard";
import OrderDetails from "./LogisticsMenu/OrdersDetails";
import OrdersPage from "./LogisticsMenu/OrdersPage";
import InsuranceCases from "./LogisticsMenu/InsurnaceCases";
import LogisticsRevenue from "./LogisticsMenu/LogisticsRevenue";
import PartnerDashboard from "./PartnerMenu/PartnerDashboard";
import PartnerServices from "./PartnerMenu/PartnerServices";
import FarmerPartnerMatching from "./PartnerMenu/FarmerPartnerMatching";
import FarmerProfiles from "./ConsumerMenu/FarmersProfile";
import Orders from "./ConsumerMenu/Orders";
import ConsumerDashboard from "./ConsumerMenu/ConsumerDashboard";
import PartnerServiceUpload from "./PartnerMenu/PartnerServiceUpload";
import ForumCategories from "./UserForum/ForumCategories";
import UserForum from './UserForum/UserForum';
import SubcategoryForum from "./UserForum/SubcategoryForum";
import KYC from "./Profile/KYC/KYC";

function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const location = useLocation();
  const {selectedProfiles, userFirstName, userLastName, clearProfile} = useProfile()

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleLogout = () => {
    clearProfile(); // Clears session storage and context state
    navigate('/login'); // Redirect the user to the login page
  };
  
  // useEffect(() => {
  //     if (selectedProfiles.length > 0) {
  //         localStorage.setItem("selectedProfiles", JSON.stringify(selectedProfiles));
  //     } else {
  //         // Fallback to retrieve from localStorage if navigated without state
  //         const storedProfiles = JSON.parse(localStorage.getItem("selectedProfiles"));
  //         if (storedProfiles) {
  //             setSelectedProfiles(storedProfiles);
  //         }
  //     }
  //     console.log("Selected Profiles:", selectedProfiles);
  // }, [selectedProfiles]);

  return (
    <div className="">
      <Menu className="fixed mb-8" onClick={() => setCollapsed(!collapsed)} />
      <div className="flex flex-row">
        <div className={`z-10 ${collapsed ? 'hidden' : 'block'}`}>          
          <Sidebar className="fixed h-screen mt-8" collapsed={collapsed}>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#">
                {userFirstName && userLastName ? (
                `${userFirstName} ${userLastName}!`) : 
                (`Welcome, Guest!`)}
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="/user" icon={Person2}>
                  User Overview
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={Login}>
                  Login History
                </Sidebar.Item>
                <Sidebar.Item href="/marketplace" icon={Storefront}>
                  Marketplace
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>              
               {(selectedProfiles.farmer  == "1")&&(
                <Sidebar.Collapse icon={Agriculture} label="Farmer">
                  <Sidebar.Item href="/user/farm-dashboard">Dashboard </Sidebar.Item>
                  <Sidebar.Item href="/user/farm">Farm Management </Sidebar.Item>
                  <Sidebar.Item href="#">Available Produces </Sidebar.Item>
                  <Sidebar.Item href="#">Orders </Sidebar.Item>
                </Sidebar.Collapse>
                )}
                {(selectedProfiles.buyer  == "1") &&(
                <Sidebar.Collapse icon={ShoppingBag} label="Buyer">
                  <Sidebar.Item href="/user/buyer">Dashboard </Sidebar.Item>
                  <Sidebar.Item href="/user/buyer/orders">Orders </Sidebar.Item>
                  <Sidebar.Item href="/user/buyer/farmers-profile">Farmers Profile </Sidebar.Item>
                </Sidebar.Collapse>
                )}
                {(selectedProfiles.logistic  == "1") &&(
                <Sidebar.Collapse icon={LocalShipping} label="Logistics">
                  <Sidebar.Item href="/user/logistics">Dashboard </Sidebar.Item>
                  <Sidebar.Item href="/user/logistics/orders">Order Management </Sidebar.Item>
                  <Sidebar.Item href="/user/logistics/revenue">Revenue </Sidebar.Item>
                  <Sidebar.Item href="/user/logistics/insurance"> Insurance Cases </Sidebar.Item>
                </Sidebar.Collapse>
                )}
                {(selectedProfiles.partner  == "1") &&(
                <Sidebar.Collapse icon={Handshake} label="Partner">
                  <Sidebar.Item href="/user/partner"> Dashboard </Sidebar.Item>
                  <Sidebar.Item href="/user/partner/services"> Services </Sidebar.Item>
                  <Sidebar.Item href="/user/partner/add-service"> Add Services </Sidebar.Item>
                  <Sidebar.Item href="/user/partner/offers"> Farmer Offers</Sidebar.Item>
                </Sidebar.Collapse>
                )}
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Collapse icon={Person} label="Profile">
                  <Sidebar.Item href="/user/profile"> Overview </Sidebar.Item>
                  <Sidebar.Item href="/user/profile/bank"> Bank Details </Sidebar.Item>
                  <Sidebar.Item href="/user/profile/kyc">KYC</Sidebar.Item>
                  <Sidebar.Item href="/user/password_reset"> Reset Password </Sidebar.Item>
                  <Sidebar.Item href="#"> Profile Picture </Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Item href="#" icon={SupportAgent}>
                  Customer Support
                </Sidebar.Item>
              <Sidebar.Collapse icon={Forum} label='Forum'>
                <Sidebar.Item href="/user/createforum" >Create Forum </Sidebar.Item>
                <Sidebar.Item href="/user/forum" >Your Forums </Sidebar.Item>
              </Sidebar.Collapse>
                <Sidebar.Item href="" onClick={handleLogout} icon={Logout}>
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
            <Route path='/profile/kyc' element={<KYC/>} />
            <Route path='password_reset' element={<PasswordReset/>} />
            <Route path='farm' element={<FarmInfo/>} />
            <Route path='farm-dashboard' element={<FarmerDashboard/>} />
            <Route path="add-product" element={<ProductForm addProduct={addProduct} />} />
            <Route path="available-produce" element={<AvailableProduce products={products} />}/>
            <Route path='logistics' element={<LogisticsDashboard/>} />
            <Route path='logistics/orders' element={<OrdersPage/>} />
            <Route path='logistics/orders/:orderId' element={<OrderDetails />} /> 
            <Route path='logistics/insurance' element={<InsuranceCases/>} /> 
            <Route path='logistics/revenue' element={<LogisticsRevenue/>} /> 
            <Route path='partner/' element={<PartnerDashboard/>} /> 
            <Route path='partner/services' element={<PartnerServices/>} /> 
            <Route path='partner/add-service' element={<PartnerServiceUpload/>} /> 
            <Route path='partner/offers' element={<FarmerPartnerMatching/>} /> 
            <Route path='buyer/' element={<ConsumerDashboard/>} /> 
            <Route path='buyer/orders' element={<Orders/>} /> 
            <Route path='buyer/farmers-profile' element={<FarmerProfiles/>} /> 
            <Route path='createforum' element={<ForumCategories/>} />
            <Route path='createforum/:subcategoryId' element={<SubcategoryForum/> } />
          </Routes>  
        </div>
      </div> 
    </div>
  )
}

export default SideBar
      
     