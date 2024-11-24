import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LevelOne from './LevelOne';
import { useProfile } from '../../../ProfileContext/ProfileContext'; // Assuming you are using ProfileContext for user data

const KYC = () => {
  const { userId, userToken } = useProfile(); // Get user data from context or state
  const [kycLevel, setKycLevel] = useState(1); // This will track the current level of KYC
  const navigate = useNavigate();

  // Handle progression to the next level (or success page)
  const goToNextLevel = () => {
    if (kycLevel < 3) { // Check if there are more levels
      setKycLevel(kycLevel + 1);
    } else {
      // Redirect to a success page or dashboard
      navigate('/dashboard'); // Example navigation after KYC completion
    }
  };

  return (
    <div className="kyc-container">
      <h1 className="text-center text-2xl font-bold">Complete Your KYC</h1>
      <div className="kyc-steps">
        {/* Render different levels of the KYC process */}
        {kycLevel === 1 && (
          <LevelOne 
            userId={userId} 
            userToken={userToken} 
            goToNextLevel={goToNextLevel} 
          />
        )}
        {/* Add further levels here as needed */}
      </div>
    </div>
  );
};

export default KYC;
