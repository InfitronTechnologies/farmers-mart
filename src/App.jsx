import React, {useEffect, useState} from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import ForgotPassowrd from './components/Login/ForgotPassword'
import Home from './components/LandingPage/Home'
import Sidebar from './components/UserPortal/Sidebar'
import About from './components/SubPages/About'
import Services from './components/SubPages/Services'
import News from './components/SubPages/News'
import Faq from './components/SubPages/Faq'
import Marketplace from './components/Marketplace/Marketplace'
import ProductDetails from './components/Marketplace/ProductDetails'
import ProfileSelection from './components/AccountValidation/ProfileSelection'
import AccountActivation from './components/AccountValidation/AccountActivation';
import CheckoutPage from './components/Marketplace/Checkout'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import PrivacyAgreementForm from './components/PrivacyPolicy/PrivacyAgreementForm'
import DeliveryRoute from './components/Marketplace/DeliveryRoute'
import PaymentGateway from './components/Marketplace/PaystackPayment'
import DeliveryProof from './components/UserPortal/ConsumerMenu/DeliveryProof'


function App() {
  const location = useLocation();
  const [selectedProfiles, setSelectedProfiles] = useState({});
    
  return (
    <div className='font-roboto'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route 
          path='/login' 
          element={<Login setSelectedProfiles={setSelectedProfiles} />}
        />
        <Route 
          path='/user/*' 
          element={<Sidebar selectedProfiles={selectedProfiles} />}
        />
        <Route path='/forgot_password' element={<ForgotPassowrd/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/updates' element={<News/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/marketplace' element={<Marketplace/>}/>
        <Route path='/select_profile' element={<ProfileSelection/>}/>
        <Route path="/account-activation" element={<AccountActivation />} />
        <Route path='/products/:id'  element={<ProductDetails/>} />
        <Route path='/checkout'  element={<CheckoutPage/>} />
        <Route path='/delivery-route'  element={<DeliveryRoute/>} />
        <Route path='/payment'  element={<PaymentGateway/>} />
        <Route path='/policy'  element={<PrivacyPolicy/>} />
        <Route path='/policyform'  element={<PrivacyAgreementForm/>} />
      </Routes>
    </div>
  )
}

export default App