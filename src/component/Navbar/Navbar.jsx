import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { logoutUser } from "../../Redux/userSlice";
import Login from "../../pages/Login"; // Import the Login modal
import { addToCart } from "../../Redux/cartSlice"; // ✅ Import addToCart action

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email } = useSelector((state) => state.user); // ✅ Get user email
  const cartItems = useSelector((state) => state.cart.items); // ✅ Get cart items

  // Extract username before @
  const username = email ? email.split("@")[0] : "";

  // State for Login Modal
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isLoggedIn = !!email; // ✅ Check if user is logged in

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleCartClick = () => {
    navigate("/cart", { state: { cartItems } }); // ✅ Navigate to cart
  };

  // ✅ Prevent adding items when user is logged out
  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      alert("Please log in to add items to your cart."); // ✅ Show alert
      return;
    }
    dispatch(addToCart(product)); // ✅ Add to cart
  };

  return (
    <>
      <div className="grid grid-cols-5 md:grid md:grid-cols-6 lg:grid lg:grid-col-6 py-4 shadow-sm">
        {/* Logo */}
        <div className="md:col-start-1 flip_logo mt-2">
          <img
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            alt="Flipkart"
            width={"140px"}
            height={"140px"}
          />
        </div>

        {/* Search */}
        <div className="searchbar sm:col-start-2 sm:col-span-4 rounded-lg bg-blue-50">
          <div className="flex items-center justify-center pt-1 pl-4">
            <span className="text-xl rounded-lg outline-none">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="search"
              placeholder="Search for Products, Brands and More"
              className="w-full ml-4 bg-blue-50 outline-none text-xl"
            />
          </div>
        </div>

        {/* Login / Logout */}
        <div className="col-start-6 col-end-6 md:col-start-6 items-center">
          <div
            className="flex gap-2 items-center ml-4 w-32 justify-center h-full rounded-lg cursor-pointer transition-all hover:shadow-sm hover:bg-blue-500 duration-300"
            onClick={isLoggedIn ? handleLogout : handleLoginClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <i className="fa-solid fa-circle-user"></i>
            <h4>{isLoggedIn ? (isHovered ? "Logout" : username) : "Login"}</h4>
          </div>
        </div>

        {/* Cart Section ✅ */}
        <div className="col-start-7 col-end-7 md:col-start-7">
          <div
            className="flex gap-2 items-center ml-4 w-32 justify-center h-full cursor-pointer"
            onClick={isLoggedIn ? handleCartClick : () => alert("Please log in to view your cart.")} 
          >
            <div className="relative">
              <i className="fa-solid fa-cart-flatbed-suitcase text-2xl"></i>
              {isLoggedIn && cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {cartItems.length} {/* ✅ Show count only if logged in */}
                </span>
              )}
            </div>
            <h4>Cart</h4>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginOpen && <Login isOpen={isLoginOpen} onClose={handleCloseModal} />}
    </>
  );
};

export default Navbar;
