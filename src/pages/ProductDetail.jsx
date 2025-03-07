import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice"; // Import Redux action
import ProductCard from "../component/Cards/ProductCard";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { prod, items } = location.state || {}; // ✅ Handle undefined state
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const isLoggedIn = useSelector((state) => state.user.email !== null); // ✅ Get login status from Redux


  let relatedData = items.filter(
    (relatedProduct) =>
      relatedProduct.category === prod.category && relatedProduct.product_id !== prod.product_id
  );

  // ✅ Updated handleAddToCart Function
  function handleAddToCart() {
    if (!isLoggedIn) {
      toast.warning("Please log in to add items to your cart."); // ✅ Alert if user is not logged in
      return;
    }
  
    if (product?.size?.length > 0 && !selectedSize) {
      toast.warning("Please select a size before adding to cart."); // ✅ Alert if size is not selected
      return;
    }
  
    // ✅ Check if product is already in the cart
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const isProductInCart = existingCart.some(
      (item) => item._id === product._id && item.size === (selectedSize || "Default")
    );
  
    if (isProductInCart) {
      toast.warning("You have the same product in your cart."); // ✅ Alert if product is already in cart
      return;
    }
  
    // ✅ Create cart item object
    const cartItem = {
      ...product,
      size: selectedSize || "Default",
      quantity: 1,
    };
  
    dispatch(addToCart(cartItem))
      .unwrap()
      .then(() => toast.success("Product added to cart!")) // ✅ Alert on success
      .catch((error) => toast.error(error)); // ✅ Alert on error
  }
  
  

  useEffect(() => {
    if (prod) {
      setProduct(prod);
    }
  }, [prod]);

  if (!product) return <div className="text-center mt-10 text-xl">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="flex justify-center text-center h-[250px] w-[400px]">
          <img
            src={product?.image || "/images/default.png"}
            alt={product?.name || "Product Image"}
            className="rounded-lg shadow-lg ml-40"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold mb-2">{product?.name || "No Name Available"}</h2>
          <p className="text-gray-600">{product?.description || "No Description Available"}</p>
          <div className="mt-2 text-lg font-medium">Brand: {product?.brand || "N/A"}</div>
          <div className="mt-2 text-lg font-medium">Stock: {product?.stock || "Out of stock"}</div>
          <div className="mt-2 text-lg font-medium">Rating: ⭐{product?.rating || "No rating"}</div>

          {/* Sizes */}
          {product?.size && product.size.length > 0 && (
            <div className="mt-2">
              <span className="font-semibold">Available Sizes: </span>
              <select
                className="ml-2 p-1 border rounded-lg"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="" disabled>
                  Select Size
                </option>
                {product.size.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Pricing */}
          <div className="mt-4 text-xl font-semibold text-green-600">
            ₹{product?.price || "N/A"}
          </div>
          {product?.originalPrice && (
            <div className="text-gray-500 line-through">₹{product.originalPrice}</div>
          )}
          {product?.discount && <div className="text-green-500">{product.discount}% off</div>}

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Buy Now
            </button>
            <button
              className="bg-gray-200 text-black px-6 py-2 rounded-lg hover:bg-gray-300"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-4">
        <h1 className="py-4 text-2xl font-bold">Related Products</h1>
        {relatedData.length > 0 ? (
          <div className="">
            {relatedData.map((data, i) => (
              <ProductCard product={data} key={i} items={items} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No related products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
