import React from "react";
import MenuItems from "../component/Menu/MenuItems";
import FilterSection from "../component/FilterSection/FilterSection";
import ProductCard from "../component/Cards/ProductCard";
import { useLocation } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();
  const { category, items = [], searchResults = [] } = location.state || {}; 

  // ✅ Combine categories from both `items` and `searchResults`
  const allProducts = [...items, ...searchResults];
  const categories = [...new Set(allProducts.map((data) => data.category))];

  console.log("Categories:", categories);

  if (allProducts.length === 0) {
    return <h2 className="text-center text-red-500">No products available!</h2>;
  }

  // ✅ Determine which products to display: search results or full items list
  let displayProducts = searchResults.length > 0 ? searchResults : items;

  // ✅ Apply category filtering even when search results are displayed
  if (category) {
    displayProducts = displayProducts.filter((prod) => prod.category === category);
  }

  console.log("Filtered Products from ProductPage:", displayProducts);

  return (
    <div className="flex flex-col items-center w-full p-4">
      {/* ✅ Ensure the category menu always shows */}
      <MenuItems categories={categories} items={allProducts} />
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-4 mt-4">
        <div className="w-full md:w-1/4">
          <FilterSection />
        </div>
        <div className="w-full md:w-3/4 flex flex-col gap-4">
          {displayProducts.length > 0 ? (
            displayProducts.map((product) => (
              <ProductCard key={product._id} product={product} items={allProducts} className="w-full" />
            ))
          ) : (
            <h2 className="text-center text-red-500">
              No products found {category ? `for "${category}"` : "!"}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
