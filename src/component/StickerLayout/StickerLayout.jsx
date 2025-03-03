import React from 'react'


const StickerLayout = () => {
  return (
    <div className=' mx-4  h-full border -2 ' >
       <div className="flex border object-cover" >
       <div className=" border">
        <img src="./storage.webp" alt="storage" className='object-fit' />
        </div>
        <div className="ml-2 border">
        <img src="./shoe.webp" alt="" className='object-fit' />
        </div>
        <div className="ml-2 border">
        <img src="./kurta.webp" alt="" className='object-fit' />
        </div>
       </div>
   </div>
  )
}

export default StickerLayout