import React, { useState } from 'react';

function BankDetails() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [bankDetails, setBankDetails] = useState([]);
  const [newDetail, setNewDetail] = useState({
    accountName: '',
    accountNumber: '',
    bankName: 'Access Bank',
    bvn: ''
  });

  const handleAddDetailsClick = () => setIsFormVisible(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDetail({ ...newDetail, [name]: value });
  };

  const handleSaveChanges = () => {
    setBankDetails([...bankDetails, newDetail]);
    setIsFormVisible(false); // Hide form after adding
    setNewDetail({ accountName: '', accountNumber: '', bankName: 'Access Bank', bvn: '' }); // Reset form
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Bank Details</h2>
      
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="font-semibold text-lg">Bank Details</h3>
        
        {/* Add Bank Details Button */}
        {!isFormVisible && (
          <button 
            onClick={handleAddDetailsClick} 
            className="bg-red-500 text-white px-4 py-2 mt-4 rounded w-full sm:w-auto"
          >
            Add Bank Details
          </button>
        )}
        
        {/* Responsive Table */}
        <div className="overflow-x-auto mt-4">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Account Name</th>
                <th className="px-4 py-2">Account Number</th>
                <th className="px-4 py-2">Bank Name</th>
              </tr>
            </thead>
            <tbody>
              {bankDetails.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-2">No Record Found</td>
                </tr>
              ) : (
                bankDetails.map((detail, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{detail.accountName}</td>
                    <td className="px-4 py-2">{detail.accountNumber}</td>
                    <td className="px-4 py-2">{detail.bankName}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Bank Details Form - Conditionally Rendered */}
        {isFormVisible && (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block mb-2">Account Name</label>
              <input 
                type="text" 
                name="accountName"
                value={newDetail.accountName}
                onChange={handleInputChange}
                className="border p-2 w-full mb-4" 
                placeholder="Enter Account Name" 
              />
            </div>
            
            <div>
              <label className="block mb-2">Account Number</label>
              <input 
                type="text" 
                name="accountNumber"
                value={newDetail.accountNumber}
                onChange={handleInputChange}
                className="border p-2 w-full mb-4" 
                placeholder="Enter Account Number" 
              />
            </div>
            
            <div>
              <label className="block mb-2">Select Bank</label>
              <select 
                name="bankName"
                value={newDetail.bankName}
                onChange={handleInputChange}
                className="border p-2 w-full mb-4"
              >
                <option value="Access Bank">Access Bank</option>
                <option value="GTBank">GTBank</option>
                <option value="First Bank">First Bank</option>
                {/* Add more options here */}
              </select>
            </div>
            
            <div>
              <label className="block mb-2">BVN</label>
              <input 
                type="text" 
                name="bvn"
                value={newDetail.bvn}
                onChange={handleInputChange}
                className="border p-2 w-full mb-4" 
                placeholder="Enter BVN" 
              />
            </div>
            
            {/* Save Changes Button */}
            <div className="col-span-1 sm:col-span-2">
              <button 
                onClick={handleSaveChanges} 
                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BankDetails;
