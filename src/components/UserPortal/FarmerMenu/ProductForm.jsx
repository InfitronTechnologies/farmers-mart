import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductForm({ addProduct }) {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: '',
    normalPrice: '',
    promoPrice: '',
    status: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSaveProduct = () => {
    addProduct(newProduct);
    navigate('/user/available-produce'); // Redirect to available produce after saving
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>

      {/* Input Form */}
      <div className="mb-4">
        <label className="block mb-2">Product Name</label>
        <input 
          type="text" 
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter Product Name" 
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Normal Price</label>
        <input 
          type="number" 
          name="normalPrice"
          value={newProduct.normalPrice}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter Normal Price" 
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Promo Price</label>
        <input 
          type="number" 
          name="promoPrice"
          value={newProduct.promoPrice}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter Promo Price" 
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Status</label>
        <input 
          type="text" 
          name="status"
          value={newProduct.status}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter Status (e.g., Available)" 
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Product Image URL</label>
        <input 
          type="text" 
          name="image"
          value={newProduct.image}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Enter Image URL" 
        />
      </div>

      {/* Save Product Button */}
      <button 
        onClick={handleSaveProduct} 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Product
      </button>
    </div>
  );
}

export default ProductForm;
