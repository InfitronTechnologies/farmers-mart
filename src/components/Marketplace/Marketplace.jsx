import React, { useEffect, useState } from 'react';
import Footer from '../LandingPage/Footer';
import ProductGrid from './ProductGrid';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter'; // Price filter component
import MarketNav from './MarketNav';
import { Menu } from '@mui/icons-material'; // Material UI Menu Icon
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';

const Marketplace = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Sidebar visibility state
  const [categoryName, setCategoryName] = useState ('')
  const [subcategories, setSubcategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const getLatestProducts = async () => {
      const url = process.env.NODE_ENV === 'production'
      ? `https://ourservicestech.com.ng/farmmart_api/v2/product/list_20_product`
      : `/farmmart_api/v2/product/list_20_product`

      try {
        const response = await axios.get(url)
        setFilteredProducts(response.data.data)
        setAllProducts(response.data.data)
      } catch (error) {
        console.error('Product Error', error)
      } 
    }
    getLatestProducts();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },[])

    // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleSubcategoryProducts = async (name, id) => {
    const url = process.env.NODE_ENV === 'production'
    ? `https://ourservicestech.com.ng/farmmart_api/v2/product/select_by_subcat_id_get_product?id=${id}`
    : `/farmmart_api/v2/product/select_by_subcat_id_get_product?id=${id}`

    try{  
      const response = await axios.get(url)
      setFilteredProducts(response.data.data)
      setCategoryName(name)
    } catch (error) {
      console.error("Category Error:", error)
    }
  }

  return (
    <div className="relative text-montserrat">
      {/* Navigation */}
      <div className="fixed top-0 left-0 w-full z-30">
        <MarketNav setSearchResults={setFilteredProducts} />
      </div>

      {/* Toggle button for sidebar */}
      <div className="flex justify-between p-4 mt-20 mx-4">
        <div 
          className="text-3xl font-semibold tracking-wide"
          onClick={() => navigate("/marketplace")}
        >
          Market Place
        </div>
        <Menu onClick={toggleSidebar} aria-label="toggle sidebar" fontSize="large" />
      </div>

      <Loading isLoading={isLoading} />

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
              <CategoryFilter 
                setFilteredProducts={setFilteredProducts} 
                setCategoryName={setCategoryName}
                setSubcategories={setSubcategories}  
              />
              <PriceFilter 
                setFilteredProducts={setFilteredProducts} 
                products={allProducts}/>
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
              <h2 className="text-xl font-bold">{categoryName == '' ? "Produce": categoryName}</h2>
            </div>

            <div className='flex flex-row mb-4'>
            {subcategories.map((subcategory) => (
              <button 
                key={subcategory.id}
                onClick={() => handleSubcategoryProducts(subcategory.sub_category_name, subcategory.id)}
                className = "px-4 py-2 rounded-full text-sm text-white font-medium transition-colors duration-300 border-2 mx-2 border-farmersmartDarkGreen bg-farmersmartDarkGreen"
              >
                {subcategory.sub_category_name}
              </button>
            ))}  
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
