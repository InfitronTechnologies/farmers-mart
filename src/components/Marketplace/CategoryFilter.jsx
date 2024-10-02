import React from 'react';

const categories = ['All', 'Dairy', 'Fruits', 'Vegetables', 'Grains', 'Meat'];

const CategoryFilter = ({ setFilteredProducts }) => {
  const handleFilter = (category) => {
    // Filter products by selected category and update `setFilteredProducts`
  };

  return (
    <div className="flex justify-center items-center mb-8">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleFilter(category)}
          className="mx-2 px-4 py-2 bg-farmersmartGreen text-white rounded"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
