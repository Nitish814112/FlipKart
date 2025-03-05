
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product,items }) => {
  const navigate = useNavigate();
  if (!product) return null; 

 
  function handleClick() {
    navigate(`/product/product/${product.id}`, { state: { prod: product, items } });
  }
  

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mb-2 hover:cursor-pointer" onClick={handleClick}>
      {/* Product Image */}
      <div className="w-32 md:w-40">
        <img
          src={product?.image || "/images/default.png"} // ✅ Use fallback image
          alt={product?.name || "Product Image"}
          className="w-[250px] h-[150px] object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h2 className="text-lg font-bold">{product?.name || "No Name Available"}</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span className="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
            {product?.rating || "N/A"}
          </span>
          <span>
            {product?.reviews || 0} Ratings & {product?.reviewsCount || 0} Reviews
          </span>
        </div>
        <ul className="text-sm text-gray-700 mt-2 space-y-1">
          {product?.features?.length > 0 ? (
            product.features.map((feature, index) => <li key={index}>• {feature}</li>)
          ) : (
            <li>No features available</li>
          )}
        </ul>
      </div>

      {/* Pricing Section */}
      <div className="text-right">
        <p className="text-2xl font-bold">₹{product?.price || "N/A"}</p>
        {product?.originalPrice && (
          <p className="text-sm line-through text-gray-500">₹{product.originalPrice}</p>
        )}
        {product?.discount && (
          <p className="text-sm text-green-600 font-semibold">{product.discount}% off</p>
        )}
        <p className="text-sm text-gray-600">Free delivery</p>
        {product?.exchangeOffer && (
          <p className="text-sm text-black font-semibold">
            Upto ₹{product.exchangeOffer} Off on Exchange
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
