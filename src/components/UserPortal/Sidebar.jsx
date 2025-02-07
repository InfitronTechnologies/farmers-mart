import React, { useState, useEffect } from "react";
import { Sidebar } from "flowbite-react";
import { useProfile } from "../ProfileContext/ProfileContext";
import { Agriculture, Dashboard, Handshake, LocalShipping, Login, Logout, Menu, Person, Person2, ShoppingBag, Storefront, SupportAgent, Forum, Newspaper, AccountBalanceWallet } from '@mui/icons-material';
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
import OrdersPage from "./LogisticsMenu/OrdersPage";
import InsuranceCases from "./LogisticsMenu/InsurnaceCases";
import LogisticsRevenue from "./LogisticsMenu/LogisticsRevenue";
import PartnerDashboard from "./PartnerMenu/PartnerDashboard";
import PartnerServices from "./PartnerMenu/PartnerAvailableProduct.jsx";
import FarmerPartnerMatching from "./PartnerMenu/FarmerPartnerMatching";
import FarmerProfiles from "./ConsumerMenu/FarmersProfile";
import Orders from "./ConsumerMenu/Orders";
import ConsumerDashboard from "./ConsumerMenu/ConsumerDashboard";
import PartnerProduct from "./PartnerMenu/PartnerProduct";
import ForumCategories from "./UserForum/ForumCategories";
import Forums from './UserForum/Forums';
import ForumData from './UserForum/ForumData'
import SubcategoryForum from "./UserForum/SubcategoryForum";
import KYC from "./Profile/KYC/KYC";
import NewsCategories from "./News/NewsCategories";
import NewsSubcategory from "./News/NewsSubcategory";
import AllNews from "./News/AllNews";
import NewsData from "./News/NewsData";
import PartnerAvailableProduce from "./PartnerMenu/PartnerAvailableProduct.jsx";
import FarmerProductDetails from './FarmerMenu/FarmerProductDetails'
import PartnerProductDetails from "./PartnerMenu/PartnerProductDetails.jsx";
import DeliveryProof from "./ConsumerMenu/DeliveryProof.jsx";
import OrderDetails from "./ConsumerMenu/OrderDetails.jsx";
import Wallet from "./Wallet/Wallet.jsx";



