import React, { useState } from 'react';
import axios from 'axios';
import { useProfile } from '../../../ProfileContext/ProfileContext';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const LevelOne = ({ userId, userToken, goToNextLevel }) => {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {kycLevel, setKycLevel} = useProfile()

  const handleFileChange = (e) => {
    setPicture(e.target.files[0]); // Store the selected file
  }; 
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!picture) {
      setError("Please upload a picture.");
      return;
    }

    setLoading(true);
    setError(null); // Clear previous errors

    try {
      // Step 1: Upload the image
      const uploadUrl = `${import.meta.env.VITE_API_BASE_URL}/uploadimage`

      const uploadData = new FormData();
      uploadData.append("upimg", picture);

      try{
        const uploadResponse = await axios.post(uploadUrl, uploadData, {
          headers: {
          'Content-Type': 'multipart/form-data',
          },
        });
      }
      catch (error) {
        console.error("Error uploading image:", error.response?.data || error.message);
      }

      // Step 2: Submit KYC Level One
      const kycUrl =  `${import.meta.env.VITE_API_BASE_URL}/kyc/level_one`

      const kycResponse = await axios.post(kycUrl, {
          users_id: userId,
          users_token: userToken,
          picture_name: picture.name,
      });

      // Check if KYC submission was successful
      if (kycResponse.data.status === 1) {
          toast.success("KYC Level 1 updated", { // Display a success toast
            position: "top-right", // Customize position
            autoClose: 2000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        setTimeout(() => {
          setKycLevel(kycLevel + 1)
        }, 2500)
      } else {
          throw new Error(kycResponse.data.message || 'KYC submission failed');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="kyc-level-one">
      <h2 className="text-2xl font-semibold text-green-800 mb-4">KYC Level </h2>

      <h2 className="text-lg font-semibold mb-4">Step 1: Upload Your Picture</h2>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Upload Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="file-input border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`submit-btn px-4 py-2 rounded bg-blue-500 text-white ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
        >
          {loading ? 'Uploading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default LevelOne;
