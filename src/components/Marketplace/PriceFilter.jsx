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
      <div className='flex flex-row justify-between mb-3'>
        <h3 className="text-lg font-bold">Price (₦)</h3>
        <button
          className="font-semibold text-orange-500"
          onClick={() => {
            // Implement price filtering logic here
          }}
        >
          APPLY
        </button>
      </div>
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

    </div>
  );
};

export default PriceFilter;
