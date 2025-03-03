import React from "react";

const SmallCard = () => {
  return (
    <div className="border flex flex-col items-center justify-center text-center p-4 min-h-[150px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[220px] w-full">
      <img src="./shirt.png" alt="T-Shirt" className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto" />
      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium whitespace-nowrap mt-2">
        T-Shirt
      </h4>
      <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold whitespace-nowrap">
        Under 499
      </h4>
    </div>
  );
};

export default SmallCard;
