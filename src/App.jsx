import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ForgotPassword from './components/Login/ForgotPassword';
import Home from './components/LandingPage/Home';
import Sidebar from './components/UserPortal/Sidebar';
import About from './components/SubPages/About';
import Services from './components/SubPages/Services';
import News from './components/SubPages/News';
import Faq from './components/SubPages/Faq';
import Marketplace from './components/Marketplace/Marketplace';
import ProductDetails from './components/Marketplace/ProductDetails';
import ProfileSelection from './components/AccountValidation/ProfileSelection';
import AccountActivation from './components/AccountValidation/AccountActivation';
import CheckoutPage from './components/Marketplace/Checkout';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import PrivacyAgreementForm from './components/PrivacyPolicy/PrivacyAgreementForm';
import DeliveryRoute from './components/Marketplace/DeliveryRoute';
import PaymentGateway from './components/Marketplace/PaystackPayment';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';

function App() {
  const [selectedProfiles, setSelectedProfiles] = useState({});

  return (
    <div className="font-roboto">
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setSelectedProfiles={setSelectedProfiles} />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/updates" element={<News />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/policyform" element={<PrivacyAgreementForm />} />
        <Route path="/select_profile" element={<ProfileSelection />} />
        <Route path="/account-activation" element={<AccountActivation />} />


        {/* Private Routes - Wrapped Individually */}
        <Route path="/user/*" element={<PrivateRoute><Sidebar selectedProfiles={selectedProfiles} /></PrivateRoute>} />
        <Route path="/marketplace" element={<PrivateRoute><Marketplace /></PrivateRoute>} />
        <Route path="/products/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
        <Route path="/checkout" element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
        <Route path="/delivery-route" element={<PrivateRoute><DeliveryRoute /></PrivateRoute>} />
        <Route path="/payment" element={<PrivateRoute><PaymentGateway /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
