import React from 'react';
import ProfileSummary from './ProfileSummary';
import AccountStatistics from './AccountStatistics';
import RecentActivity from './RecentActivity';
// import QuickActions from './QuickActions';
import Notifications from './Notifications';

const UserOverview = () => {
  return (
    <div className="p-4">
      <ProfileSummary userName="Adam Adam" userImage="/path/to/image.jpg" />
      <AccountStatistics />
      <RecentActivity />
      {/* <QuickActions /> */}
      <Notifications />
    </div>
  );
};

export default UserOverview;
