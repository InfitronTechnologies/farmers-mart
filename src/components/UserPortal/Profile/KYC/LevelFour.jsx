import axios from 'axios'
import React, { useState } from 'react'
import { useProfile } from '../../../ProfileContext/ProfileContext';

const LevelFour = ({userId, userToken}) => {
    const {kycLevel, setKycLevel} = useProfile()
    const [formData, setFormData] = useState({
        users_id : userId,
        users_token	: userToken,
        bank_id : "",
        account_name : "",
        account_number : "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData, 
            [name]:value
        })
    }       

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl =  process.env.NODE_ENV === 'production' 
        ?'https://ourservicestech.com.ng/farmmart_api/v2/kyc/level_four'
        :'/farmmart_api/v2/kyc/level_four'

        try {
            const response = await axios.post(apiUrl, formData, {
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Headers': '*',
                  'Access-Control-Allow-Origin': '*',
                  'charset':'UFT-8'
                }
              })
            console.log("Submission successful:", response.data);

            if (response.data.status === 1) {
                console.log(response)
                setKycLevel(Number(kycLevel) + 1)
            } else {
                throw new Error(response.data.message || 'KYC submission failed');
            }
        } catch (error) {
            console.error("Error submitting form:", error.response?.data || error.message);             
        }
    }

    return(
        <div>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">KYC Level 3</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Enter your Bank ID</label>
                    <input
                        type="text"
                        name="bank_id"
                        value={formData.bank_id}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
                        placeholder=""
                        required
                    />
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