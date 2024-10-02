import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';

const QuickActions = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-4 gap-4">
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        className="w-full md:w-auto bg-green-500"
      >
        Post New Listing
      </Button>
      <Button
        variant="contained"
        startIcon={<MessageIcon />}
        className="w-full md:w-auto bg-blue-500"
      >
        View Messages
      </Button>
    </div>
  );
};

export default QuickActions;
