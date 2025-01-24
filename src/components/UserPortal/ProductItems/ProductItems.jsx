import React, { useState } from 'react';

const ProductItems = ({ productItems, setProductItems }) => {
  const maxItems = 3;

  const handleInputChange = (index, field, value) => {
    const updatedItems = [...productItems];
    updatedItems[index][field] = value;
    setProductItems(updatedItems);
  };

  const addItemField = () => {
    if (productItems.length < maxItems) {
      setProductItems([...productItems, { name: '', desc: '' }]);
    }
  };

  const handleRemoveItem = (index) => {
    setProductItems(productItems.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add Product Items</h2>
      <div className="space-y-4">
        {productItems.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
            {/* <h3 className="text-lg font-semibold mb-2">Item {index + 1}</h3> */}
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Product Item Name"
                value={item.name}
                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              />
              <textarea
                placeholder="Product Item Description"
                value={item.desc}
                onChange={(e) => handleInputChange(index, 'desc', e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
                type="button"
                onClick={() => handleRemoveItem(index)}
                className="text-red-500 hover:text-red-700 text-sm border-red-700"
            >
                Remove
            </button>
          </div>
        ))}

        {productItems.length < maxItems && (
          <button
            type="button"
            onClick={addItemField}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add Another Item
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItems;
