import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { emptyCart } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";

const OrderPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

    // Address state
    const [address, setAddress] = useState(() => JSON.parse(localStorage.getItem("userAddress")) || "");
    const [isEditing, setIsEditing] = useState(!address);

    // Payment state
    const [paymentDetails, setPaymentDetails] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focused: ""
    });

    // Save address to localStorage
    const saveAddress = () => {
        if (address.trim() === "") {
            alert("Please enter a valid address.");
            return;
        }
        localStorage.setItem("userAddress", JSON.stringify(address));
        setIsEditing(false);
    };

    // Validate and place order
    const handlePlaceOrder = async () => {
        if (!address) {
            alert("Please enter your address.");
            return;
        }
    
        const { number, name, expiry, cvc } = paymentDetails;
        if (!number || !name || !expiry || !cvc) {
            alert("Please complete the payment details.");
            return;
        }
    
        console.log("Order placed!", { cartItems, totalPrice, address, paymentDetails });
    
        try {
            // ✅ Wait for cart to be emptied before navigating
            await dispatch(emptyCart()).unwrap();
    
            // ✅ Ensure the state is updated before navigation
            navigate("/order-success");
        } catch (error) {
            console.error("Error emptying cart:", error);
        }
    };
    


    return (
        <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">
            {/* Left Side: Order Summary */}
            <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item._id} className="flex items-center space-x-4 border-b pb-3 mb-3">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                            <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No items in cart.</p>
                )}
                <h3 className="font-bold text-lg">Total: ₹{totalPrice}</h3>
            </div>

            {/* Right Side: Address & Payment */}
            <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-bold mb-4">Billing Details</h2>

                {/* Address Section */}
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full border p-2 rounded mb-2"
                        />
                        <button onClick={saveAddress} className="bg-blue-500 text-white px-4 py-2 rounded">Save Address</button>
                    </div>
                ) : (
                    <div>
                        <p className="border p-2 rounded mb-2">{address}</p>
                        <button onClick={() => setIsEditing(true)} className="text-blue-500 underline">Edit Address</button>
                    </div>
                )}

                {/* Payment Section */}
                <h2 className="text-lg font-semibold mt-4">Payment</h2>
                <Cards {...paymentDetails} />
                <input
                    type="text"
                    name="number"
                    placeholder="Card Number"
                    maxLength="16"
                    className="w-full border p-2 rounded mt-2"
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, number: e.target.value })}
                    onFocus={(e) => setPaymentDetails({ ...paymentDetails, focused: e.target.name })}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Cardholder Name"
                    className="w-full border p-2 rounded mt-2"
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, name: e.target.value })}
                    onFocus={(e) => setPaymentDetails({ ...paymentDetails, focused: e.target.name })}
                />
                <div className="flex space-x-2 mt-2">
                    <input
                        type="text"
                        name="expiry"
                        placeholder="MM/YY"
                        maxLength="5"
                        className="border p-2 rounded w-full"
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, expiry: e.target.value })}
                        onFocus={(e) => setPaymentDetails({ ...paymentDetails, focused: e.target.name })}
                    />
                    <input
                        type="text"
                        name="cvc"
                        placeholder="CVC"
                        maxLength="3"
                        className="border p-2 rounded w-full"
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, cvc: e.target.value })}
                        onFocus={(e) => setPaymentDetails({ ...paymentDetails, focused: e.target.name })}
                    />
                </div>

                {/* Place Order Button */}
                <button
                    onClick={handlePlaceOrder}
                    disabled={!address || !paymentDetails.number || !paymentDetails.name || !paymentDetails.expiry || !paymentDetails.cvc}
                    className={`w-full py-2 rounded mt-4 ${(!address || !paymentDetails.number || !paymentDetails.name || !paymentDetails.expiry || !paymentDetails.cvc) ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 text-white"}`}
                >
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default OrderPage;
