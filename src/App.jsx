import React from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Home from './components/LandingPage/Home'
import Sidebar from './components/UserPortal/Sidebar'
import UserOverview from './components/UserPortal/UserOverview/UserOverview'

function App() {
  const location = useLocation();
  
  return (
    <div className='font-roboto'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user/*' element={<Sidebar/>}/>
      </Routes>
    </div>
  )
}

export default App