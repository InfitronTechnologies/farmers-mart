import React, { useState } from 'react';
import { Checkbox, Button } from '@mui/material';
import NavBar from '../LandingPage/NavBar';
import Footer from '../LandingPage/Footer';

const ProfileSelection = ({ onNext }) => {
  const [selectedProfiles, setSelectedProfiles] = useState([]);

  const handleProfileChange = (profile) => {
    if (selectedProfiles.includes(profile)) {
      setSelectedProfiles(selectedProfiles.filter((item) => item !== profile));
    } else {
      setSelectedProfiles([...selectedProfiles, profile]);
    }
  };

  const handleSubmit = () => {
    onNext(selectedProfiles);
  };

  return (
    <div>
        <NavBar bgColor="bg-farmersmartDarkGreen"/>
        <div className='my-32'>
            <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto  my-auto mt-12">
                <h2 className="text-2xl font-semibold text-center mb-6">Select Profiles</h2>
                <div className="space-y-4">
                    {['Farmer', 'Buyer', 'Logistics', 'Partner', 'Agent'].map((profile) => (
                    <div key={profile} className="flex items-center">
                        <Checkbox
                        checked={selectedProfiles.includes(profile)}
                        onChange={() => handleProfileChange(profile)}
                        color="primary"
                        />
                        <label className="text-lg">{profile}</label>
                    </div>
                    ))}
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    className="w-full mt-6"
                    onClick={handleSubmit}
                >
                    Continue to KYC
                </Button>
            </div>
        </div>
        <Footer className='mt-auto w-full' />
    </div>
  );
};

export default ProfileSelection;
