import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/farmersmartlogo.png'
import MenuIcon from '@mui/icons-material/Menu';
import bgImage from '../../assets/login-bg.png'

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


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
       {/* <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-farmersmartDarkGreen`}>    
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
        </nav>  */}

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
              <MenuIcon onClick={toggleMenu} className="text-white cursor-pointer" />
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
          <div className="relative w-full max-w-lg bg-farmersmartPaleGreen p-8 rounded-3xl shadow-lg mt-20 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center text-farmersmartOrange">SIGN UP</h2>

            {/* Form */}
            <form className='text-center'>
              <div className="mb-4">
                {/* <label className='block mb-2' htmlFor="username">
                  Username
                </label> */}
                <input
                  className="w-full md:w-4/5 px-4 py-2 border-2 border-farmersmartDarkGreen rounded-3xl text-gray-300 bg-white focus:outline-none"
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className="mb-4">
                {/* <label className="block mb-2" htmlFor="email">
                  Email
                </label> */}
                <input
                  className="w-full md:w-4/5 px-4 py-2 border-2 border-farmersmartDarkGreen rounded-3xl text-gray-300 bg-white focus:outline-none"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                {/* <label className="block mb-2" htmlFor="password">
                  Password
                </label> */}
                <input
                  className="w-full md:w-4/5 px-4 py-2 border-2 border-farmersmartDarkGreen rounded-3xl text-gray-300 bg-white focus:outline-none"
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
                {/* <label className="block mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label> */}
                <input
                  className={`w-full md:w-4/5 px-4 py-2 border-2 border-farmersmartDarkGreen rounded-3xl text-gray-300 bg-white focus:outline-none 
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
              {/* <div className="mb-6">
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
              </div> */}

              {/* Submit Button */}
              <div className="flex justify-center">
                <Link to='/login'>
                  <button
                    type="submit"
                    className="bg-farmersmartDarkGreen text-white font-semibold py-2 px-6 rounded-3xl mt-8"
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
