import React from "react";

const ProductCard = () => {
  let product = {
    _id: "67c5df6122915eeb474e0fb0",
    product_id: "1",
    name: "Samsung Galaxy S23",
    category: "Mobiles",
    price: 69999,
    brand: "Samsung",
    description: "Samsung Galaxy S23 with 8GB RAM and 128GB Storage",
    rating: 4.5,
    stock: 20,
    image: "/images/samsunggalaxys23.png",
    reviews: 22188,
    reviewsCount: 1926,
    features: [
      "8GB RAM | 128GB Storage",
      "6.1-inch Dynamic AMOLED Display",
      "50MP + 12MP + 10MP Rear Camera | 12MP Front Camera",
      "Snapdragon 8 Gen 2 Processor",
      "5000 mAh Battery",
    ],
    originalPrice: 74999,
    discount: 7,
    exchangeOffer: 6800,
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-wrap items-center space-y-4 md:space-y-0 md:space-x-4">
      {/* Product Image */}
      <div className="w-28 md:w-40 flex-shrink-0">
        <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h2 className="text-lg md:text-xl font-bold truncate">{product.name}</h2>
        <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-600">
          <span className="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
            {product.rating}
          </span>
          <span>
            {product.reviews} Ratings & {product.reviewsCount} Reviews
          </span>
        </div>
        <ul className="text-xs md:text-sm text-gray-700 mt-2 space-y-1">
          {product.features.map((feature, index) => (
            <li key={index} className="truncate">• {feature}</li>
          ))}
        </ul>
      </div>

      {/* Pricing Section */}
      <div className="text-right flex-shrink-0">
        <p className="text-xl md:text-2xl font-bold">₹{product.price}</p>
        <p className="text-xs md:text-sm line-through text-gray-500">₹{product.originalPrice}</p>
        <p className="text-xs md:text-sm text-green-600 font-semibold">{product.discount}% off</p>
        <p className="text-xs md:text-sm text-gray-600">Free delivery</p>
        <p className="text-xs md:text-sm text-blue-500 font-semibold">Save extra with combo offers</p>
        <p className="text-xs md:text-sm text-black font-semibold">Upto ₹{product.exchangeOffer} Off on Exchange</p>
      </div>
    </div>
  );
};

export default ProductCard;
