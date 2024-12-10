// ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const requestData = {
      email,
      new_password: newPassword,
    };

    const apiUrl = process.env.NODE_ENV === 'production'
      ? 'https://ourservicestech.com.ng/farmmart_api/v2/account/forget_password'
      : '/farmmart_api/v2/account/forget_password';

    try {
      const response = await axios.post(apiUrl, requestData, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'charset':'UFT-8'
        }
      });

      if (response.status == 200) {
        setSuccess('Password reset successfully. Please log in with your new password.');
        setError('');
        setEmail('');
        setNewPassword('');
        setConfirmPassword('');
        setTimeout(() => {
            navigate('/login')
        }, 300);

      } else {
        setError(response.data.message || 'Password reset failed');
        setSuccess('');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setSuccess('');
      console.error('Forgot password error:', err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        {/* Success Message */}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        
        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* New Password */}
        <div className="mb-4">
          <label className="block mb-2">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter new password"
            required
          />
        </div>
        
        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block mb-2">Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border p-2 w-full"
            placeholder="Confirm new password"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
