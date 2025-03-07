import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCart, removeFromCart, updateQuantity } from "../Redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchCart()); // Fetch cart items when the page loads
  }, [dispatch]);

  // Calculate Total Price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle Increment Quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ productId: item._id, quantity: item.quantity + 1 }));
  };

  // Handle Decrement Quantity (Removes item if quantity reaches 0)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ productId: item._id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromCart(item._id)); // If quantity is 1, remove item
    }
  };

  // Handle Remove Item
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // ✅ Handle Place Order
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Redirect to Order Page with cart data
    navigate("/order", { state: { cartItems, totalPrice } });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-center text-2xl font-bold my-4">Your Cart</h2>

      {cartItems.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side - Product List */}
          <div className="w-full md:w-2/3">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between border p-4 my-2 bg-white shadow-md rounded-lg">
                {/* Product Image */}
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />

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
            ))}
          </div>

          {/* Right Side - Billing Summary */}
          <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-xl font-semibold mb-4">Billing Summary</h3>
            <div className="flex justify-between text-lg font-medium">
              <span>Total Amount:</span>
              <span>₹{totalPrice}</span>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-green-500 text-white py-2 text-lg font-semibold rounded-md mt-6"
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
