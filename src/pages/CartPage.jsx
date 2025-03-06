import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeFromCart, updateQuantity } from "../Redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchCart()); // Fetch cart items when the page loads
  }, [dispatch]);

  // ✅ Handle Increment Quantity
  const handleIncrement = (item) => {
    console.log("Increment button clicked for:", item); // ✅ Debugging log
    dispatch(updateQuantity({ productId: item._id, quantity: item.quantity + 1 }));
  };

  // ✅ Handle Decrement Quantity (Removes item if quantity reaches 0)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ productId: item._id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromCart(item._id)); // If quantity is 1, remove item
    }
  };

  // ✅ Handle Remove Item
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-center text-2xl font-bold my-4">Your Cart</h2>
      
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item._id} className="flex items-center justify-between border p-4 my-2 bg-white shadow-md rounded-lg">
            {/* Product Image */}
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />

            {/* Product Details */}
            <div className="flex-1 ml-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">Price: ₹{item.price}</p>
              <p className="text-gray-600">Total: ₹{item.price * item.quantity}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-3">
              <button onClick={() => handleDecrement(item)} className="bg-gray-300 px-3 py-1 rounded">
                -
              </button>
              <span className="text-lg font-semibold">{item.quantity}</span>
              <button onClick={() => handleIncrement(item)} className="bg-gray-300 px-3 py-1 rounded">
                +
              </button>
            </div>

            {/* Remove Button */}
            <button onClick={() => handleRemove(item._id)} className="bg-red-500 text-white px-4 py-2 rounded">
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
