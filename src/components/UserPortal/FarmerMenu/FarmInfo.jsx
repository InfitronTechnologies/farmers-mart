import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FarmInfo() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [farms, setFarms] = useState([
    // Initial dummy data (optional)
    { image: 'image1.png', address: '6 Ajayi...', type: 'Plot', number: 23, country: 'Nigeria', state: 'Abuja', date: '09-09-2024' }
  ]);

  const [newFarm, setNewFarm] = useState({
    image: '',
    address: '',
    type: '',
    number: '',
    country: '',
    state: '',
    date: ''
  });

  const handleAddFarmClick = () => {
    setIsFormVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFarm({ ...newFarm, [name]: value });
  };

  const handleSaveFarm = () => {
    setFarms([...farms, newFarm]);
    setIsFormVisible(false);
    setNewFarm({ image: '', address: '', type: '', number: '', country: '', state: '', date: '' });
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
        <div className="mt-4">
          <label className="block mb-2">Farm Image</label>
          <input 
            type="text" 
            name="image"
            value={newFarm.image}
            onChange={handleInputChange}
            className="border p-2 w-full mb-4" 
            placeholder="Enter Farm Image URL" 
          />

          <label className="block mb-2">Farm Address</label>
          <input 
            type="text" 
            name="address"
            value={newFarm.address}
            onChange={handleInputChange}
            className="border p-2 w-full mb-4" 
            placeholder="Enter Farm Address" 
          />

          <label className="block mb-2">Farm Land Type</label>
          <input 
            type="text" 
            name="type"
            value={newFarm.type}
            onChange={handleInputChange}
            className="border p-2 w-full mb-4" 
            placeholder="Enter Farm Land Type" 
          />

          <label className="block mb-2">Number</label>
          <input 
            type="number" 
            name="number"
            value={newFarm.number}
            onChange={handleInputChange}
            className="border p-2 w-full mb-4" 
            placeholder="Enter Number" 
          />

          <label className="block mb-2">Country</label>
          <input 
            type="text" 
            name="country"
            value={newFarm.country}
            onChange={handleInputChange}
            className="border p-2 w-full mb-4" 
            placeholder="Enter Country" 
          />

          <label className="block mb-2">State</label>
          <input 
            type="text" 
            name="state"
            value={newFarm.state}
            onChange={handleInputChange}
            className="border p-2 w-full mb-4" 
            placeholder="Enter State" 
          />

          <label className="block mb-2">Created Date</label>
          <input 
            type="date" 
            name="date"
            value={newFarm.date}
            onChange={handleInputChange}
            className="border p-2 w-full mb-4" 
          />

          <button 
            onClick={handleSaveFarm} 
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Farm
          </button>
        </div>
      )}
    </div>
  );
}

export default FarmInfo;