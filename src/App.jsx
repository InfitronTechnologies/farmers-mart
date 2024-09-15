import React from 'react'
import {Routes, Route} from "react-router-dom"
import DealsAds from './components/LandingPage/DealsAds'
import NavBar from './components/LandingPage/NavBar'
import HeroSection from './components/LandingPage/HeroSection'
import WhatWeStandFor from './components/LandingPage/WhatWeStandFor'
import Deals from './components/LandingPage/Deals'
import FarmCategories from './components/LandingPage/FarmCategories'
import DirectFromFarm from './components/LandingPage/DirectFromFarm'
import Footer from './components/LandingPage/Footer'
import JoinUs from './components/LandingPage/JoinUs'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import CustomerProcess from './components/LandingPage/CustomerProcess'
import FarmerProcess from './components/LandingPage/FarmerProcess'


function App() {

  // Assignment
  // Categories> Subcategories> Products
  return (
    <div className='font-roboto'>
      <DealsAds/>
      <NavBar/>    
      <Routes>
        <Route path='/' element={
          <>
            <HeroSection/>
            <WhatWeStandFor/>
            <FarmCategories/>
            <CustomerProcess/>
            <Deals/>
            <FarmerProcess/>
            <DirectFromFarm/>
            <JoinUs/>
          </>
        } />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App