import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProfile } from '../ProfileContext/ProfileContext';
import axios from 'axios';
import logo from '../../assets/farmersmartlogo.png'
import bgImage from '../../assets/bg-login.png'
import {Menu, Visibility} from '@mui/icons-material';
import Footer from '../LandingPage/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {setSelectedProfiles, setUserId, setUserToken, setUserEmail, setUserFirstName, setUserLastName}  = useProfile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loginData = {
      email,
      password,
    };
  
    const apiUrl = process.env.NODE_ENV === 'production'
      ? 'https://ourservicestech.com.ng/farmmart_api/v2/account/login_account'
      : '/farmmart_api/v2/account/login_account';
  
    try {
      const response = await axios.post(apiUrl, loginData);
  
      if (response.data.status === 1) {
        const { id, users_token, profile, users_email, users_fn, users_ln } = response.data.data;
  
        // Store user information in localStorage
        setUserId(id)
        setUserToken(users_token)
        setUserEmail(users_email)
        setSelectedProfiles(profile)
        setUserFirstName(users_fn)
        setUserLastName(users_ln);

        // Navigate to the user dashboard or home
        navigate('/user', { state: { selectedProfiles: profile } });
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid email or password' || 'Login failed. Please try again.');
    }
  };
  

  return (
    <div>
      <nav className={`fixed justify-between top-0 left-0 w-full z-50  transition-colors duration-300 bg-transparent`}>    
        <div className='py-2 relative w-full'>
          <div className='flex justify-between w-full'>
            <div className='flex flex-1 items-center w-2/5 md:w-1/5'>
              <Link to='/'>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className='hidden lg:flex justify-between w-4/5 space-x-12 items-center mt-4'>
              <div className='flex flex-row text-sm md:ml-12 text-white font-semibold'>
                <div className='mx-4 hover:cursor-pointer'>
                  <Link to='/'>
                    Home
                  </Link>
                </div>
                <div className='mx-4 hover:cursor-pointer'>
                  <Link to='/about'>
                    About
                  </Link>
                </div>
                <div className='mx-4 hover:cursor-pointer'>
                  <Link to='/services'>
                    Services
                  </Link>
                </div>
                <div className='mx-4 hover:cursor-pointer'>
                  <Link to='/updates'>
                    What's New?
                  </Link>
                </div>
              </div>
              <div className='flex flex-row flex-1 justify-end items-center font-semibold mt-4'>
                <div className='mr-4 py-2 px-4 hover:cursor-pointer border-2 text-farmersmartDarkGreen border-farmersmartYellow rounded-3xl md:hover:text-farmersmartGreen'>
                  <Link to='/login'>
                      LOGIN
                  </Link>
                </div>
                <div className='px-4 py-2 border-2 hover:cursor-pointer text-white border-farmersmartDarkGreen bg-farmersmartDarkGreen rounded-3xl
                    md:hover:text-neutral-300'>
                  <Link to='/signup'>
                      <p className=''> SIGN UP</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className='lg:hidden md:flex flex-col justify-end'>
              <Menu onClick={toggleMenu} className="text-white cursor-pointer" />
            </div>
          </div>

        {isMenuOpen && (
          <div className='fixed top-14 right-0 z-20 w-full bg-farmersmartYellow
          flex flex-col justify-center items-center lg:hidden'>
            {/* <div className='hidden lg:flex justify-between w-4/5 space-x-12 items-center'> */}
                <div className='flex flex-col justify-center items-center text-sm text-white font-semibold md:ml-12'>
                  <div className='my-2 hover:cursor-pointer'>
                    <Link to='/'>
                      Home
                    </Link>
                  </div>
                  <div className='my-2 hover:cursor-pointer'>
                    <Link to='/about'>
                      About
                    </Link>
                  </div>
                  <div className='my-2 hover:cursor-pointer'>
                    <Link to='/services'>
                      Services
                    </Link>
                  </div>
                  <div className='my-2 hover:cursor-pointer'>
                    <Link to='/updates'>
                      What's New?
                    </Link>
                  </div>
                </div>
                <div className='flex flex-col items-center '>
                    <div className='my-2 p-2 hover:cursor-pointer font-semibold text-farmersmartDarkGreen rounded-3xl md:hover:text-farmersmartGreen'>
                    <Link to='/login'>
                        LOGIN
                    </Link>
                    </div>
                    <div className='my-2 px-5 py-3 border-2 hover:cursor-pointer font-semibold text-white border-farmersmartGreen bg-farmersmartGreen rounded-3xl
                        md:hover:text-neutral-300'>
                    <Link to='/signup'>
                        <p className=''> SIGN UP</p>
                    </Link>
                    </div>
                </div>
          </div>
        )}
      </div>
      </nav>
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
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span className="absolute inset-y-0 right-1 top-2">
                      <Visibility className="text-[#6D6969] text-sm" />
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
                    className="text-white text-xl w-full font-semibold rounded-full"
                  >
                    Log In
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