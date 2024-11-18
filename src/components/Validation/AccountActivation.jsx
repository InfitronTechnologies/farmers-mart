import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bgImage from '../../assets/login-bg.png'
import EastIcon from '@mui/icons-material/East';
import otp from '../../assets/otp.png'

const AccountActivation = () => {
  const navigate = useNavigate();
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

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

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
        backgroundImage: `url(${bgImage})`
      }}>
      </div>
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
  );
};

export default AccountActivation;
