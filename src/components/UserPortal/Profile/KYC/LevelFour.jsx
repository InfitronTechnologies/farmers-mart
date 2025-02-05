import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useProfile } from '../../../ProfileContext/ProfileContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const LevelFour = ({userId, userToken}) => {
    const {kycLevel, setKycLevel, clearProfile} = useProfile()
    const navigate = useNavigate()
    const [banks, setBanks] = useState([])
    const [errorMessage, setErrorMessage] = useState(null); // Error message state for validation errors
    const [formData, setFormData] = useState({
        users_id : userId,
        users_token	: userToken,
        bank_id : "",
        account_name : "",
        account_number : "",
    })

    useEffect(() => {
        const bankUrl =  process.env.NODE_ENV === 'production' 
        ?'https://ourservicestech.com.ng/farmmart_api/v2/list_all_bank'
        :'/farmmart_api/v2/list_all_bank'

        const getBanks = async () => {
            try {
                const response = await axios.get(bankUrl)
                console.log(response.data.data)            
                setBanks(response.data.data)            
            } catch (error) {
                console.error(error)
            }
        }
        getBanks()
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData, 
            [name]:value
        })
    }

    const validateAccountNumber = (accountNumber) => {
        return /^[0-9]{10}$/.test(accountNumber);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate account number
        if (!validateAccountNumber(formData.account_number)) {
            setErrorMessage("Account number must be 10 digits.");
            return;
        }

        const apiUrl =  process.env.NODE_ENV === 'production' 
        ?'https://ourservicestech.com.ng/farmmart_api/v2/kyc/level_four'
        :'/farmmart_api/v2/kyc/level_four'

        try {
            const response = await axios.post(apiUrl, formData)
            console.log("Submission successful:", response.data);

            if (response.data.status === 1) {
                console.log(response)
                toast.success("KYC Level 4 successfully updated!", { // Display a success toast
                    position: "top-right", // Customize position
                    autoClose: 2000, 
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    setErrorMessage(null); // Clear error message after successful submission
                    clearProfile(); // Clears session storage and context state
                    navigate('/login');
                }, 2500)
            } else {
                throw new Error(response.data.message || 'KYC submission failed');
            }
        } catch (err) {
            console.error(err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }

    }

    return(
        <div>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">KYC Level 4</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <div className='relative'>
                        <select
                        className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
                        name="bank_id"
                        value={formData.bank_id}
                        onChange={(e) => setFormData({ ...formData, bank_id: e.target.value })}
                        required
                        >
                        <option value="">Select bank</option>
                        {banks.map((bank) => (
                        <option key={bank.id} value={bank.id}>{bank.bank_name}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Account name</label>
                    <input
                        type="text"
                        name="account_name"
                        value={formData.account_name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
                        placeholder=""
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Account Number</label>
                    <input
                        type="text"
                        name="account_number"
                        value={formData.account_number}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
                        placeholder=""
                        required
                    />
                    {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-800 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 focus:ring focus:ring-green-300"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default LevelFour
