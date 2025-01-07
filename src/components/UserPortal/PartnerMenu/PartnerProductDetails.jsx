import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PartnerProductDetails = () => {
  const { id } = useParams(); // Retrieve the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const url =
        process.env.NODE_ENV === "production"
          ? `https://ourservicestech.com.ng/farmmart_api/v2/product/select_by_id_get_product?id=${id}`
          : `/farmmart_api/v2/product/select_by_id_get_product?id=${id}`;

      try {
        const response = await axios.get(url);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center py-10 text-gray-600">Loading product details...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Product Header */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          {/* Product Image */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <img
              src={`https://ourservicestech.com.ng/farmmart_api/images/product/${product.product_image_f}`}
              alt={product.product_name}
              className="rounded-lg shadow-md object-cover w-full h-72"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {product.product_name}
            </h1>
            <p className="text-gray-600 mb-4">{product.product_long_desc}</p>

            {/* Product Info */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-semibold">Normal Price:</span>
                <span className="text-gray-800 font-bold">₦{product.product_normal_price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-semibold">Promo Price:</span>
                <span className="text-green-600 font-bold">₦{product.product_promo_price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-semibold">Weight:</span>
                <span className="text-gray-800">{product.product_weight} kg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-semibold">Units Available:</span>
                <span className="text-gray-800">{product.units}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            onClick={() => alert("Edit product feature coming soon!")}
          >
            Edit Product
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            onClick={() => alert("Delete product feature coming soon!")}
          >
            Delete Product
          </button>
        </div>

        {/* Additional Product Images */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Additional Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[product.product_image_l, product.product_image_r]
              .filter(Boolean) // Exclude null or undefined images
              .map((image, index) => (
                <img
                  key={index}
                  src={`https://ourservicestech.com.ng/farmmart_api/images/product/${image}`}
                  alt={`Additional product image ${index + 1}`}
                  className="rounded-lg shadow-md object-cover w-full h-48"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerProductDetails;
