import React, { useState } from "react";

const FilterSection = () => {
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [brand, setBrand] = useState("MOTOROLA");
  const [ratings, setRatings] = useState(4);

  return (
    <div className="p-4 border rounded-lg shadow-md w-full bg-white">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      
      {/* Price Filter */}
      <div className="mb-4">
        <label className="block font-medium">Price</label>
        <input
          type="range"
          min="0"
          max="30000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, e.target.value])}
          className="w-full"
        />
        <div className="text-sm">₹{priceRange[0]} - ₹{priceRange[1]}</div>
      </div>
      
      {/* Brand Filter */}
      <div className="mb-4">
        <label className="block font-medium">Brand</label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="MOTOROLA">Motorola</option>
        </select>
      </div>
      
      {/* Ratings Filter */}
      <div className="mb-4">
        <label className="block font-medium">Customer Ratings</label>
        <select
          value={ratings}
          onChange={(e) => setRatings(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="4">4★ & above</option>
          <option value="3">3★ & above</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
