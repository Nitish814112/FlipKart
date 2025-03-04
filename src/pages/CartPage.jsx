import React, { useEffect, useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  async function fetchCartData() {
    let response = await fetch('https://flipcart-backend-1.onrender.com/cart');
    let data = await response.json();
    setCartItems(data);
  }

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="md:col-span-2">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center border-b py-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.category} | {item.brand}</p>
                    <p className="text-green-600 font-semibold">₹{item.price}</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <button className="border px-2 py-1">-</button>
                      <span className="px-3">{item.quantity}</span>
                      <button className="border px-2 py-1">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Details */}
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Price Details</h2>
              <div className="text-sm">
                <p className="flex justify-between"><span>Price ({cartItems.length} items)</span> <span>₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span></p>
                <p className="flex justify-between text-green-600"><span>Discount</span> <span>-₹500</span></p>
                <p className="flex justify-between"><span>Delivery Charges</span> <span className="text-green-600">Free</span></p>
                <hr className="my-2" />
                <p className="flex justify-between font-semibold"><span>Total Amount</span> <span>₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0) - 500}</span></p>
              </div>
              <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md font-semibold">PLACE ORDER</button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
