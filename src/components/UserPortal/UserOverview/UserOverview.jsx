import React from 'react';
import ProfileSummary from './ProfileSummary';
import AccountStatistics from './AccountStatistics';
import RecentActivity from './RecentActivity';
// import QuickActions from './QuickActions';
import Notifications from './Notifications';
import { useProfile } from '../../ProfileContext/ProfileContext';

const UserOverview = () => {
  const { userFirstName, userLastName } = useProfile();
  
  return (
    <div className="p-4">
      <ProfileSummary 
      userName= {` ${userFirstName} ${userLastName}`} userImage="/path/to/image.jpg" />
      <AccountStatistics />
      <RecentActivity />
      {/* <QuickActions /> */}
      <Notifications />
    </div>
  );
};

export default UserOverview;
