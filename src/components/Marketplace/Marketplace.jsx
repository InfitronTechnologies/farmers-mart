// import React, { useState } from 'react';
// import Footer from '../LandingPage/Footer';
// import ProductGrid from './ProductGrid';
// import SearchBar from './SearchBar';
// import CategoryFilter from './CategoryFilter';
// import {dummyProducts} from '../../constants/constant';
// import Cart from './Cart';
// import MarketNav from './MarketNav';

// const Marketplace = ({ addToCart, cartItems }) => {
//   const [filteredProducts, setFilteredProducts] = useState(dummyProducts);

//   return (
//     <div>
//       <div className='fixed top-0 left-0 mb-8 w-full'>
//         <MarketNav/>
//       </div>
//       <div className="p-8 mt-20 bg-white text-gray-700 min-h-screen">
//         {/* Search Functionality */}
//         {/* <SearchBar setFilteredProducts={setFilteredProducts} /> */}

//         {/* Category Filter */}
//         <CategoryFilter setFilteredProducts={setFilteredProducts} />

//         {/* Product Grid */}
//         <ProductGrid products={filteredProducts} />

//         {/* <Cart cartItems={cartItems} /> */}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Marketplace;



import React, { useState } from 'react';
import Footer from '../LandingPage/Footer';
import ProductGrid from './ProductGrid';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter'; // Price filter component
import MarketNav from './MarketNav';
import { dummyProducts } from '../../constants/constant';
import {Menu} from '@mui/icons-material'; // Material UI Menu Icon

const Marketplace = ({ addToCart, cartItems }) => {
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts);
  const [sortOption, setSortOption] = useState(''); // To track the selected sort option
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Sidebar visibility state

  const handleSort = (e) => {
    const sortBy = e.target.value;
    setSortOption(sortBy);
    // Sorting logic here
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className=''>
      <div className='fixed top-0 left-0 w-full z-10'>
        <MarketNav />
      </div>

      {/* Toggle button for sidebar */}
      <div className="flex justify-between p-4 mt-20 mx-4">
        <div className='text-3xl font-semibold'>Marketplace</div>
        <Menu onClick={toggleSidebar} aria-label="toggle sidebar" fontSize="large" />
      </div>

      <div className="px-8 bg-white text-gray-700 min-h-screen mb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          {isSidebarVisible && (
            <div className="lg:w-1/4 space-y-8">
              <div className='bg-[#E3F8B1] p-4 rounded-lg'>
                <CategoryFilter setFilteredProducts={setFilteredProducts} />
                <PriceFilter setFilteredProducts={setFilteredProducts} />
              </div>
            </div>
          )}

          {/* Main content - Takes full width when sidebar is hidden */}
          <div className={`${isSidebarVisible ? 'lg:w-3/4' : 'w-full'} bg-[#E3F8B1] p-4 rounded-lg`}>
            {/* Sorting Bar */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Crop Production</h2>
              <div className="flex items-center space-x-4">
                <select
                  className="p-2 border rounded"
                  value={sortOption}
                  onChange={handleSort}
                >
                  <option value="">Sort by</option>
                  <option value="price">Price</option>
                  <option value="name">Name</option>
                </select>
                <select
                  className="p-2 border rounded"
                  value={sortOption}
                  onChange={handleSort}
                >
                  <option value="">Type</option>
                  <option value="price">Crop</option>
                  <option value="name">Animal</option>
                </select>
                <select
                  className="p-2 border rounded"
                  value={sortOption}
                  onChange={handleSort}
                >
                  <option value="">Price</option>
                  <option value="price">Cheap</option>
                  <option value="name">Expensive</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Marketplace;
