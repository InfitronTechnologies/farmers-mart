import React from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Home from './components/LandingPage/Home'
import Sidebar from './components/UserPortal/Sidebar'
import About from './components/SubPages/About'
import Services from './components/SubPages/Services'
import News from './components/SubPages/News'
import Faq from './components/SubPages/Faq'
import Marketplace from './components/Marketplace/Marketplace'

function App() {
  const location = useLocation();
  
  return (
    <div className='font-roboto'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user/*' element={<Sidebar/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/updates' element={<News/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/marketplace' element={<Marketplace/>}/>
      </Routes>
    </div>
  )
}

export default App