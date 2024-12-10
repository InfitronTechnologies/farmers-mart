import React, { useState } from 'react';
import axios from 'axios';
import { useProfile } from '../../ProfileContext/ProfileContext';

function PasswordReset() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { userId, userToken, userEmail } = useProfile();  // Get user info from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Prepare data for the API request
    const requestData = {
      users_id: userId,
      email: userEmail,
      users_token: userToken,
      old_password: currentPassword,
      new_password: newPassword
    };

    const apiUrl = process.env.NODE_ENV === 'production'
      ? 'https://ourservicestech.com.ng/farmmart_api/v2/account/reset_password'
      : '/farmmart_api/v2/account/reset_password';

    try {
      const response = await axios.post(apiUrl, requestData, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'charset':'UFT-8'
        }
      });
      console.log(requestData)
      
      if (response.data.status === 1) {
        setSuccess("Password reset successful");
        setError('');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setError("Password reset failed: " + response.data.message);
        setSuccess('');
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setSuccess('');
      console.error("Reset password error:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Password Reset</h2>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        {/* Success Message */}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        
        {/* Current Password */}
        <div className="mb-4">
          <label className="block mb-2">Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter Current Password"
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
            placeholder="Enter New Password"
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
            placeholder="Confirm New Password"
            required
          />
        </div>
        
        {/* Save Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default PasswordReset;
