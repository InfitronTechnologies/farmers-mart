// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AccountActivation = () => {
//   const navigate = useNavigate();
//   const [otpCode, setOtpCode] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleOtpChange = (e) => setOtpCode(e.target.value);

//   const handleActivation = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const apiUrl = process.env.NODE_ENV === 'production' 
//     ? 'https://ourservicestech.com.ng/farmmart_api/v2/account/account_otp_active'
//     : '/farmmart_api/v2/account/account_otp_active';

//     try {
//       const response = await axios.post(apiUrl,{ code: otpCode });
//       if (response.status === 200) {
//         setSuccess(true);
//         if (response.data.status === 1) {
//         navigate('/select_profile')
//         }
//         setError('');
//       }
//     } catch (error) {
//       console.log(error)
//       setError(error.response?.data?.message || 'Invalid OTP');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-4">Account Activation</h2>
//         {success && <p className="text-green-500">Your account has been activated!</p>}
//         {error && <p className="text-red-500">{error}</p>}
//         <form onSubmit={handleActivation} className="space-y-4">
//           <input
//             type="text"
//             value={otpCode}
//             onChange={handleOtpChange}
//             placeholder="Enter OTP"
//             required
//             className="w-full px-4 py-2 border rounded-md"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-blue-600 text-white px-4 py-2 rounded-md w-full"
//           >
//             {loading ? 'Activating...' : 'Activate Account'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AccountActivation;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bgImage from '../../assets/login-bg.png'

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
      <div className="bg-farmersmartPaleGreen z-10 p-10 rounded-3xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-4xl font-bold text-black mb-4">Account Activation</h2>
        <p className="text-gray-600 text-lg mb-8">Enter the 6-character OTP sent to your email to activate your account.</p>

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
                className="w-12 h-12 text-center border border-farmersmartDarkGreen rounded-lg text-xl focus:outline-none focus:ring-green-950"
                required
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-farmersmartDarkGreen text-white text-xl font-semibold py-3 px-10 rounded-full transition duration-300"
          >
            {loading ? 'Activating...' : 'Activate Account'}
          </button>
        </form>
      </div>
  </div>
  );
};

export default AccountActivation;
