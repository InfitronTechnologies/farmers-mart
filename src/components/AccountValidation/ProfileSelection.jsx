import React, { useState, useEffect } from 'react';
import { Checkbox } from '@mui/material';
import NavBar from '../LandingPage/NavBar';
import Footer from '../LandingPage/Footer';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import bgImage from '../../assets/login-bg.png'
import { useProfile } from '../ProfileContext/ProfileContext';

const ProfileSelection = ({ onNext }) => {
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  const [error, setError] = useState(null);
  const { userId } = useProfile()
  const navigate = useNavigate(); // Correctly initialize useNavigate
  const location = useLocation()
  const {email} = location.state || {}

  const handleProfileChange = (profile) => {
    setSelectedProfiles((prevSelectedProfiles) =>
      prevSelectedProfiles.includes(profile)
        ? prevSelectedProfiles.filter((item) => item !== profile)
        : [...prevSelectedProfiles, profile]
    );
  };

  const handleSubmit = async () => {
    if (!userId) {
      setError('User is not available.');
      return;
    }

    // Prepare the profile data for the backend
    const profileData = {
      users_id: userId,
      users_email: email,
      buyer: String(selectedProfiles.includes('Buyer') ? 1 : 0),
      farmer: String(selectedProfiles.includes('Farmer') ? 1 : 0),
      logistic: String(selectedProfiles.includes('Logistics') ? 1 : 0),
      partner: String(selectedProfiles.includes('Partner') ? 1 : 0),
    };

    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/account/create_acc_p`

    try {
      console.log(profileData)
      const response = await axios.post(apiUrl, profileData);

      if (response.status === 200) {
        localStorage.setItem("selectedProfiles", JSON.stringify(selectedProfiles));
        navigate('/policyform'); // Navigates to the next page
      }
    } catch (err) {
      setError('Failed to create profile. Please try again.');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div>
      <NavBar bgColor="bg-farmersmartDarkGreen" />
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage})`
          }}>
        </div>
        <div className="z-10 mx-auto w-1/2">
          <div className="bg-farmersmartPaleGreen w-full shadow-lg p-8 rounded-3xl max-w-md mx-auto mt-12">
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
            <button
              type='submit'
              className="bg-farmersmartDarkGreen my-4 text-center text-white text-xl font-semibold py-3 px-10 rounded-full transition duration-300"
              onClick={handleSubmit}
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
      <Footer className='mt-auto w-full' />
    </div>
  );
};

export default ProfileSelection;
