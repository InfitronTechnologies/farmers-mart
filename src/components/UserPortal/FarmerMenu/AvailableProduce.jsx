import React from 'react';

function AvailableProduce({ products }) {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">List of Products</h2>

      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className='text-left'>#</th>
              <th className='text-left'>Preview</th>
              <th className='text-left'>Product</th>
              <th className='text-left'>Normal Price</th>
              <th className='text-left'>Promo Price</th>
              <th className='text-left'>Status</th>
              <th className='text-left'>Action View</th>
              <th className='text-left'>Action Edit</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><img src={product.image} alt={product.name} className="h-16 w-16 object-cover" /></td>
                <td>{product.name}</td>
                <td>{product.normalPrice}</td>
                <td>{product.promoPrice}</td>
                <td>{product.status}</td>
                <td><button className="bg-blue-500 text-white px-4 py-2">View</button></td>
                <td><button className="bg-green-500 text-white px-4 py-2">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AvailableProduce;
