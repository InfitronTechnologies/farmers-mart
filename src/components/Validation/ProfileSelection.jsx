import React, { useState, useEffect } from 'react';
import { Checkbox, Button } from '@mui/material';
import NavBar from '../LandingPage/NavBar';
import Footer from '../LandingPage/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfileSelection = ({ onNext }) => {
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate(); // Correctly initialize useNavigate

  useEffect(() => {
    // Retrieve userId from local storage
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleProfileChange = (profile) => {
    setSelectedProfiles((prevSelectedProfiles) =>
      prevSelectedProfiles.includes(profile)
        ? prevSelectedProfiles.filter((item) => item !== profile)
        : [...prevSelectedProfiles, profile]
    );
  };

  const handleSubmit = async () => {
    if (!userId) {
      setError('User ID is not available.');
      return;
    }

    // Prepare the profile data for the backend
    const profileData = {
      users_id: userId,
      buyer: selectedProfiles.includes('Buyer') ? 1 : 0,
      farmer: selectedProfiles.includes('Farmer') ? 1 : 0,
      logistic: selectedProfiles.includes('Logistics') ? 1 : 0,
      partner: selectedProfiles.includes('Partner') ? 1 : 0,
    };

    const apiUrl = process.env.NODE_ENV === 'production' 
      ? 'https://ourservicestech.com.ng/farmmart_api/v2/account/create_account_profile'
      : '/farmmart_api/v2/account/create_account_profile';

    try {
      const response = await axios.post(apiUrl, profileData);

      if (response.status === 200) {
        localStorage.setItem("selectedProfiles", JSON.stringify(selectedProfiles));
        onNext(); // Calls onNext if passed as prop
        navigate('/login'); // Navigates to the next page
      }
    } catch (err) {
      setError('Failed to create profile. Please try again.');
    }
  };

  return (
    <div>
      <NavBar bgColor="bg-farmersmartDarkGreen" />
      <div className='my-32'>
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6">Select Profiles</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="space-y-4">
            {['Farmer', 'Buyer', 'Logistics', 'Partner'].map((profile) => (
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
            Join Us
          </Button>
        </div>
      </div>
      <Footer className='mt-auto w-full' />
    </div>
  );
};

export default ProfileSelection;
