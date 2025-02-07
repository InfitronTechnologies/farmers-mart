import React, { useEffect, useState } from "react";
import { useProfile } from "../../ProfileContext/ProfileContext";
import { AccountBalanceWallet, MonetizationOn, ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import axios from "axios";

const Wallet = () => {
    const {userId, userToken} = useProfile()
    const [walletData, setWalletData] = useState({})
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const getWallet = async () => {
            const walletUrl = process.env.NODE_ENV === "production"
            ? `https://ourservicestech.com.ng/farmmart_api/v2/wallet/select_wallet_by_user_id?users_id=${userId}&users_token=${userToken}`
            : `/farmmart_api/v2/wallet/select_wallet_by_user_id?users_id=${userId}&users_token=${userToken}`;
            
            try {
                const response = await axios.get(walletUrl)
                console.log(response)
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
            const transactionsUrl = process.env.NODE_ENV === "production"
            ? `https://ourservicestech.com.ng/farmmart_api/v2/transaction/select_by_wallet_id?id=${walletData.id}&users_id=${userId}&users_token=${userToken}`
            : `/farmmart_api/v2/transaction/select_by_wallet_id?id=${walletData.id}&users_id=${userId}&users_token=${userToken}`;

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

    return(
        <div>
            <div className="mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Wallet Balance</h2>
                <AccountBalanceWallet className="text-blue-500" fontSize="large" />
                </div>
        
                <div className="flex items-center space-x-3">
                <MonetizationOn className="text-green-500" fontSize="large" />
                <span className="text-2xl font-bold text-gray-900">
                    {walletData.currency} {parseFloat(walletData.balance).toLocaleString()}
                </span>
                </div>
        
                <p className="text-sm text-gray-500 mt-2">
                Last Updated: <span className="font-medium">{walletData.update_date_time}</span>
                </p>
        
                {/* <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                Add Funds
                </button> */}
            </div>
            <div className=" mx-auto mt-6 bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
                
                <div className="space-y-4">
                    {transactions.map((transaction) => (
                    <div
                        key={transaction.token}
                        className="flex items-center justify-between p-3 border rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                    >
                        <div className="flex items-center space-x-3">
                        {transaction.Trans_type === "credit" ? (
                            <ArrowCircleUp className="text-green-500" fontSize="large" />
                        ) : (
                            <ArrowCircleDown className="text-red-500" fontSize="large" />
                        )}
                        <div>
                            <p className="text-gray-900 font-medium">{transaction.description}</p>
                            <p className="text-sm text-gray-500">{transaction.update_date_time}</p>
                        </div>
                        </div>
                        <span
                        className={`text-lg font-semibold ${
                            transaction.Trans_type === "credit" ? "text-green-600" : "text-red-600"
                        }`}
                        >
                        {parseFloat(transaction.amount).toLocaleString()} NGN
                        </span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wallet