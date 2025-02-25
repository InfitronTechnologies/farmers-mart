import axios from 'axios'
import React, { useState } from 'react'
import { useProfile } from '../../../ProfileContext/ProfileContext';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const LevelFive = ({userId, userToken}) => {
    const {kycLevel, setKycLevel} = useProfile()
    const [formData, setFormData] = useState({
        users_id : userId,
        users_token	: userToken,
        bvn : ""
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

        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/kyc/level_five`

        try {
            const response = await axios.post(apiUrl, formData)
            
            if (response.data.status === 1) {
                toast.success("KYC Level 5 successfully updated!", { // Display a success toast
                    position: "top-right", // Customize position
                    autoClose: 2000, 
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    setKycLevel(Number(kycLevel) + 1)
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
            <h2 className="text-2xl font-semibold text-green-800 mb-4">KYC Level 5</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Enter your BVN(Bank Verification Number)</label>
                    <input
                        type="text"
                        name="bvn"
                        value={formData.bvn}
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

export default LevelFive