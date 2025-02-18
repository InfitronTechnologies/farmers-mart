import React, { useEffect, useState } from 'react';
import ProfileSummary from './ProfileSummary';
import AccountStatistics from './AccountStatistics';
import RecentActivity from './RecentActivity';
// import QuickActions from './QuickActions';
import Notifications from './Notifications';
import { useProfile } from '../../ProfileContext/ProfileContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AccountBalanceWallet, MonetizationOn, ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";

const UserOverview = () => {
  const { userFirstName, userLastName, kycLevel, userImage, userId, userToken } = useProfile();
  const navigate = useNavigate()
  const [walletData, setWalletData] = useState({})
  const [transactions, setTransactions] = useState([])
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  useEffect(() => {
      const getWallet = async () => {
          const walletUrl = `${API_BASE_URL}/wallet/select_wallet_by_user_id?users_id=${userId}&users_token=${userToken}`
          
          try {
              const response = await axios.get(walletUrl)
              const walletDetails = response.data.data
              setWalletData(walletDetails)
          } catch (error) {
              console.error(error, "Error getting wallet")
          }            
      }
      getWallet()
  },[])

  useEffect(() => {
      const getWalletTransactions = async () => {
          const transactionsUrl = `${API_BASE_URL}/transaction/select_by_wallet_id?id=${walletData.id}&users_id=${userId}&users_token=${userToken}`

          try {
              const response = await axios.get(transactionsUrl)
              setTransactions(response.data.data)
              console.log(response.data.data)
          } catch (error) {
              console.error(error, "Error getting transactions")
          }            
      }
      getWalletTransactions()
  },[walletData])
  
  return (
    <div className="p-4">
      <ProfileSummary 
        userName= {` ${userFirstName} ${userLastName}`} 
        userImage={`https://farmersmart.com.ng/images/users/profile/${userImage}`} 
      />
      {(kycLevel < 2) &&(
        <div className="flex flex-col items-center justify-center h-auto mt-16">
          <div className="text-center bg-white p-6 rounded-lg shadow-md border border-gray-300 max-w-md">
            <p className="text-lg font-bold text-red-600 mb-2">
              Please upgrade your KYC to level 2
            </p>
            <p className="text-gray-700">
              to be able to access the platform.
            </p>
            <button
              onClick={() => navigate("/user/profile/kyc")}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Start KYC
            </button>
          </div>
        </div>      
      )}
      {(kycLevel >= 2) &&(
        <div>
          <div className="bg-green-100 p-10 rounded-2xl shadow-lg">
            <div className="text-2xl sm:text-3xl font-extrabold text-green-700 text-center">
              🌿 Welcome to Your <span className="text-orange-600">FarmersMart</span> Profile 🌾
            </div>
            {/* <div className=''>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Wallet Balance</h2>
                <AccountBalanceWallet className="text-blue-500" fontSize="large" />
              </div>      
              <div className="flex items-center space-x-3">
                <MonetizationOn className="text-green-500" fontSize="large" />
                <span className="text-2xl font-bold text-gray-900">
                  {walletData 
                    ? 
                  `{${walletData.currency} ${parseFloat(walletData.balance).toLocaleString()}`
                    :
                  "You dont have a wallet yet, Make an order first"
                  }
                </span>
              </div>
            </div> */}
            <div className=''></div>
            <div className=''></div>
          </div>
          {/* <AccountStatistics /> */}
          {/* <RecentActivity /> */}
          {/* <QuickActions /> */}
          {/* <Notifications /> */}
        </div>
      )}
    </div> 
  );
};

export default UserOverview;
