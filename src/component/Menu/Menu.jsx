import React from 'react'
import SmallMenu from '../Cards/SmallMenu'

const Menu = ({items}) => {

  const categories = [...new Set(
    items
      .filter((product) => 
        product.category && !["Men", "Laptop", "Camera", "Home"].includes(product.category) // Ensure category exists & exclude unwanted ones
      )
      .map((product) => product.category) // Extract valid category
  )];
  
  
console.log(categories);

  return (
    <div className='grid grid-col-11 m-4 border shadow-lg py-4  ' >
        <div className=" flex justify-center gap-x-16 w-full px-3 ">
        {categories.map((category, index) => (
          <SmallMenu key={index} category={category} index={index} />
        ))}

        </div>
        
    </div>
  )
}

export default Menu