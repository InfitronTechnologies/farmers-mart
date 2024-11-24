import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/farmersmartlogo.png'
import otp from '../../assets/otp.png'
import EastIcon from '@mui/icons-material/East';
import {Menu }from '@mui/icons-material';
import bgImage from '../../assets/bg-login.png'
import Footer from '../LandingPage/Footer';
import { EmailOutlined, PersonOutlined, PhoneOutlined, Visibility } from '@mui/icons-material';

const Signup = () => {
  const [formData, setFormData] = useState({
	users_fn 			:  "",
	users_ln 			:  "",
	users_on 			:  "",
	users_phone 		:  "",
	users_email 		:  "",
	users_password  	:  "",
	users_retp_password :  "",
	state_id 			: ""

	})

  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);   
  const [loading, setLoading] = useState(false);
  const [states, setStates] = useState([])
  const [isOtpOverlayVisible, setIsOtpOverlayVisible] = useState(false);
  
  const navigate = useNavigate();  // Hook to navigate between pages
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const apiUrl = process.env.NODE_ENV === 'production' 
    ? 'https://ourservicestech.com.ng/farmmart_api/v2/select_list_state'
    : '/farmmart_api/v2/select_list_state';

    const fetchStates = async () => {
      try {
        const response = await axios.get('https://ourservicestech.com.ng/farmmart_api/v2/select_list_state'); // Replace with actual endpoint
        setStates(response.data.data); // Assuming response contains array of states
      } catch (error) {
        console.error("Error fetching states", error);
      }
    };
    fetchStates();
  }, []);

  //OTP CODE
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);


  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    // Handle normal input for single character
    if (value.length <= 1) {
      const newOtpCode = [...otpCode];
      newOtpCode[index] = value;
      setOtpCode(newOtpCode);

      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otpCode[index] === '' && index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      } else {
        const newOtpCode = [...otpCode];
        newOtpCode[index] = '';
        setOtpCode(newOtpCode);
      }
    }
  };

  const handleActivation = async (e) => {
    e.preventDefault();
    setLoading(true);

    const apiUrl = process.env.NODE_ENV === 'production' 
      ? 'https://ourservicestech.com.ng/farmmart_api/v2/account/account_otp_active'
      : '/farmmart_api/v2/account/account_otp_active';

    try {
      const response = await axios.post(apiUrl, { code: otpCode.join('') });
      if (response.status === 200) {
        setSuccess(true);
        if (response.data.status === 1) {
          navigate('/select_profile');
        }
        setError('');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle password input
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPasswordMatch(password === confirmPassword);
  };
  

  // Function to handle confirm password and check if they match
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === formData.users_password);
    setFormData({ ...formData, users_retp_password: e.target.value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordMatch) {
      setError('Passwords do not match');
      return;
    }

    const apiUrl = process.env.NODE_ENV === 'production' 
      ? 'https://ourservicestech.com.ng/farmmart_api/v2/account/create_account'
      : '/farmmart_api/v2/account/create_account';

    setLoading(true);
    try {
      const response = await axios.post(apiUrl, formData);

      // Extract JSON portion from the response
      const responseDataString = response.data;
      const jsonStartIndex = responseDataString.lastIndexOf('{');
      const jsonResponseString = responseDataString.slice(jsonStartIndex);

      const jsonResponse = JSON.parse(jsonResponseString); // Parse the JSON portion

      if (jsonResponse.status === 1) {
        localStorage.setItem("userId", jsonResponse.users_id);
        localStorage.setItem("userEmail", users_email);
        console.log("User ID:", jsonResponse.users_id);
        setIsOtpOverlayVisible(true);

        // navigate('/account-activation');
      } else {
        setError(jsonResponse.message || 'Signup failed');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
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
            <div className='hidden lg:flex justify-between w-4/5 space-x-12 items-center'>
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
              <div className='flex flex-row flex-1 justify-end items-center font-semibold'>
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

        <div className="relative flex flex-col md:flex-row w-full px-4 md:px-0">
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
          <div className="w-full md:w-1/2 mt-4 md:mt-0 flex">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg w-full md:w-4/5">
              <h2 className="text-4xl font-extrabold mb-6 text-center text-black">Sign Up</h2>

              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-600">Signup successful!</p>}

              {/* Form */}
              <form onSubmit={handleSubmit} className='text-center'>
                <div className="mb-4">
                  <div className='relative'>
                    <input
                      className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                      focus:outline-none focus:ring-0 focus:border-2"
                      type="text"
                      id="users_fn"
                      name="users_fn"
                      placeholder="First Name"
                      value={formData.users_fn }
                      onChange={handleChange}
                      required
                    />
                    <span className="absolute inset-y-0 right-2 top-2">
                      <PersonOutlined className='text-black'/>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className='relative'>
                    <input
                      className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                      focus:outline-none focus:ring-0 focus:border-2"
                      type="text"
                      id="users_ln"
                      name="users_ln"
                      placeholder="Last Name"
                      value={formData.users_ln}
                      onChange={handleChange}
                      required
                    />
                    <span className="absolute inset-y-0 right-2 top-2">
                      <PersonOutlined className='text-black'/>
                    </span>
                  </div>
                </div>

                <div className='flex flex-row'>
                  <div className="mb-4 flex-1 mr-2">
                    <div className='relative'>
                      <input
                        className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                        focus:outline-none focus:ring-0 focus:border-2"
                        type="text"
                        id="users_on"
                        name="users_on"
                        placeholder="Other Name"
                        value={formData.users_on}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4 flex-1">
                    <div className='relative'>
                      <input
                        className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                        focus:outline-none focus:ring-0 focus:border-2"
                        type="tel"
                        id="users_phone"
                        name="users_phone"
                        placeholder="Phone Number"
                        value={formData.users_phone}
                        onChange={handleChange}
                        required
                      />
                      <span className="absolute inset-y-0 right-2 top-2">
                        <PhoneOutlined className='text-[#6D6969]' />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className='relative'>
                    <input
                      className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                      focus:outline-none focus:ring-0 focus:border-2"
                      type="email"
                      id="users_email"
                      name="users_email"
                      placeholder="Email"
                      value={formData.users_email}
                      onChange={handleChange}
                      required
                    />
                    <span className="absolute inset-y-0 right-2 top-2">
                      <EmailOutlined className='text-[#6D6969] font-thin text-sm'/>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className='relative'>
                    <select
                      className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                      focus:outline-none focus:ring-0 focus:border-2"
                      name="stateId"
                      value={formData.stateId}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state.id} value={state.id}>{state.state_name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Password Field */}
                <div className="mb-4">
                  <div className='relative'>
                    <input
                      className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                      focus:outline-none focus:ring-0 focus:border-2"
                      type="password"
                      id="users_password"
                      name="users_password"
                      placeholder="Password"
                      value={formData.users_password}
                      onChange={handleChange}
                      required
                  />
                    <span className="absolute inset-y-0 right-2 top-2">
                      <Visibility className='text-[#6D6969] font-thin text-sm'/>
                    </span>
                  </div>

                </div>

                {/* Confirm Password Field */}
                <div className="mb-4">
                  <div className='relative'>
                    <input
                      className={`w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                      focus:outline-none focus:ring-0 focus:border-2 
                        ${passwordMatch === false ? 'border-2 border-red-600' : ''} 
                        ${passwordMatch === true ? 'border-2 border-green-600' : ''}`}
                      type="password"
                      id="users_retp_password"
                      placeholder="Confirm password"
                      value={formData.users_retp_password}
                      onChange={handleConfirmPasswordChange}
                      required
                    />
                    <span className="absolute inset-y-0 right-2 top-2">
                      <Visibility className='text-[#6D6969] font-thin text-sm'/>
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-8 bg-farmersmartDarkGreen w-full py-4 rounded-3xl">
                  <button
                    type="submit"
                    className="text-white text-xl w-full font-semibold rounded-full"
                    disabled={!passwordMatch || loading}  // Disable button during loading or if passwords don't match
                  >
                    {loading ? 'Signing Up...' : 'Continue'}
                  </button>                
                </div>
                <div className="mt-4 text-black text-center text-lg">
                  Have an account?{" "}
                  <Link to='/login' className="font-medium text-yellow-300">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
    <Footer/>

    {isOtpOverlayVisible && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white z-10 p-10 rounded-3xl shadow-lg w-full max-w-md text-center">
        <div className=' w-full'>
          <img 
          src={otp}
          alt=""
          className='mx-auto w-20'  
        />
        </div>
        <p className="text-gray-600 mx-auto text-base w-2/3 mt-6 mb-8">Please enter the OTP sent to your email</p>

        {success && <p className="text-green-600 font-semibold">Your account has been activated!</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleActivation} className="space-y-6">
          <div className="flex justify-between mb-4">
            {otpCode.map((_, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={otpCode[index]}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength="1"
                className="w-12 h-12 text-center border-2 border-farmersmartDarkGreen rounded-lg text-xl 
                          focus:outline-none focus:border-3 focus:border-farmersmartDarkGreen focus:ring-0 
                          shadow-md shadow-gray-400"
                required
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="relative bg-farmersmartDarkGreen text-white text-xl font-semibold 
            py-3 px-10 rounded-full transition duration-300 w-4/5 mx-auto"
          >
            {loading ? 'Verifying...' : 'Verify'}
            <EastIcon className='absolute right-10'/>
          </button>
        </form>
      </div>
      </div>
      )}

  </div>
  );
};

export default Signup;
