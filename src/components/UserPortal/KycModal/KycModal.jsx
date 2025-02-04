import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const KycModal = ({isOpen, onClose}) => {
  if (!isOpen) return null;
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        {/* Modal Content */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Access Restricted</h2>
        <p className="text-gray-600">
            You need to reach the required KYC level 3 to access this feature. Please upgrade your account to continue.
        </p>
        <button
            onClick={() => navigate("/user/profile/kyc")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
            Okay, Got it!
        </button>
        </div>
    </div>
  );
};

export default KycModal;

