import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className=' grid grid-cols-5 md:grid md:grid-cols-6 lg:grid lg:grid-col-6 py-4 shadow-sm'>
       {/* humburger */}
        <div className="sm:hidden humburger ml-6  mt-2 ">
        <i class="fa-solid fa-bars"></i>
        </div>
        {/* logo */}
        <div className=" md:col-start-1 flip_logo mt-2 ">
          <img src="./logo.svg" alt="" className='' width={'140px'} height={'140px'} />
        </div>
        {/* search */}
        <div className="searchbar   sm:col-start-2 sm:col-span-4 rounded-lg bg-blue-50">
            <div className='flex items-center justify-center pt-1 pl-4 '>
            <span className='text-xl rounded-lg outline-none'><i class="fa-solid fa-magnifying-glass" ></i></span>
            <input type="search" placeholder='Search for Products, Brands and More' className='w-full ml-4 bg-blue-50 outline-none text-xl'/>
            </div>
        </div>
        {/* login */}
        <div className="  col-start-6 col-end-6 md:col-start-6  items-center">
          <div className='flex gap-2 items-center ml-4 w-32  justify-center h-full hover:bg-blue-600 rounded-lg'>
          <i class="fa-solid fa-circle-user"></i>
          <h4>Login</h4>
          <span>▲</span>  
          {/* //"▲" : "▼"  */}
          </div>
        </div>
        {/* cart */}
        <div className=" col-start-7 col-end-7 md:col-start-7 ">
        <div className='flex gap-2 items-center ml-4  w-32  justify-center h-full'>
        <div className='flex flex-col -mt-5'>
          <span>0</span>
        <i class="fa-solid fa-cart-flatbed-suitcase"></i>
          </div>         
         <h4 className=''>Cart</h4>
          </div>
        </div>


        {/* dots */}
        <div className=" hidden md:block md:col-start-8  md:pr-4">
        <div className='flex gap-2 items-center ml-4  w-32  justify-center h-full'>
        <div className='flex flex-col'>
        <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>         
         
          </div>

        </div>
    </div>
  )
}

export default Navbar