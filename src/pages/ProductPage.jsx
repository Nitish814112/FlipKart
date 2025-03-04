import React from "react";
import MenuItems from "../component/Menu/MenuItems";
import FilterSection from "../component/FilterSection/FilterSection";
import ProductCard from "../component/Cards/ProductCard";


const products = [
  {
    id: 1,
    name: "MOTOROLA g35 5G (Leaf Green, 128 GB)",
    price: 9999,
    originalPrice: 12499,
    discount: "20% off",
    rating: 4.2,
    reviews: 1916,
    features: [
      "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "17.07 cm (6.72 inch) Full HD+ Display",
      "50MP + 8MP | 16MP Front Camera",
      "5000 mAh Battery",
      "T760 Processor",
    ],
    image: "leaf_green.png",
  },
  {
    id: 2,
    name: "MOTOROLA g35 5G (Guava Red, 128 GB)",
    price: 9999,
    originalPrice: 12499,
    discount: "20% off",
    rating: 4.2,
    reviews: 1916,
    features: [
      "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "17.07 cm (6.72 inch) Full HD+ Display",
      "50MP + 8MP | 16MP Front Camera",
      "5000 mAh Battery",
      "T760 Processor",
    ],
    image: "guava_red.png",
  },
];

const ProductPage = () => {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <MenuItems />
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-4 mt-4">
        <div className="w-full md:w-1/4">
          <FilterSection />
        </div>
        <div className="w-full md:w-3/4 flex flex-col gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} className="w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
