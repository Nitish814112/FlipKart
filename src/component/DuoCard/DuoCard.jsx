import React from "react";
import SmallCard from "../Cards/SmallCard";
import "../Navbar/navbar.css";

const DuoCard = () => {
  return (
    <div className="mx-4 h-full border-2 w-full">
      {/* Parent container with flex-nowrap to keep everything in a single row */}
      <div className="flex flex-nowrap gap-2 w-full">
        
        {/* 1st Column (Always Visible) */}
        <div className="border w-full md:w-1/2 lg:w-1/3 p-4">
          <h1 className="text-lg font-bold mb-4">Season's Top Pick</h1>
          <div className="grid grid-cols-2 gap-2">
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
        </div>

        {/* 2nd Column (Hidden on `sm`, Visible from `md` and above) */}
        <div className="border second_Column w-full md:w-1/2 lg:w-1/3 p-4">
          <h1 className="text-lg font-bold mb-4">Season's Top Pick</h1>
          <div className="grid grid-cols-2 gap-2">
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
        </div>

        {/* 3rd Column (Hidden below `lg`) */}
        <div className="border w-full lg:w-1/3 p-4 hidden lg:block">
          <h1 className="text-lg font-bold mb-4">Season's Top Pick</h1>
          <div className="grid grid-cols-2 gap-2">
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DuoCard;
