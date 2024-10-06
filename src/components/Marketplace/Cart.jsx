import React from 'react';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="border p-4 mt-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-6 border-t pt-4">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-xl font-semibold">${totalPrice.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
