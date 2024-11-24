import React, { useState } from 'react';
import Footer from '../LandingPage/Footer';
import ProductGrid from './ProductGrid';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter'; // Price filter component
import MarketNav from './MarketNav';
import { dummyProducts } from '../../constants/constant';
import { Menu } from '@mui/icons-material'; // Material UI Menu Icon

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
    <div className="relative text-montserrat">
      {/* Navigation */}
      <div className="fixed top-0 left-0 w-full z-30">
        <MarketNav />
      </div>

      {/* Toggle button for sidebar */}
      <div className="flex justify-between p-4 mt-20 mx-4">
        <div className="text-3xl font-semibold tracking-wide">Market Place</div>
        <Menu onClick={toggleSidebar} aria-label="toggle sidebar" fontSize="large" />
      </div>

      <div className="md:px-4 bg-white text-gray-700 min-h-screen mb-8">
        <div className="relative flex flex-row gap-8">
          {/* Sidebar */}
          {isSidebarVisible &&(
          <div
            className={`${
              isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
            } fixed lg:relative left-0 top-20 md:top-0 z-20 h-full w-64 bg-[#c1e84991] p-4 rounded-xl`}
          >
            <div className="space-y-8">
              <CategoryFilter setFilteredProducts={setFilteredProducts} />
              <PriceFilter setFilteredProducts={setFilteredProducts} />
            </div>
          </div>
          )}

          {/* Main content - Takes full width when sidebar is hidden */}
          <div
            className={`${
              isSidebarVisible ? 'lg:w-3/4' : 'w-full'} bg-[#c1e84991] p-4 rounded-xl`}
          >
            {/* Sorting Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Crop Production</h2>
              <div className="flex flex-row flex-wrap items-center md:space-x-4">
                <select
                  className="p-2 border rounded-xl border-white m-1"
                  value={sortOption}
                  onChange={handleSort}
                >
                  <option value="">Sort by</option>
                  <option value="price">Price</option>
                  <option value="name">Name</option>
                </select>
                <select
                  className="p-2 border rounded-xl border-white m-1"
                  value={sortOption}
                  onChange={handleSort}
                >
                  <option value="">Type</option>
                  <option value="price">Crop</option>
                  <option value="name">Animal</option>
                </select>
                <select
                  className="p-2 border rounded-xl border-white m-1"
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
