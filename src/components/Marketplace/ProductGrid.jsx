import React from 'react';
import ProductCard from './ProductCard'; // Each product's info will be encapsulated in ProductCard

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
