import React, { useState } from 'react';

function ProfileOverview() {
  // Initial state for profile data
  const [profile, setProfile] = useState({
    fullName: 'Adam',
    about: 'A farmer that makes money selling the best product to you',
    profession: 'Client',
    address: '6 AJAYI ABESINJOWO Oloja Igbe',
    phone: '09075965318',
    email: 'muqqilion@gmail.com',
  });

  // State for editing
  const [isEditing, setIsEditing] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Add any logic to save data
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile Overview</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          {Object.keys(profile).map((key) => (
            <div key={key} className="mb-4">
              <label className="block text-gray-600 capitalize mb-1" htmlFor={key}>
                {key.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                id={key}
                name={key}
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                value={profile[key]}
                onChange={handleChange}
              />
            </div>
          ))}
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Save Changes
          </button>
        </form>
      ) : (
        <div>
          {Object.entries(profile).map(([key, value]) => (
            <div key={key} className="mb-4 p-4 bg-gray-100 rounded-md">
              <strong className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}: </strong>
              <span>{value}</span>
            </div>
          ))}
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileOverview;
