import React, { createContext, useContext, useEffect, useState } from 'react';

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  // State for profile data and additional user info
  const [selectedProfiles, setSelectedProfiles] = useState(() => {
    const savedProfiles = sessionStorage.getItem('selectedProfiles');
    return savedProfiles ? JSON.parse(savedProfiles) : {};
  });

  const [userId, setUserId] = useState(() => sessionStorage.getItem('userId') || null);
  const [userToken, setUserToken] = useState(() => sessionStorage.getItem('userToken') || null);
  const [userEmail, setUserEmail] = useState(() => sessionStorage.getItem('userEmail') || null);
  const [userFirstName, setUserFirstName] = useState(() => sessionStorage.getItem('userFirstName') || null);
  const [userLastName, setUserLastName] = useState(() => sessionStorage.getItem('userLastName') || null);
  const [kycLevel, setKycLevel] = useState(() => sessionStorage.getItem('kycLevel') || null);
  const [partnerId, setPartnerId] = useState(() => sessionStorage.getItem('partnerId') || null);
  // const [kycLevel, setKycLevel] = useState(() => sessionStorage.getItem('kycLevel') || null);

  // Persist data in sessionStorage whenever they change
  useEffect(() => {
    sessionStorage.setItem('selectedProfiles', JSON.stringify(selectedProfiles));
    if (userId) sessionStorage.setItem('userId', userId);
    if (userToken) sessionStorage.setItem('userToken', userToken);
    if (userEmail) sessionStorage.setItem('userEmail', userEmail);
    if (userFirstName) sessionStorage.setItem('userFirstName', userFirstName);
    if (userLastName) sessionStorage.setItem('userLastName', userLastName);
    if(kycLevel) sessionStorage.setItem('kycLevel', kycLevel)
    if(partnerId) sessionStorage.setItem('partnerId', partnerId)
  }, [selectedProfiles, userId, userToken, userEmail]);
  

  // Function to clear all user data on logout
  const clearProfile = () => {
    // setSelectedProfiles({});
    // setUserId(null);
    // setUserToken(null);
    // setUserEmail(null);
    // setUserFirstName(null);
    // setUserLastName(null);
    // setKycLevel(null);
    sessionStorage.clear();
  };

  return (
    <ProfileContext.Provider
      value={{
        selectedProfiles,
        setSelectedProfiles,
        userId,
        setUserId,
        userToken,
        setUserToken,
        userEmail,
        setUserEmail,
        userFirstName,
        setUserFirstName,
        userLastName,
        setUserLastName,
        kycLevel,
        setKycLevel,
        partnerId,
        setPartnerId,
        clearProfile,  // Add clearProfile to context
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
