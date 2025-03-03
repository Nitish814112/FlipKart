import React from 'react'
import SmallMenu from '../Cards/SmallMenu'

const Menu = () => {
  return (
    <div className='grid grid-col-11 m-4 border shadow-lg py-4  ' >
        <div className=" flex justify-center gap-x-16 w-full px-3 ">
            <SmallMenu />
            <SmallMenu />
            <SmallMenu />
            <SmallMenu />
            <SmallMenu />
            <SmallMenu />
            <SmallMenu />
            <SmallMenu />
            <SmallMenu />

        </div>
        
    </div>
  )
}

export default Menu