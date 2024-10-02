import React from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Notifications = () => {
  const notifications = [
    'New message from John Doe.',
    'Your listing for Corn has expired.',
  ];

  return (
    <div className="mt-4 bg-white shadow-md p-4 rounded-md">
      <h3 className="text-lg font-medium mb-2 flex items-center">
        <NotificationsActiveIcon className="mr-2" /> Notifications
      </h3>
      {notifications.length ? (
        <ul>
          {notifications.map((notif, index) => (
            <li key={index} className="text-sm my-2">
              {notif}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No new notifications.</p>
      )}
    </div>
  );
};

export default Notifications;
