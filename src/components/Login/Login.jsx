import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/farmersmartlogo.png'
import bgImage from '../../assets/login-bg.png'
import {Menu, Visibility, Person} from '@mui/icons-material';
import Footer from '../LandingPage/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
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
                    Home
                </div>
                <div className='mx-4 hover:cursor-pointer'>
                    About
                </div>
                <div className='mx-4 hover:cursor-pointer'>
                    Services
                </div>
                <div className='mx-4 hover:cursor-pointer'>
                    What's New?
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
                        Home
                    </div>
                    <div className='my-2 hover:cursor-pointer'>
                        About
                    </div>
                    <div className='my-2 hover:cursor-pointer'>
                        Services
                    </div>
                    <div className='my-2 hover:cursor-pointer'>
                        What's New?
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
                <Link to='/user'>
                  Log In
                </Link>
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
