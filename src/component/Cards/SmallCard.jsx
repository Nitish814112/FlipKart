import React from "react";
import { useNavigate } from "react-router-dom";


const SmallCard = ({ prod,items }) => {
  const navigate = useNavigate();
  if (!prod) return null;
  


  function handleClick() {
    navigate("/product/product/:prod.id", { state: { prod, items } });
  }

  return (
    <div className=" border flex flex-col items-center justify-center text-center p-4 min-h-[150px] 
    sm:min-h-[180px] md:min-h-[200px] lg:min-h-[220px] ml-2 gap-2 hover:cursor-pointer " onClick={()=>handleClick()}>
      <img
        src={prod.image || "/images/placeholder.jpg"}
        alt={prod.name || "Product"}
        className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain h-28"
      />
      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium whitespace-nowrap mt-2">
        {prod.name.slice(0,15) || "Unknown Product"}
      </h4>
      <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold whitespace-nowrap">
        ₹{prod.price || "N/A"}
      </h4>
    </div>
  );
};

export default SmallCard;
