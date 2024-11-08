// import React from 'react';
// import { useParams } from 'react-router-dom';
// import dummyProducts from '../../constants/constant'; 

// const ProductDetails = () => {
//   const { id } = useParams();
//   const product = dummyProducts.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   return (
//     // Still going to add category to this so as to allow filtering by category
//     <div className="p-8 mt-20 bg-white text-gray-700 min-h-screen">
//       <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-4" />
//       <h1 className="text-3xl font-bold">{product.name}</h1>
//       <p className="text-gray-500 mt-4">{product.longDescription}</p>
//       <p className="text-gray-500 mt-4">Farmer: {product.longDescription}</p>
//       <p className="text-gray-500 mt-4">Quantity: <input type="number" className='w-24'/></p>
//       <div className="mt-6">
//         <span className="text-2xl font-bold text-farmersmartGreen">${product.price.toFixed(2)}</span>
//         <button className="ml-4 bg-farmersmartDarkGreen text-white px-4 py-2 rounded">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;



import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummyProducts } from '../../constants/constant';
import MarketNav from './MarketNav';
import Footer from '../LandingPage/Footer';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1); // Track selected quantity

  if (!product) {
    return <div className="text-center text-xl text-gray-500">Product not found.</div>;
  }

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-30">
        <MarketNav />
      </div>
      <div className="flex flex-col lg:flex-row items-start p-6 mt-16 bg-gray-50">
        {/* Product Image */}
        <div className="lg:w-1/2 w-full p-4 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full lg:max-w-lg h-auto rounded-lg shadow-md object-cover"
          />
        </div>
        {/* Product Details */}
        <div className="lg:w-1/2 w-full p-4 text-gray-700">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-2">Price: <span className="text-farmersmartGreen font-semibold">₦{product.price.toLocaleString()}</span></p>
          <p className="text-md text-gray-500 mb-4">{product.longDescription}</p>
          <p className="text-md text-gray-500 mb-4">Farmer: <span className="font-semibold">{product.farmerName}</span></p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <label className="text-gray-600 mr-2">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-farmersmartGreen"
              min="1"
            />
          </div>

          {/* Price and Add to Cart */}
          <div className="flex items-center mt-4">
            <button
              className="bg-farmersmartDarkGreen text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition duration-200"
            >
            Buy
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
