import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProfile } from '../../../ProfileContext/ProfileContext';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LevelTwo = ({ userId, userToken }) => {
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const { kycLevel, setKycLevel, logout } = useProfile()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    users_id: userId,
    users_token: userToken,
    fname: "",
    lname: "",
    oname: "",
    dob: "",
    address: "",
    your_desc: "",
    state_id: "",
    country_id: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
  });

  useEffect(() => {
    const countriesUrl = `${import.meta.env.VITE_API_BASE_URL}/select_list_country`

    const fetchCountries = async () => {

      try {
        const response = await axios.get(countriesUrl);
        setCountries(response.data.data); // Assuming response contains array of states
      } catch (error) {
        console.error("Error fetching countries", error);
      }
    };
    fetchCountries();
  },
    []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  // Fetch states when country_id changes
  useEffect(() => {
    const fetchStates = async () => {
      if (formData.country_id) {
        const statesUrl = `${import.meta.env.VITE_API_BASE_URL}/select_list_state_by_country_id?id=${formData.country_id}`

        try {
          const response = await axios.get(statesUrl);
          setStates(response.data.data);
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      }
    };

    fetchStates();
  }, [formData.country_id]); // Trigger this effect whenever country_id changes


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/kyc/level_two`

      const response = await axios.post(apiUrl, formData);

      if (response.data.status === 1) {
        toast.success("KYC Level 2 successfully updated!", { // Display a success toast
          position: "top-right", // Customize position
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          logout(); // Clears session storage and context state
          navigate("/login")
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
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold text-green-800 mb-4">KYC Level 2</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
            placeholder="Enter first name"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
            placeholder="Enter last name"
            required
          />
        </div>

        {/* Other Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Other Name</label>
          <input
            type="text"
            name="oname"
            value={formData.oname}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
            placeholder="Enter other name"
            required
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
            placeholder="Enter address"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Description</label>
          <textarea
            name="your_desc"
            value={formData.your_desc}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
            placeholder="Enter a short description"
            required
          ></textarea>
        </div>

        {/* Country */}
        <div className="mb-4">
          <div className='relative'>
            <select
              className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
              focus:outline-none focus:ring-0 focus:border-2"
              name="country_id"
              value={formData.country_id}
              onChange={(e) => setFormData({ ...formData, country_id: e.target.value })}
              required
            >
              <option value="">Select country</option>
              {countries
                .filter((country) => country.id === '162') // Filter the countries array
                .map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.country_name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* State */}
        <div className="mb-4">
          <div className='relative'>
            <select
              className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
              focus:outline-none focus:ring-0 focus:border-2"
              name="country_id"
              value={formData.state_id}
              onChange={(e) => setFormData({ ...formData, state_id: e.target.value })}
              required
            >
              <option value="">Select state</option>
              {states.map((state) => (
                <option key={state.id} value={state.id}>{state.state_name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Social Media (Optional) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Facebook */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Facebook</label>
            <input
              type="text"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
              placeholder="Enter Facebook URL"
            />
          </div>

          {/* Twitter */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Twitter</label>
            <input
              type="text"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
              placeholder="Enter Twitter handle"
            />
          </div>

          {/* Instagram */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Instagram</label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
              placeholder="Enter Instagram handle"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
              placeholder="Enter LinkedIn URL"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-800 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 focus:ring focus:ring-green-300"
        >
          {loading ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default LevelTwo;
