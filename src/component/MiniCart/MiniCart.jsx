import React from 'react'
import '../Navbar/navbar.css'
import SmallCard from '../Cards/SmallCard'

const MiniCart = ({items}) => {
  
  const lowestPriceItems = items
    .filter((item) => item.price !== undefined) // Exclude items without price
    .sort((a, b) => a.price - b.price)
    .slice(0, 6);

    const electronics = items
    .filter((item) => item.category?.trim().toLowerCase() === 'mobiles') 
    .slice(0, 7);
  
    console.log(electronics);
    
  return (
    <div className='grid grid-col-11  mx-4 border   h-full  shadow-lg overflow-hidden  ' >
    {/* <div className=" flex justify-center gap-x-16 h-full"></div> */}
    {/* top */}
    <div className="  col-start-1 col-span-8 ">
        {/* Caption */}
        <div className="w-full ml-4 mt-2">     {/* it should take entire row */}
            <h1 className='font-bold text-2xl'>Below 999 only</h1>
            </div>
        {/* card */}
         <div className="flex justify-center items-center gap-1 ml-2">
       
         {lowestPriceItems.map((prod, i) => (
  <SmallCard key={prod.id || i} prod={prod} />
))}

     
         </div>
    </div>
    <div className="promo border col-start-9 col-span-2 h-full w-full ml-2 ">
      <img src="./air.webp" alt="coupan" className='h-full w-full' />
    </div>


{/* bottom */}
    <div className="border s col-start-1 col-span-11 mt-4 mr-0 ">

           {/* Caption */}
           <div className="col-[1/-1]">
            <h1 className='font-bold text-2xl ml-4 mt-2'>Best Deal on Smartphones</h1>
            </div>
        {/* card */}
         <div className="flex justify-center items-center gap-1">
         {electronics.map((prod, i) => (
  <SmallCard key={prod.id || i} prod={prod} />
))}
        

        
     
         </div>
   

        
    </div>
      
    </div>
  )
}

export default MiniCart