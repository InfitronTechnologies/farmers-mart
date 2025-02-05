import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../../../ProfileContext/ProfileContext';
import LevelOne from './LevelOne';
import LevelTwo from './LevelTwo'; 
import LevelThree from './LevelThree';
import LevelFour from './LevelFour';
import LevelFive from './LevelFive';

const KYC = () => {
  const { userId, userToken, kycLevel } = useProfile(); // Get user data from context
  const navigate = useNavigate();

  console.log(kycLevel)
  
  // Handle progression to the next level (or success page)
  return (
    <div className="kyc-container">
      <h1 className="text-center text-2xl font-bold">Complete Your KYC</h1>
      <div className="kyc-steps">
        {/* Render different levels of the KYC process */}
        {(kycLevel == null || kycLevel == 0 || kycLevel == "0") && (
          <LevelOne
            userId={userId}
            userToken={userToken}
          />
        )}
        {(kycLevel == 1 || kycLevel == '1') && (
          <LevelTwo
            userId={userId}
            userToken={userToken}
          />
        )}
        {(kycLevel == 2 || kycLevel == '2') && (
          <LevelThree
            userId={userId}
            userToken={userToken}
          />
        )}
        {(kycLevel == 3 || kycLevel == '3') && (
          <LevelFour
            userId={userId}
            userToken={userToken}
          />
        )}
        {(kycLevel == 4 || kycLevel == '4') && (
          <LevelFive
            userId={userId}
            userToken={userToken}
          />
        )}
        {/* <div className='text-4xl font-bold text-farmersmartDarkGreen'>KYC COMPLETED</div> */}
      </div>
    </div>
  );
};

export default KYC;
