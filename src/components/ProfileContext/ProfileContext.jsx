import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const navigate = useNavigate()

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
  const [farmerId, setFarmerId] = useState(() => sessionStorage.getItem('farmerId') || null);
  const [userImage, setUserImage] = useState(() => sessionStorage.getItem('userImage') || null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Persist data in sessionStorage whenever they change
  useEffect(() => {
  //   sessionStorage.setItem('selectedProfiles', JSON.stringify(selectedProfiles));
  //   if (userId) sessionStorage.setItem('userId', userId);
  //   if (userToken) sessionStorage.setItem('userToken', userToken);
  //   if (userEmail) sessionStorage.setItem('userEmail', userEmail);
  //   if (userFirstName) sessionStorage.setItem('userFirstName', userFirstName);
  //   if (userLastName) sessionStorage.setItem('userLastName', userLastName);
  //   if(kycLevel) sessionStorage.setItem('kycLevel', kycLevel)
  //   if(partnerId) sessionStorage.setItem('partnerId', partnerId)
  //   if(farmerId) sessionStorage.setItem('farmerId', farmerId)
  // }, [selectedProfiles, userId, userToken, userEmail]

  if (userToken) {
    sessionStorage.setItem('selectedProfiles', JSON.stringify(selectedProfiles));
    sessionStorage.setItem('userToken', userToken);
    sessionStorage.setItem('userId', userId);
    sessionStorage.setItem('userEmail', userEmail);
    sessionStorage.setItem('userFirstName', userFirstName);
    sessionStorage.setItem('userLastName', userLastName);
    sessionStorage.setItem('kycLevel', kycLevel);
    sessionStorage.setItem('partnerId', partnerId)
    sessionStorage.setItem('farmerId', farmerId)
    sessionStorage.setItem('userImage', userImage)
    setIsAuthenticated(!!userToken);
  } else {
    setIsAuthenticated(false);
  }
}, [selectedProfiles, userToken, userId, userEmail, userFirstName, userLastName, kycLevel, farmerId, partnerId]);
  
  const login = (userData) => {
    setUserToken(userData.token);
    setUserId(userData.userId);
    setUserEmail(userData.email);
    setUserFirstName(userData.firstName);
    setUserLastName(userData.lastName);
    setKycLevel(userData.kycLevel);
    setIsAuthenticated(true);
  };    

  const logout = () => {
    sessionStorage.clear();
    setUserToken(null);
    setUserId(null);
    setUserEmail(null);
    setUserFirstName(null);
    setUserLastName(null);
    setKycLevel(null);
    setIsAuthenticated(false);
    navigate('/login'); // Redirect to login page after logout
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
        farmerId,
        setFarmerId,
        userImage,
        setUserImage,
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};