import React from 'react';

const categories = ['All', 'Dairy', 'Fruits', 'Vegetables', 'Grains', 'Meat'];

const CategoryFilter = ({ setFilteredProducts }) => {
  const handleFilter = (category) => {
    // Filter products by selected category and update `setFilteredProducts`
  };

  return (
    <div className="flex flex-wrap space-x-2 space-y-2 justify-center mb-8">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleFilter(category)}
          className=" px-4 py-2 bg-farmersmartGreen text-white rounded"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
