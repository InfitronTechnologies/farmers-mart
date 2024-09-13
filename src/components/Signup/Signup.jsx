// import React, { useState } from 'react';

// const Signup = () => {
//   const [profiles, setProfiles] = useState({
//     Farmer: false,
//     Consumer: false,
//     Logistics: false,
//     Partner: false,
//   });

//   // Function to handle checkbox change
//   const handleProfileChange = (e) => {
//     const { name, checked } = e.target;
//     setProfiles({ ...profiles, [name]: checked });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
//       <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

//         {/* Form */}
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-400 mb-2" htmlFor="username">
//               Username
//             </label>
//             <input
//               className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none"
//               type="text"
//               id="username"
//               placeholder="Enter your username"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-400 mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none"
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-400 mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none"
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {/* Profile Checkboxes */}
//           <div className="mb-6">
//             <p className="block text-gray-400 mb-2">Choose your profile(s):</p>
//             <div className="flex flex-wrap gap-4">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="Farmer"
//                   checked={profiles.Farmer}
//                   onChange={handleProfileChange}
//                   className="form-checkbox text-blue-600"
//                 />
//                 <span className="ml-2">Farmer</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="Consumer"
//                   checked={profiles.Consumer}
//                   onChange={handleProfileChange}
//                   className="form-checkbox text-blue-600"
//                 />
//                 <span className="ml-2">Consumer</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="Logistics"
//                   checked={profiles.Logistics}
//                   onChange={handleProfileChange}
//                   className="form-checkbox text-blue-600"
//                 />
//                 <span className="ml-2">Logistics</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="Partner"
//                   checked={profiles.Partner}
//                   onChange={handleProfileChange}
//                   className="form-checkbox text-blue-600"
//                 />
//                 <span className="ml-2">Partner</span>
//               </label>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md"
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';

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
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none"
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none"
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
            <label className="block text-gray-400 mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className={`w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none 
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
          <div className="mb-6">
            <p className="block text-gray-400 mb-2">Choose your profile(s):</p>
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
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2">Partner</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md"
              disabled={passwordMatch === false}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
