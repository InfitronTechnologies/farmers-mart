import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/farmersmartlogo.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-farmersmartDarkGreen`}>    
        <div className='container py-2 relative'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center w-2/5 md:w-1/5'>
              <Link to='/'>
                <img src={logo} alt="" />
              </Link>
            </div>        
              <div className='flex flex-row items-center'>
                  <div className='mr-4 px-5 py-3 border-2 hover:cursor-pointer bg-farmersmartGreen rounded-3xl
                      md:hover:text-neutral-300 text-neutral-200'>
                  <Link to='/signup'>
                      <p className=''> SIGN UP</p>
                  </Link>
                  </div>
              </div>
          </div>
        </div>
      </nav>
      <div className="min-h-screen flex items-center justify-center bg-neutral-200 text-white">
        <div className="w-full max-w-md mt-8 py-12 bg-farmersmartDarkGreen p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 text-gray-900 bg-gray-300 rounded-md focus:outline-none"
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-2 text-gray-900 bg-gray-300 rounded-md focus:outline-none"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-farmersmartOrange text-white font-semibold py-2 px-6 rounded-md"
              >
                  <Link to='/'>
                      Sign In
                  </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
