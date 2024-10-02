// import React, { useState } from 'react';
// // import NavBar from '../components/NavBar'; 
// import Footer from '../LandingPage/Footer'; // Reusing Footer component
// import ProductGrid from './ProductGrid'; // New component for product display
// import SearchBar from './SearchBar'; // New component for searching products
// import CategoryFilter from './CategoryFilter'; // New component for filtering by category

// const Marketplace = () => {
//   const [filteredProducts, setFilteredProducts] = useState([]); // State to manage products to display
  
//   return (
//     <div>
//       {/* <NavBar /> */}
//       <div className="p-8 mt-20 bg-white text-gray-700 min-h-screen">
//         {/* Search Functionality */}
//         <SearchBar setFilteredProducts={setFilteredProducts} />

//         {/* Category Filter */}
//         <CategoryFilter setFilteredProducts={setFilteredProducts} />

//         {/* Product Grid */}
//         <ProductGrid products={filteredProducts} />

//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Marketplace;




// Marketplace.js
import React, { useState } from 'react';
import NavBar from '../LandingPage/NavBar';
import Footer from '../LandingPage/Footer';
import ProductGrid from './ProductGrid';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import dummyProducts from '../../constants/constant';

const Marketplace = () => {
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts); // Load dummy products initially

  return (
    <div>
      <NavBar />
      <div className="p-8 mt-20 bg-white text-gray-700 min-h-screen">
        {/* Search Functionality */}
        <SearchBar setFilteredProducts={setFilteredProducts} />

        {/* Category Filter */}
        <CategoryFilter setFilteredProducts={setFilteredProducts} />

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} />

      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
