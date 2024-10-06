import React, { useState } from 'react';
import ProfileSelection from './ProfileSelection';
import KYCForm from './KYCForm';
import { useNavigate } from 'react-router-dom';  // <-- Import useNavigate

const ProfileCompletion = () => {
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  const [kycCompleted, setKycCompleted] = useState({});
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const navigate = useNavigate();  // <-- Initialize useNavigate

  const handleProfileSelection = (profiles) => {
    setSelectedProfiles(profiles);
    setCurrentProfileIndex(0);
  };

  const handleKycCompletion = (profile, data) => {
    setKycCompleted({ ...kycCompleted, [profile]: data });

    if (currentProfileIndex < selectedProfiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1);
    } else {
      // All KYC forms completed, redirect to the dashboard
      console.log('All KYC data:', kycCompleted);

      // Redirect to dashboard after completing KYC
      navigate('/user');
    }
  };

  return (
    <div>
      {selectedProfiles.length === 0 ? (
        <ProfileSelection onNext={handleProfileSelection} />
      ) : (
        <KYCForm
            profile={selectedProfiles[currentProfileIndex]}
            onComplete={handleKycCompletion}
        />
      )}
    </div>
  );
};

export default ProfileCompletion;
