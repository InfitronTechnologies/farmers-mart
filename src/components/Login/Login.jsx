import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/farmersmartlogo.png'
import bgImage from '../../assets/login-bg.png'
import {Menu, Visibility, Person} from '@mui/icons-material';
import Footer from '../LandingPage/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const loginData = {
  //     email,
  //     password,
  //   };

  //   const apiUrl = process.env.NODE_ENV === 'production'
  //     ? 'https://yourProductionUrl.com/farmmart_api/v2/account/login_account'
  //     : '/farmmart_api/v2/account/login_account';

  //   try {
  //     const response = await axios.post(apiUrl, loginData);

  //     // Check if login was successful by status or a field in response
  //     if (response.data.status === 1) {
  //       // Store user ID, token, and profile information in localStorage
  //       const { id, users_token, profile } = response.data.data;
  //       console.log(profile)
        
  //       localStorage.setItem("userId", id);
  //       localStorage.setItem("userToken", users_token);
  //       localStorage.setItem("selectedProfiles", JSON.stringify(profile));

  //       // Navigate to the user dashboard or home
  //       navigate('/user');
  //     } else {
  //       setError('Invalid email or password');
  //     }
  //   } catch (err) {
  //     setError(err.response?.data?.message || 'Login failed. Please try again.');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loginData = {
      email,
      password,
    };
  
    const apiUrl = process.env.NODE_ENV === 'production'
      ? 'https://yourProductionUrl.com/farmmart_api/v2/account/login_account'
      : '/farmmart_api/v2/account/login_account';
  
    try {
      const response = await axios.post(apiUrl, loginData);
  
      if (response.data.status === 1) {
        const { id, users_token, profile } = response.data.data;
  
        // Store user information in localStorage
        localStorage.setItem("userId", id);
        localStorage.setItem("userToken", users_token);
        localStorage.setItem("selectedProfiles", JSON.stringify(profile));


        console.log(localStorage.getItem("selectedProfiles"))
  
        // Navigate to the user dashboard or home
        // navigate('/user', {setSelectedProfiles: profile});
        navigate('/user', { state: { selectedProfiles: profile } });
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };
  

  return (
    <div>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-farmersmartYellow`}>    
        <div className='container py-2 relative md:w-4/5 mx-auto'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center w-2/5 md:w-1/5'>
              <Link to='/'>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className='hidden lg:flex justify-between w-4/5 space-x-12 items-center'>
              <div className='flex flex-row text-sm md:ml-12 text-white font-semibold'>
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
                  <Link to='/faq'>
                    FAQ
                  </Link>
                </div>
                <div className='mx-4 hover:cursor-pointer'>
                  <Link to='/updates'>
                    What's New?
                  </Link>
                </div>
              </div>
              <div className='flex flex-row items-center font-semibold'>
                <div className='mr-4 p-2 hover:cursor-pointer border-2 text-farmersmartDarkGreen border-farmersmartYellow rounded-3xl md:hover:text-farmersmartGreen'>
                  <Link to='/login'>
                      LOGIN
                  </Link>
                </div>
                <div className='mr-4 px-4 py-2 border-2 hover:cursor-pointer text-white border-farmersmartDarkGreen bg-farmersmartDarkGreen rounded-3xl
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
                    <Link to='/faq'>
                      FAQ
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
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
          backgroundImage: `url(${bgImage})`
          }}>
        </div>
        <div className=" relative w-full max-w-md mt-8 py-12 bg-farmersmartPaleGreen p-8 rounded-3xl shadow-lg">
          <h2 className="text-4xl font-extrabold mb-6 text-center text-black">LOGIN</h2>

          {error && (
            <div className="text-center text-red-600 font-semibold my-4">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4 text-center">
              <div className='relative'>
                <input
                  className=" w-full md:w-4/5 px-4 py-2 border-2 border-farmersmartDarkGreen rounded-3xl text-black font-medium bg-white focus:outline-none"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="absolute inset-y-0 right-4 top-2 md:right-16 md:top-2">
                  <Person className='text-black'/>
                </span>
            </div>
            </div>

            {/* Password Input */}
            <div className="mb-6 text-center">
              <div className='relative'>
                <input
                  className="w-full md:w-4/5 px-4 py-2 border-2 border-farmersmartDarkGreen rounded-3xl text-black font-medium bg-white focus:outline-none"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="absolute inset-y-0 right-4 top-2 md:right-16 md:top-2">
                  <Visibility className='text-black'/>
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-farmersmartDarkGreen text-white text-xl font-semibold py-3 px-10 rounded-full"
              >
                  Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
