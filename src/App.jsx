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

function App() {
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
            <Deals/>
            <DirectFromFarm/>
            <JoinUs/>
          </>
        } />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App