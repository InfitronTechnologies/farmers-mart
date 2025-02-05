import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const PriceFilter = ({ products, setFilteredProducts }) => {
  const [lowerPrice, setLowerPrice] = useState('');
  const [higherPrice, setHigherPrice] = useState('');
  const navigate = useNavigate() 

  const filterPrice = () => {
    // Convert lowerPrice and higherPrice to numbers
    const minPrice = parseFloat(lowerPrice);
    const maxPrice = parseFloat(higherPrice);

    // Validate price range inputs
    if (isNaN(minPrice) || isNaN(maxPrice) || minPrice > maxPrice) {
      console.error("Invalid price range");
      return;
    }

    // Filter products based on the price range
    const filteredProducts = products.filter(
      (product) =>
        product.product_normal_price >= minPrice &&
        product.product_normal_price <= maxPrice
    );

    // Update the parent component with the filtered products
    if (filteredProducts.length === 0) {
      toast.error("No product within price range", { // Display a success toast
        position: "top-right", // Customize position
        autoClose: 2500, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        setErrorMessage(null); // Clear error message after successful submission
        setFilteredProducts(products)
      }, 3000)
      setHigherPrice('')
      setLowerPrice('')
    } else {
      setFilteredProducts(filteredProducts);
      setHigherPrice('')
      setLowerPrice('')
    }
  };

  return (
    <div>
      <div className='flex flex-row justify-between mb-3'>
        <h3 className="text-lg font-bold">Price (₦)</h3>
        <button
          className="font-semibold text-orange-500"
          onClick={filterPrice}
        >
          APPLY
        </button>
      </div>
      <div className="flex items-center justify-between">
        <input
          type="number"
          placeholder="min"
          value={lowerPrice}
          onChange={(e) => setLowerPrice(e.target.value)}
          className="border px-2 py-1 w-24"
        />
        <span> - </span>
        <input
          type="number"
          placeholder="max"
          value={higherPrice}
          onChange={(e) => setHigherPrice(e.target.value)}
          className="border px-2 py-1 w-24"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
