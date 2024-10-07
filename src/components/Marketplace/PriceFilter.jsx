import React, { useState } from 'react';

const PriceFilter = ({ setFilteredProducts }) => {
  const [priceRange, setPriceRange] = useState([10000, 100000]);

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setPriceRange(newPriceRange);
    // Filter products based on price range logic
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Price (₦)</h3>
      <div className="flex items-center justify-between">
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) => handlePriceChange(e, 0)}
          className="border px-2 py-1 w-24"
        />
        <span> - </span>
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(e, 1)}
          className="border px-2 py-1 w-24"
        />
      </div>
      <button
        className="mt-4 px-4 py-2 bg-farmersmartGreen text-white rounded"
        onClick={() => {
          // Implement price filtering logic here
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default PriceFilter;
