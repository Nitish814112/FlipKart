import React from "react";
import SmallCard from "../Cards/SmallCard";
import "../Navbar/navbar.css";

const Duo = ({items}) => {
  if(!items) return "Loading"
  

  let shoes =items.filter((prod)=>prod.category==='Shoes').slice(0,4);
  let appliances =items.filter((prod)=>prod.category==='Appliances').slice(0,4);
  let women =items.filter((prod)=>prod.category==='Women').slice(0,4);

 
  


  return (
    <div className="mx-4 h-full border-2 w-full">
      {/* Parent container with flex-nowrap to keep everything in a single row */}
      <div className="flex flex-nowrap gap-2 w-full">
        
        {/* 1st Column (Always Visible) */}
        <div className="border w-full md:w-1/2 lg:w-1/3 p-4">
          <h1 className="text-lg font-bold mb-4">Shoes Top Pick</h1>
          <div className="grid grid-cols-2 gap-2">
          {shoes.map((prod, i) => (
              <SmallCard key={prod.id || i} prod={prod} />
           ))}
          </div>
        </div>

        {/* 2nd Column (Hidden on `sm`, Visible from `md` and above) */}
        <div className="border second_Column w-full md:w-1/2 lg:w-1/3 p-4">
          <h1 className="text-lg font-bold mb-4">Appliances Top Pick</h1>
          <div className="grid grid-cols-2 gap-2">
          {appliances.map((prod, i) => (
              <SmallCard key={prod.id || i} prod={prod} />
           ))}
          </div>
        </div>

        {/* 3rd Column (Hidden below `lg`) */}
        <div className="border w-full lg:w-1/3 p-4 hidden lg:block">
          <h1 className="text-lg font-bold mb-4">Women's Top Pick</h1>
          <div className="grid grid-cols-2 gap-2">
          {women.map((prod, i) => (
              <SmallCard key={prod.id || i} prod={prod} />
           ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Duo;
