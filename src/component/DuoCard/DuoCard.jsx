import React from "react";
import SmallCard from "../Cards/SmallCard";
import "../Navbar/navbar.css";

const DuoCard = ({items}) => {
  if(!items) return "Loading"
  

  let electronics =items.filter((prod)=>prod.category==='Electronics').slice(0,4);
  let furniture =items.filter((prod)=>prod.category==='Furniture').slice(0,4);
  let toys =items.filter((prod)=>prod.category==='Toys').slice(0,4);

  console.log("electronics",electronics);
  


  return (
    <div className="mx-4 h-full border-2 w-full">
      {/* Parent container with flex-nowrap to keep everything in a single row */}
      <div className="flex flex-nowrap gap-2 w-full">
        
        {/* 1st Column (Always Visible) */}
        <div className="border w-full md:w-1/2 lg:w-1/3 p-4">
          <h1 className="text-lg font-bold mb-4">Electronics Top Pick</h1>
          <div className="grid grid-cols-2 gap-2">
          {electronics.map((prod, i) => (
              <SmallCard key={prod.id || i} prod={prod} items={items} />
           ))}
          </div>
        </div>

        {/* 2nd Column (Hidden on `sm`, Visible from `md` and above) */}
        <div className="border second_Column w-full md:w-1/2 lg:w-1/3 p-4">
          <h1 className="text-lg font-bold mb-4">Furniture Top Pick</h1>
          <div className="grid grid-cols-2 gap-2">
          {furniture.map((prod, i) => (
              <SmallCard key={prod.id || i} prod={prod} />
           ))}
          </div>
        </div>

        {/* 3rd Column (Hidden below `lg`) */}
        <div className="border w-full lg:w-1/3 p-4 hidden lg:block">
          <h1 className="text-lg font-bold mb-4">Toys Top Pick</h1>
          <div className="grid grid-cols-2 gap-2">
          {toys.map((prod, i) => (
              <SmallCard key={prod.id || i} prod={prod} />
           ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DuoCard;
