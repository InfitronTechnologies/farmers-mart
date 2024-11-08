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
import Cart from './components/Marketplace/Cart'
import ProfileSelection from './components/Validation/ProfileSelection'
import ProfileCompletion from './components/Validation/ProfileCompletion'
import AccountActivation from './components/Validation/AccountActivation';


function App() {
  const location = useLocation();
  const [selectedProfiles, setSelectedProfiles] = useState({});
  const [userId, setUserId] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(cartItems.map((item) => 
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };
  
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
        <Route path='/marketplace' element={<Marketplace addToCart={addToCart} cartItems={cartItems}/>}/>
        <Route path='/cart' element={<Cart cartItems={cartItems}/>}/>
        <Route path='/select_profile' element={<ProfileSelection/>}/>
        <Route path="/account-activation" element={<AccountActivation />} />
        <Route path='/products/:id'  element={<ProductDetails/>} 
        
/>
      </Routes>
    </div>
  )
}

export default App