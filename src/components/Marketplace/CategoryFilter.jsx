// import React from 'react';

// const categories = ['All', 'Dairy', 'Fruits', 'Vegetables', 'Grains', 'Meat'];

// const CategoryFilter = ({ setFilteredProducts }) => {
//   const handleFilter = (category) => {
//     // Filter products by selected category and update `setFilteredProducts`
//   };

//   return (
//     <div className="flex flex-wrap space-x-2 space-y-2 justify-center mb-8">
//       {categories.map((category, index) => (
//         <button
//           key={index}
//           onClick={() => handleFilter(category)}
//           className=" px-4 py-2 bg-farmersmartGreen text-white rounded"
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default CategoryFilter;


import React, { useState } from 'react';

const categories = [
  'Crop Production', 'Livestock Farming', 'Aquaculture',
  'Forestry', 'Agro-Forestry', 'Snail Farming'
];

const CategoryFilter = ({ setFilteredProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Implement the logic to filter products by category here
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 w-full text-left ${
              selectedCategory === category ? 'bg-farmersmartGreen text-white' : ''
            } rounded`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
