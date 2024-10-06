// import React, { useState } from 'react';
// import NavBar from '../LandingPage/NavBar';
// import Footer from '../LandingPage/Footer';
// import ProductGrid from './ProductGrid';
// import SearchBar from './SearchBar';
// import CategoryFilter from './CategoryFilter';
// import dummyProducts from '../../constants/constant';

// const Marketplace = () => {
//   const [filteredProducts, setFilteredProducts] = useState(dummyProducts); // Load dummy products initially

//   return (
//     <div>
//       <NavBar />
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



import React, { useState } from 'react';
import NavBar from '../LandingPage/NavBar';
import Footer from '../LandingPage/Footer';
import ProductGrid from './ProductGrid';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import {dummyProducts} from '../../constants/constant';
import Cart from './Cart';

const Marketplace = ({ addToCart, cartItems }) => {
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts);

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

        {/* Cart Component */}
        <Cart cartItems={cartItems} />
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
