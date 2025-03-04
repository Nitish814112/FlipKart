import React, { useEffect, useState } from 'react';
import MenuItems from '../component/Menu/MenuItems';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  async function getData() {
    let appData = await fetch('https://flipcart-backend-1.onrender.com/data');
    let res = await appData.json();
    setProduct(res);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Menu Bar */}
      <MenuItems/>
      
      {product && (
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div>
              <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
            </div>
            
            {/* Product Details */}
            <div>
              <h1 className="text-2xl font-bold text-center md:text-left">{product.name}</h1>
              <p className="text-gray-600 text-sm text-center md:text-left">{product.category} | Brand: {product.brand}</p>
              <p className="text-lg font-semibold text-green-600 mt-2 text-center md:text-left">₹{product.price}</p>
              <p className="text-gray-500 text-sm mt-1 text-center md:text-left">Stock: {product.stock > 0 ? 'Available' : 'Out of Stock'}</p>
              <p className="mt-2 text-gray-700 text-center md:text-left">{product.description}</p>
              <div className="mt-3 flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-3">
                <button className="bg-orange-500 text-white py-2 px-6 rounded-md font-semibold">Buy Now</button>
                <button className="bg-yellow-500 text-white py-2 px-6 rounded-md font-semibold">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
