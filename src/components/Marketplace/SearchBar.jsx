import React, { useState } from 'react';

const SearchBar = ({ setFilteredProducts }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Perform search logic here based on query
    // Filter products and update `setFilteredProducts`
  };

  return (
    <div className="flex justify-center items-center mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for produce..."
        className="p-2 border border-gray-300 rounded w-80"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-farmersmartDarkGreen text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
