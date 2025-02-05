import React, { useEffect } from 'react';
import { Avatar, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ProfileSummary = ({ userName, userImage }) => {
  useEffect(() =>{

  }, [])
  
  return (
    <div className="flex items-center p-4 bg-white shadow-md rounded-md">
      <Avatar src={userImage} alt={userName} className="w-16 h-16" />
      <div className="ml-4">
        <h2 className="text-xl font-semibold">{userName}</h2>
        {/* <Button
          variant="outlined"
          startIcon={<EditIcon />}
          className="mt-2 text-xs"
        >
          Edit Profile
        </Button> */}
      </div>
    </div>
  );
};

export default ProfileSummary;
