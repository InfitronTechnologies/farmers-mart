import React, { useState } from "react";

const PasswordInput = ({ password, setPassword }) => {
    const [showCriteria, setShowCriteria] = useState(false)
    const [validations, setValidations] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
    });

    const validatePassword = (value) => {
        setPassword(value);

        setValidations({
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /\d/.test(value),
        });
    };

  return (
    <div className="space-y-2">
      <input
        type="password"
        value={password}
        onChange={(e) => {
            validatePassword(e.target.value)
            setShowCriteria(true)
        }}
        placeholder="Enter your password"
        className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen focus:outline-none focus:ring-0 focus:border-2"
      />
        {showCriteria 
            ?
            <ul className="text-xs text-left">
                <li className={validations.length ? "text-green-500" : "text-red-500"}>
                ✔️ At least 8 characters
                </li>
                <li className={validations.uppercase ? "text-green-500" : "text-red-500"}>
                ✔️ At least one uppercase letter (A-Z)
                </li>
                <li className={validations.lowercase ? "text-green-500" : "text-red-500"}>
                ✔️ At least one lowercase letter (a-z)
                </li>
                <li className={validations.number ? "text-green-500" : "text-red-500"}>
                ✔️ At least one number (0-9)
                </li>
            </ul>
            :
            <div></div>
        }
    </div>
  );
};

export default PasswordInput;
