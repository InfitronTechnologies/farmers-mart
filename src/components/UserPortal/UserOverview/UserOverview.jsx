import React from 'react';
import ProfileSummary from './ProfileSummary';
import AccountStatistics from './AccountStatistics';
import RecentActivity from './RecentActivity';
// import QuickActions from './QuickActions';
import Notifications from './Notifications';
import { useProfile } from '../../ProfileContext/ProfileContext';

const UserOverview = () => {
  const { userFirstName, userLastName, kycLevel } = useProfile();
  
  return (
    <div className="p-4">
      <ProfileSummary 
      userName= {` ${userFirstName} ${userLastName}`} userImage="/path/to/image.jpg" />
      {(kycLevel < 2) &&(
        <div className="flex flex-col items-center justify-center h-auto mt-16">
          <div className="text-center bg-white p-6 rounded-lg shadow-md border border-gray-300 max-w-md">
            <p className="text-lg font-bold text-red-600 mb-2">
              Please upgrade your KYC to level 2
            </p>
            <p className="text-gray-700">
              to be able to access the platform.
            </p>
          </div>
        </div>      
      )}
      {(kycLevel == 2) &&(
        <div>
          <AccountStatistics />
          <RecentActivity />
          {/* <QuickActions /> */}
          <Notifications />
        </div>
      )}
    </div> 
  );
};

export default UserOverview;
