import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md"
            >
                <Link to='/'>
                    Sign In
                </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
