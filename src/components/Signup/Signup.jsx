import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/farmersmartlogo.png'
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

        navigate('/account-activation');
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
        <div className='container py-2 relative w-full'>
          <div className='flex justify-between w-full'>
            <div className='flex flex-1 items-center w-2/5 md:w-1/5'>
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
  </div>
  );
};

export default Signup;
