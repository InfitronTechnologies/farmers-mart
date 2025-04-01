import React, { useEffect, useState } from "react";
import { useProfile } from "../../ProfileContext/ProfileContext";
import { AccountBalanceWallet, MonetizationOn, ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import axios from "axios";

const Wallet = () => {
    const { userId, userToken } = useProfile()
    const [walletData, setWalletData] = useState({})
    const [transactions, setTransactions] = useState([])
    const [isWithdrawOpen, setIsWithdrawOpen] = useState(false)
    const [error, setError] = useState(null);
    const [withdrawData, setWithdrawData] = useState({
        users_id: userId,
        users_token: userToken,
        amount: "",
        reason: ""
    })

    useEffect(() => {
        const getWallet = async () => {
            const walletUrl = `${import.meta.env.VITE_API_BASE_URL}/wallet/select_wallet_by_user_id?users_id=${userId}&users_token=${userToken}`

            try {
                const response = await axios.get(walletUrl)
                const walletDetails = response.data.data
                setWalletData(walletDetails)
            } catch (error) {
                console.error(error, "Error getting wallet")
            }
        }
        getWallet()
    }, [])

    useEffect(() => {
        const getWalletTransactions = async () => {
            const transactionsUrl = `${import.meta.env.VITE_API_BASE_URL}/transaction/select_by_wallet_id?id=${walletData.id}&users_id=${userId}&users_token=${userToken}`

            try {
                const response = await axios.get(transactionsUrl)
                setTransactions(response.data.data)
            } catch (error) {
                console.error(error, "Error getting transactions")
            }
        }
        getWalletTransactions()
    }, [walletData])

    const handleInput = (e) => {
        const { name, value } = e.target;
        setWithdrawData({ ...withdrawData, [name]: value });
    }

    const handleWithdrawal = async (e) => {
        e.preventDefault()
        if (walletData.balance > withdrawData.amount) {
            try {
                const url = `${import.meta.env.VITE_API_BASE_URL}/wallet/create_withdrawal_request`
                const response = await axios.post(url, withdrawData)
                console.log(response.data)
            } catch (error) {
                console.error("Error withdrawing:", error.response?.data || error.message);
            }
        } else {
            
            setError('Requested amount is greater than wallet balance')
            setTimeout(() => {
                setError('')
            }, 5000);
            setWithdrawData({
                amount : '',
                reason: ''
            })
        }

    }

    return (
        <div>
            <div className="mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Wallet Balance</h2>
                    <AccountBalanceWallet className="text-blue-500" fontSize="large" />
                </div>

                <div className="flex items-center space-x-3">
                    {/* <MonetizationOn className="text-green-500" fontSize="large" /> */}
                    <div className="font-bold text-lg">NGN</div>
                    <span className="text-2xl font-bold text-gray-900">
                        {walletData.currency} {parseFloat(walletData.balance).toLocaleString()}
                    </span>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                    Last Updated: <span className="font-medium">{walletData.update_date_time}</span>
                </p>

                <button
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                    onClick={() => setIsWithdrawOpen(true)}
                >
                    Withdraw
                </button>
            </div>
            {isWithdrawOpen && <div className="p-6 mt-8 bg-white shadow-lg rounded-lg max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Wallet Withdrawal
                </h2>
                <form className="space-y-4" onSubmit={handleWithdrawal}>
                    {/* Amount */}
                    <div>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        <label
                            htmlFor="amount"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Amount (must not be less than 1000)
                        </label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            placeholder="Enter withdrawal amount"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            value={withdrawData.amount}
                            onChange={handleInput}
                        />
                    </div>

                    {/* Reason */}
                    <div>
                        <label
                            htmlFor="reason"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Reason
                        </label>
                        <textarea
                            id="reason"
                            name="reason"
                            placeholder="Reason for withdrawal"
                            rows="3"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            value={withdrawData.reason}
                            onChange={handleInput}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Submit Withdrawal
                        </button>
                    </div>
                </form>
            </div>}
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
                                className={`text-lg font-semibold ${transaction.Trans_type === "credit" ? "text-green-600" : "text-red-600"
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