import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyAgreementForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("Please agree to the terms and conditions before continuing.");
      return;
    }
    navigate('/login')
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Agree to Our Terms</h2>
      <p className="text-gray-600 mb-6">
        Please read and agree to our <a href="/policy" className="text-blue-500 underline">Privacy Policy</a> before continuing.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="agreeCheckbox"
            className="mr-2"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="agreeCheckbox" className="text-gray-700">
            I agree to the terms and conditions
          </label>
        </div>
        <button
          type="submit"
          disabled={!isChecked} // Disable button if checkbox isn't checked
          className={`w-full px-4 py-2 text-white rounded ${
            isChecked ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default PrivacyAgreementForm;
