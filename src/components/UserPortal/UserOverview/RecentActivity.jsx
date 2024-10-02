import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

const RecentActivity = () => {
  const activities = [
    'Purchased 200kg Rice',
    'Listed 50kg Corn for sale',
    'Updated bank details',
  ];

  return (
    <div className="mt-4 bg-white shadow-md p-4 rounded-md">
      <h3 className="text-lg font-medium mb-2">Recent Activity</h3>
      <List>
        {activities.map((activity, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary={activity} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RecentActivity;
