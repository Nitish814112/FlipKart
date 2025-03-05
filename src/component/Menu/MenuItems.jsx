import React from "react";
import { useNavigate } from "react-router-dom";

const MenuItems = ({ categories, items }) => {
  const navigate = useNavigate();

  function handleClick(category) {
    navigate("/product", { state: { category, items } }); // ✅ Pass only clicked category
  }

  return (
    <div className="bg-white shadow-md p-3 flex justify-center">
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm font-semibold text-center">
        {categories.map((category, i) => (
          <span
            className="cursor-pointer"
            key={i}
            onClick={() => handleClick(category)} // ✅ Pass category dynamically
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
