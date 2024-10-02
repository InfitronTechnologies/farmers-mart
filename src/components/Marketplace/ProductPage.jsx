// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetails = ({ products }) => {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === id); // Find the specific product by ID

//   return (
//     <div className="p-8 mt-20 bg-white text-gray-700 min-h-screen">
//       <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-4" />
//       <h1 className="text-3xl font-bold">{product.name}</h1>
//       <p className="text-gray-500 mt-4">{product.longDescription}</p>
//       <div className="mt-6">
//         <span className="text-2xl font-bold text-farmersmartGreen">${product.price}</span>
//         <button className="ml-4 bg-farmersmartDarkGreen text-white px-4 py-2 rounded">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import dummyProducts from '../data/products'; // Import dummy data

const ProductDetails = () => {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === parseInt(id)); // Find product by ID

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="p-8 mt-20 bg-white text-gray-700 min-h-screen">
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-4" />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-500 mt-4">{product.longDescription}</p>
      <div className="mt-6">
        <span className="text-2xl font-bold text-farmersmartGreen">${product.price.toFixed(2)}</span>
        <button className="ml-4 bg-farmersmartDarkGreen text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

