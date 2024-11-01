import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AccountActivation = () => {
  const navigate = useNavigate();
  const [otpCode, setOtpCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleOtpChange = (e) => setOtpCode(e.target.value);

  const handleActivation = async (e) => {
    e.preventDefault();
    setLoading(true);

    const apiUrl = process.env.NODE_ENV === 'production' 
    ? 'https://ourservicestech.com.ng/farmmart_api/v2/account/account_otp_active'
    : '/farmmart_api/v2/account/account_otp_active';

    try {
      const response = await axios.post(apiUrl,{ code: otpCode });
      if (response.status === 200) {
        setSuccess(true);
        if (response.data.status === 1) {
        navigate('/select_profile')
        }
        setError('');
      }
    } catch (error) {
      console.log(error)
      setError(error.response?.data?.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Account Activation</h2>
        {success && <p className="text-green-500">Your account has been activated!</p>}
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleActivation} className="space-y-4">
          <input
            type="text"
            value={otpCode}
            onChange={handleOtpChange}
            placeholder="Enter OTP"
            required
            className="w-full px-4 py-2 border rounded-md"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-md w-full"
          >
            {loading ? 'Activating...' : 'Activate Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountActivation;
