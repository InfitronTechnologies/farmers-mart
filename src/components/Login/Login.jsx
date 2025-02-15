import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProfile } from '../ProfileContext/ProfileContext';
import axios from 'axios';
import logo from '../../assets/farmersmartlogo.png'
import bgImage from '../../assets/bg-login.png'
import {Menu, Visibility, VisibilityOff} from '@mui/icons-material';
import Footer from '../LandingPage/Footer';
import NavBar from '../LandingPage/NavBar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const {setSelectedProfiles, setUserId, setUserToken, 
        setUserEmail, setUserFirstName, setUserLastName,
        setKycLevel, setPartnerId, setFarmerId,setUserImage, logout}  = useProfile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
  
    const loginData = {
      email,
      password,
    };
    
    try {
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/account/login_account`
      
      const response = await axios.post(apiUrl, loginData);
      if (response.data.status === 1) {
        const { id, users_token, profile, users_email, users_fn, users_ln, kyc_level, app_ids, users_activation, users_images } = response.data.data;
        if (users_activation == 0){
          logout()
          setError('Your account is not active')       
            
        }else{
          const idOfPartner = app_ids.partner
          const idOfFarmer = app_ids.farmer
          // Store user information in localStorage
          setUserId(id)
          setUserToken(users_token)
          setUserEmail(users_email)
          setSelectedProfiles(profile)
          setUserFirstName(users_fn)
          setUserLastName(users_ln)
          setKycLevel(Number(kyc_level));
          setPartnerId(idOfPartner)
          setFarmerId(idOfFarmer)
          setUserImage(users_images)
          // Navigate to the user dashboard or home
          navigate('/user', { state: { selectedProfiles: profile } });
        }
        
      } else {
        setError('Invalid email or password');
        
      }
    } catch (err) {
      console.error('Login error:', err);
      setError("Invalid email or password.")
    } finally{
      setLoading(false)
    }
  };
  

  return (
    <div>
    <NavBar bgColor={'bg-transparent'} />
      <div className="relative flex items-center justify-center bg-neutral-200 text-white py-24 md:py-36">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[#ebf9ab] h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>

        <div className="relative flex flex-col md:flex-row w-full mt-8 px-4 md:px-0">
          <div className="w-full md:w-1/2 my-auto text-center md:text-left md:ml-16">
            <p
              className="text-2xl md:text-3xl tracking-wider font-semibold text-yellow-400"
              style={{ fontFamily: "Montserrat" }}
            >
              Welcome to
            </p>
            <p
              className="text-4xl md:text-6xl tracking-wide font-extrabold mt-2 md:mt-4"
              style={{ fontFamily: "Montserrat" }}
            >
              FarmersMart
            </p>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg w-full md:w-3/5">
              <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6 md:mb-8 text-center text-black">
                Log In
              </h2>

              {error && (
                <div className="text-center text-red-600 font-semibold my-4">
                  {error}
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="mb-4 text-center">
                  <div className="relative">
                    <input
                      className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                      focus:outline-none focus:ring-0 focus:border-2"
                      type="email"
                      id="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="mb-3 text-center">
                  <div className="relative">
                    <input
                      className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                      focus:outline-none focus:ring-0 focus:border-2"
                      type={isVisible ? "text" : "password"}
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span 
                      className="absolute inset-y-0 right-1 top-2"
                      onClick={() => setIsVisible(!isVisible)}
                    >
                      {isVisible ? <VisibilityOff className='text-[#6D6969] font-thin text-sm'/> : <Visibility className='text-[#6D6969] font-thin text-sm'/>}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm mt-2">
                  <div className="text-black tracking-wide mb-2 md:mb-0">
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="rounded-sm border-2 mr-1"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                  </div>
                  <div>
                    <Link to="/forgot_password">
                      <p className="text-farmersmartDarkGreen font-medium">
                        Forgot password?
                      </p>
                    </Link>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-8 bg-farmersmartDarkGreen w-full py-4 rounded-3xl">
                  <button
                    type="submit"
                    disabled={loading}
                    className="text-white text-xl w-full font-semibold rounded-full"
                  >
                    {loading ? "Logging In" : "Log In"}
                  </button>
                </div>

                <div className="mt-8 text-black text-center text-lg">
                  Don’t have an account?{" "}
                  <Link to='/signup' className="font-medium text-yellow-300">Sign up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;