import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/farmersmartlogo.png'

const Signup = () => {
  const [profiles, setProfiles] = useState({
    Farmer: false,
    Consumer: false,
    Logistics: false,
    Partner: false,
  });
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(null);

  // Function to handle checkbox change
  const handleProfileChange = (e) => {
    const { name, checked } = e.target;
    setProfiles({ ...profiles, [name]: checked });
  };

  // Function to handle password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle confirm password and check if they match
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
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
                    <Link to='/login'>
                      <p className=''> SIGN IN</p>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </nav> 
        <div className="min-h-screen flex items-center bg-neutral-200 justify-center">
          <div className="w-full max-w-lg bg-farmersmartDarkGreen p-8 rounded-lg shadow-lg mt-20 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

            {/* Form */}
            <form>
              <div className="mb-4">
                <label className='block mb-2' htmlFor="username">
                  Username
                </label>
                <input
                  className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none"
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label className="block mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              {/* Confirm Password Field */}
              <div className="mb-4">
                <label className="block mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className={`w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none 
                    ${passwordMatch === false ? 'border-2 border-red-600' : ''} 
                    ${passwordMatch === true ? 'border-2 border-green-600' : ''}`}
                  type="password"
                  id="confirmPassword"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
              </div>

              {/* Profile Checkboxes */}
              <div className="mb-6">
                <p className="block mb-2">Choose your profile(s):</p>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Farmer"
                      checked={profiles.Farmer}
                      onChange={handleProfileChange}
                      className="form-checkbox text-blue-600"
                    />
                    <span className="ml-2">Farmer</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Consumer"
                      checked={profiles.Consumer}
                      onChange={handleProfileChange}
                      className="form-checkbox text-blue-600"
                    />
                    <span className="ml-2">Consumer</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Logistics"
                      checked={profiles.Logistics}
                      onChange={handleProfileChange}
                      className="form-checkbox text-blue-600"
                    />
                    <span className="ml-2">Logistics</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="Partner"
                      checked={profiles.Partner}
                      onChange={handleProfileChange}
                      className="form-checkbox text-farmersmartLightGreen"
                    />
                    <span className="ml-2">Partner</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Link to='/login'>
                  <button
                    type="submit"
                    className="bg-farmersmartOrange text-white font-semibold py-2 px-6 rounded-md"
                    disabled={passwordMatch === false}
                  >
                    Sign Up
                  </button>
                </Link>
                
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Signup;
