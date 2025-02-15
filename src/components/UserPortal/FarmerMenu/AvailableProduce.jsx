import React, { useEffect, useState } from 'react';
import { useProfile } from '../../ProfileContext/ProfileContext';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

function AvailableProduce() {
  const { farmerId } = useProfile();
  const [products, setProducts] = useState([]);  
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null);
  const location = useLocation()

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Set loading to true before fetching
      setError(null);    // Clear any previous errors

      const url =
      process.env.NODE_ENV === 'production'
        ? `${import.meta.env.VITE_API_BASE_URL}/product/select_by_farmer_id_get_product?id=${farmerId}`
        : `/v2/product/select_by_farmer_id_get_product?id=${farmerId}`;

      try {
        const response = await axios.get(url);
        setProducts(response.data.data || []);
      } catch (error) {
        console.error('Error fetching Products', error);
        setError(error.message || "An error occurred.")
      } finally {
        setLoading(false)
      }
    };
    if (farmerId) { // Only fetch if farmerId is available
      fetchProducts();
    } else {
      setLoading(false); // If no farmerId, not loading
    }
  }, [farmerId]);

  if (loading) {
    return <div className="text-center text-gray-500 mt-8">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Produce</h2>

      {products.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-gray-600">#</th>
                <th className="px-4 py-2 text-left text-gray-600">Preview</th>
                <th className="px-4 py-2 text-left text-gray-600">Product Name</th>
                <th className="px-4 py-2 text-left text-gray-600">Normal Price (₦)</th>
                <th className="px-4 py-2 text-left text-gray-600">Promo Price (₦)</th>
                <th className="px-4 py-2 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} className="border-t">
                  <td className="px-4 py-2 text-gray-700">{index + 1}</td>
                  <td className="px-4 py-2">
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL}/images/product/${product.product_image_f}`}
                      alt={product.product_name}
                      className="h-16 w-16 object-cover rounded-md border"
                    />
                  </td>
                  <td className="px-4 py-2 text-gray-800 font-medium">
                    {product.product_name}
                  </td>
                  <td className="px-4 py-2 text-gray-700">
                    ₦{product.product_normal_price}
                  </td>
                  <td className="px-4 py-2 text-gray-700">
                    ₦{product.product_promo_price}
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`${location.pathname}/${product.id}`}
                        className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition"
                      >
                        View
                      </Link>
                      <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))} 
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-8">
          No products available, Create Farm and upload products.
        </div>
      )}
    </div>
  );
}

export default AvailableProduce;
