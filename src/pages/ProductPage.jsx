import React from "react";
import MenuItems from "../component/Menu/MenuItems";
import FilterSection from "../component/FilterSection/FilterSection";
import ProductCard from "../component/Cards/ProductCard";
import { useLocation } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();
  const { category, items } = location.state || {}; 

  let categories = [...new Set(items.map((data) => data.category))];
  console.log("Categories:", categories);
  
  

  if (!items) {
    return <h2 className="text-center text-red-500">No products available!</h2>;
  }

  const filteredProducts = category
    ? items.filter((prod) => prod.category === category)
    : items;

  console.log("Filtered Products from ProductPage:", filteredProducts);

  return (
    <div className="flex flex-col items-center w-full p-4">
      <MenuItems categories={categories} items={items} />
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-4 mt-4">
        <div className="w-full md:w-1/4">
          <FilterSection />
        </div>
        <div className="w-full md:w-3/4 flex flex-col gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} items={items} className="w-full" />
            ))
          ) : (
            <h2 className="text-center text-red-500">No products found for "{category}"</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
