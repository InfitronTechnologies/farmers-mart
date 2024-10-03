// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="border p-4 rounded shadow-sm hover:shadow-lg transition-shadow">
//       <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
//       <h3 className="text-lg font-semibold">{product.name}</h3>
//       <p className="text-gray-500">{product.shortDescription}</p>
//       <Link
//         to={`/products/${product.id}`}
//         className="mt-4 inline-block bg-farmersmartDarkGreen text-white px-4 py-2 rounded"
//       >
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;


// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-sm hover:shadow-lg transition-shadow">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.shortDescription}</p>
      <span className="text-farmersmartDarkGreen font-bold">${product.price.toFixed(2)}</span>
      <Link
        to={`/products/${product.id}`}
        className="mt-4 inline-block bg-farmersmartDarkGreen text-white ml-2 px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
