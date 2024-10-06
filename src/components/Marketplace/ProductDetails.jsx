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
import {dummyProducts} from '../../constants/constant';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);  // Track selected quantity

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="p-8 mt-20 bg-white text-gray-700 min-h-screen">
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-4" />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-500 mt-4">{product.longDescription}</p>
      <p className="text-gray-500 mt-4">Farmer: {product.farmerName}</p>
      <p className="text-gray-500 mt-4">
        Quantity: 
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(parseInt(e.target.value))} 
          className="w-24 ml-2 border px-2 py-1"
        />
      </p>
      <div className="mt-6">
        <span className="text-2xl font-bold text-farmersmartGreen">${product.price.toFixed(2)}</span>
        <button 
          onClick={() => {
            addToCart(product, quantity);
            alert('Product added to cart')
          }} 
          className="ml-4 bg-farmersmartDarkGreen text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
