import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Redux/userSlice";
import Login from "../../pages/Login";
import { setSearchQuery, searchProducts } from "../../Redux/searchSlice"; // ✅ Fixed import
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email } = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.items); // ✅ Get all products

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isLoggedIn = !!email;
  const username = email ? email.split("@")[0] : "";

  const handleLoginClick = () => setIsLoginOpen(true);
  const handleCloseModal = () => setIsLoginOpen(false);
  const handleLogout = () => dispatch(logoutUser());

  const handleCartClick = () => {
    if (isLoggedIn) navigate("/cart", { state: { cartItems } });
    else toast.warning("Please log in to view your cart.");
  };

  console.log();
  
  // ✅ Handle Search Functionality
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(setSearchQuery(value));

    if (value.trim() !== "") {
      const filteredResults = products.filter((prod) =>
        ["name", "brand", "category"].some((key) =>
          prod[key]?.toLowerCase().includes(value.toLowerCase()) // ✅ Safe optional chaining
        )
      );

      dispatch(searchProducts({ products, query: value })); // ✅ Redux Update
      navigate("/product", { state: { searchResults: filteredResults } });
    }
  };

  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-6 py-4 shadow-sm">
        {/* Logo */}
        <div className="md:col-start-1 flip_logo mt-2">
         <a href="/"> <img
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            alt="Flipkart"
            width={"140px"}
            height={"140px"}
          /></a>
        </div>

        {/* Search */}
        <div className="searchbar sm:col-start-2 sm:col-span-4 rounded-lg bg-blue-50">
          <div className="flex items-center justify-center pt-1 pl-4">
            <span className="text-xl rounded-lg outline-none">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearch}
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

        {/* Cart Section */}
        <div className="col-start-7 col-end-7 md:col-start-7">
          <div
            className="flex gap-2 items-center ml-4 w-32 justify-center h-full cursor-pointer"
            onClick={handleCartClick}
          >
            <div className="relative">
              <i className="fa-solid fa-cart-flatbed-suitcase text-2xl"></i>
              {isLoggedIn && cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {cartItems.length}
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
