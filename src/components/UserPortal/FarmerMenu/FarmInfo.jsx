import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../../ProfileContext/ProfileContext';
import axios from 'axios';

function FarmInfo() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState(null);
  const [error, setError] = useState(null);
  const [states, setStates] = useState([])
  const [countries, setCountries] = useState([])
  const [farmlandTypeId, setFarmlandTypeId] = ([])
  const {userId, userToken} = useProfile()
  const [farmerId, setFarmerId] = useState()
  const [farms, setFarms] = useState([
    // Initial dummy data (optional)
    { image: 'image1.png', address: '6 Ajayi...', type: 'Plot', number: 23, country: 'Nigeria', state: 'Abuja', date: '09-09-2024' }
  ]);

  const [newFarm, setNewFarm] = useState({
    users_id : userId,
    users_token	: userToken,
    farmer_id	: farmerId,
    image_name 	: '',
    farm_address : "",
    farm_land_type_id : "",
    farm_land_type_number	: "",
    country : "",
    state	: "",
    farm_lat : "6.601838",
    farm_long	: "3.351486",
  });

  useEffect(() => {

    // let root = "https://ourservicestech.com.ng"
    // let path = "/farmmart_api/v2"

    const getFarmerId = async () => {
      const farmerIdUrl = process.env.NODE_ENV === "production"
      ? "https://ourservicestech.com.ng/farmmart_api/v2/farmer/select_farmer_post_user_id"
      : "/farmmart_api/v2/farmer/select_farmer_post_user_id"
      
      try {
        const response = await axios.post(farmerIdUrl, {
          users_id : userId,
          users_token	: userToken,
        })
        // console.log(response.data.data.Farmer_id)
        let responseId = response.data.data.Farmer_id
        setNewFarm({...newFarm, farmer_id:responseId})
        // setFarmerId(response.data.data.Farmer_id)
      } catch (error) {
        console.error("Error fetching farmersId", error);
      }
    };
    getFarmerId();


    const fetchCountries = async () => {
      const countriesUrl = process.env.NODE_ENV === 'production' 
      ? 'https://ourservicestech.com.ng/farmmart_api/v2/select_list_country'
      : '/farmmart_api/v2/select_list_country';

      try {
        const response = await axios.get(countriesUrl);
        setCountries(response.data.data);
      } catch (error) {
        console.error("Error fetching countries", error);
      }
    };
    fetchCountries();


    const farmlandType = async () => {
      const landUrl = process.env.NODE_ENV === 'production' 
      ? 'https://ourservicestech.com.ng/farmmart_api/v2/list_all_farm_land_type'
      : '/farmmart_api/v2/list_all_farm_land_type';

      try {
        const response =  await axios.get(landUrl)
        console.log(response.data)
        // console.log(farmlandTypeId)
      } catch (error) {
        console.error()
      }
    }; 
    farmlandType();
  }, [])

  // Fetch states when country_id changes
  useEffect(() => {
    const fetchStates = async () => {
      if (newFarm.country) {
        const statesUrl = process.env.NODE_ENV === "production"
            ? `https://ourservicestech.com.ng/farmmart_api/v2/select_list_state_by_country_id?id=${newFarm.country}`
            : `/farmmart_api/v2/select_list_state_by_country_id?id=${newFarm.country}`;
  
        try {
          const response = await axios.get(statesUrl);
          setStates(response.data.data);
          // console.log(response.data.data);
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      }
    };  
    fetchStates();
  }, [newFarm.country]); // Trigger this effect whenever country_id changes
  

  const handleAddFarmClick = () => {
    setIsFormVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFarm({ ...newFarm, [name]: value });
  };

  const handleFileChange = (e) => {
    setPicture(e.target.files[0]); // Store the selected file
  }; 
  

  const handleSaveFarm = () => {
    setFarms([...farms, newFarm]);
    setIsFormVisible(false);
    setNewFarm({ image: '', address: '', type: '', number: '', country: '', state: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!picture) {
      setError("Please upload a picture.");
      return;
    }else{
      setNewFarm({...newFarm, image_name: picture.name})
    }

    setLoading(true);
    setError(null); // Clear previous errors

    try {
      // Step 1: Upload the image
      const uploadUrl = process.env.NODE_ENV === 'production'
          ? 'https://ourservicestech.com.ng/farmmart_api/v2/uploadimage'
          : '/farmmart_api/v2/uploadimage';

      const uploadData = new FormData();
      uploadData.append("f_img", picture);

      try{
        const uploadResponse = await axios.post(uploadUrl, uploadData, {
          headers: {
          'Content-Type': 'multipart/form-data',
          },
        });
        console.log(uploadResponse.data); // Handle response
      }
      catch (error) {
        console.error("Error uploading image:", error.response?.data || error.message);
      }

      const updatedFarm = {
        ...newFarm,
        image_name: picture.name,
      };

      // Step 2: Submit Farm Information
      const kycUrl = process.env.NODE_ENV === 'production'
          ? 'https://ourservicestech.com.ng/farmmart_api/v2/farm/create_farm'
          : '/farmmart_api/v2/farm/create_farm';
      console.log(updatedFarm)
      const kycResponse = await axios.post(kycUrl, updatedFarm);
      console.log(kycResponse.data)
      // if (kycResponse.data.status === 1) {
      //     console.log(kycResponse)
      //     setKycLevel(kycLevel + 1)
      // } else {
      //     throw new Error(kycResponse.data.message || 'KYC submission failed');
      // }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">List of Farms</h2>

      {/* Add Farm Button */}
      {!isFormVisible && (
        <button 
          onClick={handleAddFarmClick} 
          className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
        >
          Add Farm
        </button>
      )}

      {/* Farm List Table */}
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className='text-left'>#</th>
              <th className='text-left'>Farm Image</th>
              <th className='text-left'>Farm Address</th>
              <th className='text-left'>Farm Land Type</th>
              <th className='text-left'>Number</th>
              <th className='text-left'>Country</th>
              <th className='text-left'>State</th>
              <th className='text-left'>Created Date</th>
              <th className='text-left'>Action</th>
              <th className='text-left'>Action</th>
              <th className='text-left'>Add</th>
            </tr>
          </thead>
          <tbody>
            {farms.map((farm, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{farm.image}</td>
                <td>{farm.address}</td>
                <td>{farm.type}</td>
                <td>{farm.number}</td>
                <td>{farm.country}</td>
                <td>{farm.state}</td>
                <td>{farm.date}</td>
                <td><button className="bg-blue-500 text-white px-4 py-2">View</button></td>
                <td><button className="bg-green-500 text-white px-4 py-2">Map</button></td>
                <td>
                  <Link to='/user/add-product'>
                    <button className="bg-red-500 text-white px-4 py-2">
                      Product
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Farm Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mt-4">
          {/* <div className="mb-4">
            <label className="block text-gray-700 font-medium">Upload Picture:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="file-input border rounded px-3 py-2"
            />
          </div> */}

          <label className="block mb-2">Farm Address</label>
          <input 
            type="text" 
            name="farm_address"
            value={newFarm.farm_address}
            onChange={handleInputChange}
            className="border p-2 w-full mb-4" 
            placeholder="Enter Farm Address" 
            required
          />

          {/* <div className="mb-4">
            <div className='relative'>
              <select
                className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                focus:outline-none focus:ring-0 focus:border-2"
                name="state"
                value={newFarm.farm_land_type_number}
                onChange={(e) => setNewFarm({ ...newFarm, farm_land_type_number : e.target.value })}
                required
              >
                <option value="">What type of farmland do you have?</option>
                {farmlandTypeId.map((land) => (
                <option key={land.id} value={land.id}>{land.farm_land_type_name}</option>
                ))}
              </select>
            </div>
          </div> */}

          <label className="block mb-2">Number of Plot, Acres or Hectares</label>
          <input 
            type="" 
            name="farm_land_type_number"
            onChange={handleInputChange}
            className="border p-2 w-full mb-4" 
            placeholder="Enter Number" 
            required
          />

          {/* {Country} */}
          <div className="mb-4">
            <div className='relative'>
              <select
                className="w-full p-2 border-1 rounded-xl text-black bg-white focus:border-farmersmartDarkGreen 
                focus:outline-none focus:ring-0 focus:border-2"
                name="country"
                value={newFarm.country}
                onChange={(e) => setNewFarm({ ...newFarm, country: e.target.value })}
                required
              >
                <option value="">Select country</option>
                {countries.map((country) => (
                <option key={country.id} value={country.id}>{country.country_name}</option>
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
                name="state"
                value={newFarm.state}
                onChange={(e) => setNewFarm({ ...newFarm, state: e.target.value })}
                required
              >
                <option value="">Select state</option>
                {states.map((state) => (
                <option key={state.id} value={state.id}>{state.state_name}</option>
                ))}
              </select>
            </div>
          </div>


          <label className="block text-gray-700 font-medium">Upload Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="file-input border rounded px-3 py-2"
          />

          <button 
            type='submit'
            disabled={loading}
            className={`submit-btn px-4 py-2 rounded bg-blue-500 text-white ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
          >
            {loading ? 'Saving...' : 'Save Farm'}
          </button>
        </form>
      )}
    </div>
  );
}

export default FarmInfo;