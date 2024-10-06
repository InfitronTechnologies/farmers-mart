import React, { useState } from 'react';
import {kycConfig} from '../../constants/constant';
import NavBar from '../LandingPage/NavBar';
import Footer from '../LandingPage/Footer';

const KYCForm = ({ profile, onComplete }) => {
  const [formData, setFormData] = useState({});

  console.log(profile)

  const fields = kycConfig[profile];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(profile, formData); // Pass the profile and form data back to the parent
  };

  return (
    <div>
        <NavBar bgColor="bg-farmersmartDarkGreen"/>
        <div className='my-32'>
            <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field) => (
                <div key={field.name}>
                <label className="block font-medium mb-1">
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    onChange={handleChange}
                    className="block w-full p-2 border border-gray-300 rounded-md"
                />
                </div>
            ))}
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Complete KYC for {profile}
                </button>
            </form>
        </div>
        <Footer className='mt-auto w-full' />
    </div>
  );
};

export default KYCForm;
