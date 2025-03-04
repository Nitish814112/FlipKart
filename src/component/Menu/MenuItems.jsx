import React from 'react'

const MenuItems = () => {
  return (
    <div className="bg-white shadow-md p-3 flex justify-center">
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm font-semibold text-center">
          <span className="cursor-pointer">Electronics</span>
          <span className="cursor-pointer">TVs & Appliances</span>
          <span className="cursor-pointer">Men</span>
          <span className="cursor-pointer">Women</span>
          <span className="cursor-pointer">Baby & Kids</span>
          <span className="cursor-pointer">Home & Furniture</span>
          <span className="cursor-pointer">Sports, Books & More</span>
          <span className="cursor-pointer">Flights</span>
          <span className="cursor-pointer">Offer Zone</span>
        </div>
      </div>
  )
}

export default MenuItems