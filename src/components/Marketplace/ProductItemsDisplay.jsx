import React from "react";

const ProductItemsDisplay = ({ items }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4 text-center text-farmersmartDarkGreen">
        Product Items
      </h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative group flex items-center justify-center bg-farmersmartLightGreen text-farmersmartDarkGreen 
            text-sm font-medium rounded-full px-4 py-2 shadow hover:shadow-md transition-all cursor-pointer"
          >
            <span>{item.product_item_name}</span>
            {/* Tooltip for description */}
            <div
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black 
              text-white text-xs p-2 rounded shadow-lg w-40 text-center"
            >
              {item.product_item_desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItemsDisplay;
