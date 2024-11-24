import React, { useState } from 'react';
import axios from 'axios';

const LevelOne = ({ userId, userToken, goToNextLevel }) => {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setPicture(e.target.files[0]); // Store the selected file
  };

  const handleSubmit = async (e) => {
        e.preventDefault();

        if (!picture) {
        setError("Please upload a picture.");
        return;
        }
        console.log(picture)

        setLoading(true);
        setError(null); // Clear previous errors

        try {
        // Step 1: Upload the image
        const uploadUrl = process.env.NODE_ENV === 'production'
            ? 'https://ourservicestech.com.ng/farmmart_api/v2/uploadimage'
            : '/farmmart_api/v2/uploadimage';

        const uploadData = new FormData();
        uploadData.append("upimg", picture);

        const uploadResponse = await axios.post(uploadUrl, uploadData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        });
        console.log(uploadResponse.data)

        // Check if upload was successful
        if (uploadResponse.data.status !== 1) {
            throw new Error(uploadResponse.data.message || 'Image upload failed');
        }

        // const pictureName = uploadResponse.data.data.filename; // Assuming the backend returns this

        // Step 2: Submit KYC Level One
        const kycUrl = process.env.NODE_ENV === 'production'
            ? 'https://ourservicestech.com.ng/farmmart_api/v2/kyc/level_one'
            : '/farmmart_api/v2/kyc/level_one';

        const kycResponse = await axios.post(kycUrl, {
            users_id: userId,
            users_token: userToken,
            picture_name: picture.name,
        });

        // Check if KYC submission was successful
        if (kycResponse.data.status === 1) {
            goToNextLevel(); // Proceed to the next KYC level
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