function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const location = useLocation();
  const {selectedProfiles, userFirstName, userLastName, logout, kycLevel} = useProfile()

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleLogout = () => {
    logout(); // Redirect the user to the login page
  };
  
  return (
    <div className="">
      <Menu className="fixed mb-8" onClick={() => setCollapsed(!collapsed)} />
      <div className="flex flex-row">
        <div className={`z-10 ${collapsed ? 'hidden' : 'block'} text-xs`}>          
          <Sidebar className="fixed h-screen mt-8" collapsed={collapsed}>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#">
                {userFirstName && userLastName ? (
                `${userFirstName} ${userLastName}!`) : 
                (`Welcome, Guest!`)}
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              {(kycLevel >= 2) &&(
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="/user" icon={Person2}>
                    User Overview
                  </Sidebar.Item>
                  {/* <Sidebar.Item href="#" icon={Login}>
                    Login History
                  </Sidebar.Item> */}
                  <Sidebar.Item href="/user/wallet" icon={AccountBalanceWallet}>
                    Wallet
                  </Sidebar.Item>
                  <Sidebar.Item href="/marketplace" icon={Storefront}>
                    Marketplace
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              )}
              {(kycLevel >= 2) &&(
                <Sidebar.ItemGroup>              
                {(selectedProfiles.farmer  == "1")&&(
                  <Sidebar.Collapse icon={Agriculture} label="Farmer">
                    {/* <Sidebar.Item href="/user/farm-dashboard">Dashboard </Sidebar.Item> */}
                    <Sidebar.Item href="/user/farm">Farm Management </Sidebar.Item>
                    <Sidebar.Item href="/user/my-products">Available Produces </Sidebar.Item>
                    {/* <Sidebar.Item href="#">Orders </Sidebar.Item> */}
                  </Sidebar.Collapse>
                  )}
                  {(selectedProfiles.buyer  == "1") &&(
                  <Sidebar.Collapse icon={ShoppingBag} label="Buyer">
                    {/* <Sidebar.Item href="/user/buyer">Dashboard </Sidebar.Item> */}
                    <Sidebar.Item href="/user/buyer/orders">Orders </Sidebar.Item>
                    {/* <Sidebar.Item href="/user/buyer/farmers-profile">Farmers Profile </Sidebar.Item> */}
                  </Sidebar.Collapse>
                  )}
                  {(selectedProfiles.logistic  == "1") &&(
                  <Sidebar.Collapse icon={LocalShipping} label="Logistics">
                    {/* <Sidebar.Item href="/user/logistics">Dashboard </Sidebar.Item>
                    <Sidebar.Item href="/user/logistics/orders">Order Management </Sidebar.Item>
                    <Sidebar.Item href="/user/logistics/revenue">Revenue </Sidebar.Item>
                    <Sidebar.Item href="/user/logistics/insurance"> Insurance Cases </Sidebar.Item> */}
                  </Sidebar.Collapse>
                  )}
                  {(selectedProfiles.partner  == "1") &&(
                  <Sidebar.Collapse icon={Handshake} label="Partner">
                    <Sidebar.Item href="/user/partner"> Dashboard </Sidebar.Item>
                    {/* <Sidebar.Item href="/user/partner/services"> Services </Sidebar.Item> */}
                    <Sidebar.Item href="/user/partner/add-service"> Add Services </Sidebar.Item>
                    {/* <Sidebar.Item href="/user/partner/offers"> Farmer Offers</Sidebar.Item> */}
                  </Sidebar.Collapse>
                  )}
                </Sidebar.ItemGroup>
              )}  
              <Sidebar.ItemGroup>
                <Sidebar.Collapse icon={Person} label="Profile">
                {/* {(kycLevel >= 2) &&(<Sidebar.Item href="/user/profile"> Overview </Sidebar.Item>)} */}
                {/* {(kycLevel >= 2) &&(<Sidebar.Item href="/user/profile/bank"> Bank Details </Sidebar.Item>)} */}
                <Sidebar.Item href="/user/profile/kyc">KYC</Sidebar.Item>
                {(kycLevel >= 2) &&(<Sidebar.Item href="/user/password_reset"> Reset Password </Sidebar.Item>)}
                {/* {(kycLevel >= 2) &&(<Sidebar.Item href="#"> Profile Picture </Sidebar.Item>)} */}
                </Sidebar.Collapse>
                {(kycLevel >= 2) &&(
                  <div>
                    {/* <Sidebar.Item href="#" icon={SupportAgent}>
                      Customer Support
                    </Sidebar.Item> */}
                    <Sidebar.Collapse icon={Forum} label='Forum'>
                      <Sidebar.Item href="/user/createforum" >Create Forum </Sidebar.Item>
                      <Sidebar.Item href="/user/forums" >Your Forums </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={Newspaper} label='News'>
                      <Sidebar.Item href="/user/create-news" >Create News </Sidebar.Item>
                      <Sidebar.Item href="/user/news" >Your News </Sidebar.Item>
                    </Sidebar.Collapse>
                  </div>
                )}
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
            <Route path="my-products" element={<AvailableProduce products={products} />}/>
            <Route path='logistics' element={<LogisticsDashboard/>} />
            <Route path='logistics/orders' element={<OrdersPage/>} />
            <Route path='logistics/insurance' element={<InsuranceCases/>} /> 
            <Route path='logistics/revenue' element={<LogisticsRevenue/>} /> 
            <Route path='partner/' element={<PartnerDashboard/>} /> 
            <Route path='partner/services' element={<PartnerAvailableProduce/>} /> 
            <Route path='partner/add-service' element={<PartnerProduct/>} /> 
            <Route path='partner/offers' element={<FarmerPartnerMatching/>} /> 
            <Route path='buyer/' element={<ConsumerDashboard/>} /> 
            <Route path='buyer/orders' element={<Orders/>} /> 
            <Route path='buyer/orders/pod'  element={<DeliveryProof/>} />
            <Route path='buyer/orders/details'  element={<OrderDetails/>} />
            <Route path='buyer/farmers-profile' element={<FarmerProfiles/>} /> 
            <Route path='createforum' element={<ForumCategories/>} />
            <Route path='createforum/:subcategoryId' element={<SubcategoryForum/> } />
            <Route path='forums' element={<Forums/>} />
            <Route path='forums/:forumId' element={<ForumData/>} />
            <Route path='create-news' element={<NewsCategories/>} />
            <Route path='create-news/:subcategoryId' element={<NewsSubcategory/>} />
            <Route path='news' element={<AllNews/>} />
            <Route path='news/:newsId' element={<NewsData/>} />
            <Route path='/my-products/:id'  element={<FarmerProductDetails/> } />
            <Route path='partner/services/:id'  element={<PartnerProductDetails/> } />
            <Route path='wallet'  element={<Wallet/>} />
          </Routes>  
        </div>
      </div> 
    </div>
  )
}

export default SideBar
      
     