import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
  <div className="border rounded-2xl shadow-sm hover:shadow-lg transition-shadow bg-white flex flex-col justify-between h-full">
    <div>
      <div className="relative">
        <img
          src={`https://farmersmart.com.ng/images/product/${product.product_image_f}`}
          alt={product.product_name}
          className="relative w-full h-40 object-cover mb-4 rounded-t-2xl"
        />
        {/* <button className="absolute right-4 bottom-1 text-gray-400 hover:text-gray-600">
          <FavoriteBorderOutlined />
        </button> */}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold">{product.product_name}</h3>
          <span className="text-[#F7C531] font-extrabold text-xl">
            ₦{product.product_normal_price}
          </span>
        </div>
        <p className="text-gray-500 text-xs mt-1 mb-4">{product.product_short_desc}</p>
      </div>
    </div>

    <Link
      to={`/products/${product.id}`}
      className="block text-center text-black w-1/2 mx-auto bg-[#A9D158] font-semibold py-2 rounded-2xl hover:bg-[#8BBB4D] transition-colors mb-4"
    >
      View
    </Link>
  </div>

  );
};

export default ProductCard;
