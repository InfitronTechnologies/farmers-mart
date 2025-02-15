import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP, Step 3: New Password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usersId, setUsersId] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const apiUrl =`${import.meta.env.VITE_API_BASE_URL}/account`

  // Step 1: Send OTP to Email
  const handleSendOtp = async () => {
    try {
      const response = await axios.post(`${apiUrl}/select_by_email_forget_password`, { email });

      if (response.status === 200) {
        toast.success("OTP sent to your email!");
        setStep(2);
      } else {
        toast.error(response.data.message || "Failed to send OTP.");
      }
    } catch (error) {
      toast.error("Error sending OTP. Please try again.");
      console.error("Send OTP error:", error);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(`${apiUrl}/select_by_forget_otp`, { otp });

      if (response.status === 200) {
        console.log(response)
        toast.success("OTP verified! Set your new password.");
        setToken(response.data.data.token);
        setUsersId(response.data.data.users_id);
        setStep(3);
      } else {
        toast.error(response.data.message || "Invalid OTP.");
      }
    } catch (error) {
      toast.error("Error verifying OTP.");
      console.error("Verify OTP error:", error);
    }
  };

  // Step 3: Reset Password
  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/forget_new_password`, {
        new_password: newPassword,
        confirm_password: confirmPassword,
        token: token,
        users_id: usersId,
      });

      console.log(response)

      if (response.status === 200) {
        toast.success("Password reset successfully! Redirecting...");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        toast.error(response.data.message || "Password reset failed.");
      }
    } catch (error) {
      toast.error("Error resetting password.");
      console.error("Reset password error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {step === 1 ? "Forgot Password" : step === 2 ? "Enter OTP" : "Reset Password"}
        </h2>

        {/* Step 1: Enter Email */}
        {step === 1 && (
          <div>
            <label className="block mb-2 text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your email"
              required
            />
            <button
              onClick={handleSendOtp}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Send OTP
            </button>
          </div>
        )}

        {/* Step 2: Enter OTP */}
        {step === 2 && (
          <div>
            <label className="block mb-2 text-gray-600">OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter OTP"
              required
            />
            <button
              onClick={handleVerifyOtp}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Verify OTP
            </button>
          </div>
        )}

        {/* Step 3: Reset Password */}
        {step === 3 && (
          <div>
            <label className="block mb-2 text-gray-600">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter new password"
              required
            />
            <label className="block mt-4 mb-2 text-gray-600">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Confirm new password"
              required
            />
            <button
              onClick={handleResetPassword}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Reset Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
