import React from 'react'
import '../Navbar/navbar.css'
import SmallCard from '../Cards/SmallCard'

const MiniCart = () => {
  return (
    <div className='grid grid-col-11 mx-4  h-full border overflow-hidden ' >
    {/* <div className=" flex justify-center gap-x-16 h-full"></div> */}
    {/* top */}
    <div className="border col-start-1 col-span-8">
        {/* Caption */}
        <div className="w-full">     {/* it should take entire row */}
            <h1 className='font-bold'> 499 only</h1>
            </div>
        {/* card */}
         <div className="flex justify-center items-center gap-20 ml-12">
       <SmallCard/>
       <SmallCard/>
       <SmallCard/>
       <SmallCard/>
       <SmallCard/>
       <SmallCard/>
     
         </div>
    </div>
    <div className="promo border col-start-9 col-span-2 h-full w-full ml-2 ">
      <img src="./air.webp" alt="coupan" className='h-full w-full' />
    </div>


{/* bottom */}
    <div className="border s col-start-1 col-span-11 mt-4 mr-0 ">

           {/* Caption */}
           <div className="col-[1/-1]">
            <h1 className='font-bold'>499 only</h1>
            </div>
        {/* card */}
         <div className="flex justify-center items-center gap-20 ml-12">
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>
        

        
     
         </div>
   

        
    </div>
      
    </div>
  )
}

export default MiniCart