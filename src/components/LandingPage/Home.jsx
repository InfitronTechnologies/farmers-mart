import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import WhatWeStandFor from './WhatWeStandFor'
import Deals from './Deals'
import UserCount from './UserCount'
import DirectFromFarm from './DirectFromFarm'
import Footer from './Footer'
import JoinUs from './JoinUs'
import CustomerProcess from './CustomerProcess'
import FarmerProcess from './FarmerProcess'
import Assistance from './Assistance'

function Home() {
  return (
    <div className=''>
        <NavBar/>   
        <HeroSection/>
        <WhatWeStandFor/>
        <Deals/>
        <UserCount/>
        {/* <CustomerProcess/> */}
        <Assistance/>
        {/* <FarmerProcess/> */}
        <DirectFromFarm/>
        <JoinUs/>
        <Footer/>
    </div>
  )
}

export default Home