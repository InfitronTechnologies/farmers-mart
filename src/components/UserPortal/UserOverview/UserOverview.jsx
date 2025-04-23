import React, { useEffect, useState } from 'react';
import ProfileSummary from './ProfileSummary';
import { useProfile } from '../../ProfileContext/ProfileContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserOverview = () => {
  const { userFirstName, userLastName, kycLevel, userImage, userId, userToken } = useProfile();
  const navigate = useNavigate()
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  return (
    <div className="p-4">
      <ProfileSummary 
        userName= {` ${userFirstName} ${userLastName}`} 
        userImage={`https://farmersmart.com.ng/images/users/profile/${userImage}`} 
      />
      {(kycLevel < 2) &&(
        <div className="flex flex-col items-center justify-center h-auto mt-16">
          <div className="text-center bg-white p-6 rounded-lg shadow-md border border-gray-300 max-w-md">
            <p className="text-lg font-bold text-red-600 mb-2">
              Please upgrade your KYC to level 2
            </p>
            <p className="text-gray-700">
              to be able to access the platform.
            </p>
            <button
              onClick={() => navigate("/user/profile/kyc")}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Start KYC
            </button>
          </div>
        </div>      
      )}
      {(kycLevel >= 2) &&(
        <div>
          <div className="bg-green-100 p-10 rounded-2xl shadow-lg">
            <div className="text-2xl sm:text-3xl font-extrabold text-green-700 text-center">
              🌿 Welcome to Your <span className="text-orange-600">FarmersMart</span> Profile 🌾
            </div>
            
            <div className=''></div>
            <div className=''></div>
          </div>
        </div>
      )}
    </div> 
  );
};

export default UserOverview;
